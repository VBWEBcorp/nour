import { NextRequest, NextResponse } from 'next/server'

import { mailEnabled, sendMail } from '@/lib/mailer'
import { siteConfig } from '@/lib/seo'

export const runtime = 'nodejs'

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const esc = (s: string) =>
  s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c]!)

/** Réception d'un message du formulaire de contact → envoi vers la boîte BYS. */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))

    const firstName = String(body.firstname || '').trim()
    const lastName = String(body.lastname || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const message = String(body.message || '').trim()
    // Honeypot anti-spam : rempli uniquement par les bots.
    const trap = String(body.hp || '').trim()

    if (trap) {
      // On répond "succès" pour ne pas informer le bot du blocage.
      return NextResponse.json({ success: true })
    }

    if (!firstName || !lastName || !message) {
      return NextResponse.json(
        { error: 'Prénom, nom et message sont obligatoires.' },
        { status: 400 }
      )
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }

    const fullName = `${firstName} ${lastName}`

    // Mode démo (site front-only) : sans identifiants SMTP, on simule un envoi
    // réussi pour la démonstration. Renseigner les variables SMTP_* dans
    // .env.local bascule automatiquement en envoi réel (code ci-dessous).
    if (!mailEnabled) {
      console.info(
        `[contact] Mode démo — message de ${fullName} <${email}>${phone ? ` (${phone})` : ''} : ${message}`
      )
      return NextResponse.json({ success: true, demo: true })
    }

    const lines = [
      `Nom : ${fullName}`,
      `Email : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      '',
      'Message :',
      message,
    ].filter((l) => l !== null)

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#111;line-height:1.6">
        <h2 style="margin:0 0 16px">Nouveau message — ${esc(siteConfig.name)}</h2>
        <p style="margin:0 0 4px"><strong>Nom :</strong> ${esc(fullName)}</p>
        <p style="margin:0 0 4px"><strong>Email :</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
        ${phone ? `<p style="margin:0 0 4px"><strong>Téléphone :</strong> ${esc(phone)}</p>` : ''}
        <p style="margin:16px 0 4px"><strong>Message :</strong></p>
        <p style="margin:0;white-space:pre-wrap">${esc(message)}</p>
      </div>
    `

    await sendMail({
      subject: `Contact site — ${fullName}`,
      text: lines.join('\n'),
      html,
      replyTo: `${fullName} <${email}>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json(
      { error: "Envoi impossible pour le moment. Réessayez plus tard." },
      { status: 500 }
    )
  }
}
