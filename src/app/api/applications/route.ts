import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { verifyAuth } from '@/lib/auth'
import { connectDB } from '@/lib/db'
import { Application } from '@/models/Application'
import { r2Enabled, uploadToR2 } from '@/lib/r2'

export const runtime = 'nodejs'

const MAX_SIZE = 5 * 1024 * 1024 // 5 Mo
const ALLOWED_EXT = ['pdf', 'doc', 'docx']

const extOf = (name: string) => (name.split('.').pop() || '').toLowerCase()

/** Stocke un fichier (CV / lettre) sur R2, avec repli local en dev. */
async function storeFile(
  file: File,
  prefix: string
): Promise<{ url: string; name: string }> {
  const buffer = Buffer.from(await file.arrayBuffer())
  const ext = extOf(file.name) || 'bin'
  const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
  const contentType = file.type || 'application/octet-stream'

  if (r2Enabled) {
    const url = await uploadToR2(buffer, `${prefix}/${uniqueId}`, contentType)
    return { url, name: file.name }
  }

  // Repli : stockage local (public/uploads/<prefix>/)
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads', prefix)
  if (!existsSync(uploadsDir)) {
    await mkdir(uploadsDir, { recursive: true })
  }
  await writeFile(path.join(uploadsDir, uniqueId), buffer)
  return { url: `/uploads/${prefix}/${uniqueId}`, name: file.name }
}

/** Réception d'une candidature (public). */
export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()

    const firstName = ((form.get('firstname') as string) || '').trim()
    const lastName = ((form.get('lastname') as string) || '').trim()
    const email = ((form.get('email') as string) || '').trim()
    const phone = ((form.get('phone') as string) || '').trim()
    const message = ((form.get('message') as string) || '').trim()
    const offerTitle = ((form.get('offerTitle') as string) || '').trim()
    const offerCompany = ((form.get('offerCompany') as string) || '').trim()

    const cv = form.get('cv') as File | null
    const lettre = form.get('lettre') as File | null

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Prénom, nom et email sont obligatoires.' },
        { status: 400 }
      )
    }
    if (!cv || cv.size === 0) {
      return NextResponse.json({ error: 'Le CV est obligatoire.' }, { status: 400 })
    }
    if (!ALLOWED_EXT.includes(extOf(cv.name)) || cv.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'CV invalide (PDF ou DOC, 5 Mo maximum).' },
        { status: 400 }
      )
    }
    const hasLettre = !!lettre && lettre.size > 0
    if (hasLettre && (!ALLOWED_EXT.includes(extOf(lettre!.name)) || lettre!.size > MAX_SIZE)) {
      return NextResponse.json(
        { error: 'Lettre invalide (PDF ou DOC, 5 Mo maximum).' },
        { status: 400 }
      )
    }

    const cvStored = await storeFile(cv, 'candidatures')
    const lettreStored = hasLettre ? await storeFile(lettre!, 'candidatures') : null

    await connectDB()
    await Application.create({
      offerTitle: offerTitle || 'Candidature spontanée',
      offerCompany: offerCompany || undefined,
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      message: message || undefined,
      cvUrl: cvStored.url,
      cvName: cvStored.name,
      lettreUrl: lettreStored?.url,
      lettreName: lettreStored?.name,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Application error:', error)
    return NextResponse.json(
      { error: "Envoi impossible pour le moment. Réessayez plus tard." },
      { status: 500 }
    )
  }
}

/** Liste des candidatures (admin uniquement). */
export async function GET(request: NextRequest) {
  const { authenticated, user } = await verifyAuth(request)
  if (!authenticated || user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  await connectDB()
  const applications = await Application.find().sort({ createdAt: -1 }).lean()
  return NextResponse.json({ applications })
}
