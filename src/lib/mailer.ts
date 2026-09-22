import nodemailer from 'nodemailer'

import { siteConfig } from '@/lib/seo'

/**
 * mailer.ts — Envoi des messages du formulaire de contact.
 *
 * Deux transports, dans cet ordre :
 *   1. Resend (`RESEND_API_KEY`) : expéditeur sur le domaine vbweb.fr, vérifié
 *      dans le compte Resend de l'agence. C'est le transport en production
 *      depuis le 22/09/2026 : Nour n'a pas transmis d'identifiants SMTP et le
 *      domaine bysconsulting.fr (IONOS) n'est pas vérifié chez Resend.
 *   2. SMTP (`SMTP_HOST` / `SMTP_USER` / `SMTP_PASS`) : la boîte de la cliente,
 *      le jour où elle nous en donne les accès.
 *
 * Sans l'un ni l'autre, `mailEnabled` vaut false et /api/contact reste en mode
 * démo (succès simulé, rien n'est envoyé).
 */

// ---- Resend -----------------------------------------------------------------

const RESEND_API_KEY = process.env.RESEND_API_KEY
/**
 * L'expéditeur doit rester sur un domaine vérifié chez Resend. Jamais une
 * adresse en resend.dev : le bac à sable n'écrit qu'au titulaire du compte.
 */
const RESEND_FROM = (process.env.RESEND_FROM || 'BYS Consulting <contact@vbweb.fr>').trim()

const resendEnabled = !!RESEND_API_KEY && !/resend\.dev/i.test(RESEND_FROM)

// ---- SMTP -------------------------------------------------------------------

const HOST = process.env.SMTP_HOST
const PORT = Number(process.env.SMTP_PORT || 465)
const USER = process.env.SMTP_USER
const PASS = process.env.SMTP_PASS

/**
 * Adresse d'expédition SMTP. Doit rester la boîte authentifiée (SMTP_USER) pour
 * respecter SPF/DKIM, sinon le mail part en spam ou est rejeté.
 */
const SMTP_FROM = process.env.SMTP_FROM || USER

const smtpEnabled = !!(HOST && USER && PASS)

const transporter = smtpEnabled
  ? nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: PORT === 465, // 465 = SSL direct, 587 = STARTTLS
      auth: { user: USER, pass: PASS },
    })
  : null

// ---- Commun -----------------------------------------------------------------

/** Boîte qui reçoit les notifications : celle de Nour, sauf surcharge. */
const TO = process.env.CONTACT_TO || siteConfig.email

/** Actif dès qu'un des deux transports est configuré. */
export const mailEnabled = resendEnabled || smtpEnabled

type MailOptions = {
  subject: string
  text: string
  html?: string
  /** Répondre directement au visiteur (son email va ici, pas dans `from`). */
  replyTo?: string
  to?: string
}

async function sendWithResend(opts: MailOptions): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [opts.to || TO],
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`Resend ${res.status} : ${detail.slice(0, 300)}`)
  }
}

async function sendWithSmtp(opts: MailOptions): Promise<void> {
  if (!transporter) throw new Error('SMTP non configuré')

  await transporter.sendMail({
    from: SMTP_FROM,
    to: opts.to || TO,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  })
}

/** Envoie un email par le premier transport disponible. */
export async function sendMail(opts: MailOptions): Promise<void> {
  if (resendEnabled) return sendWithResend(opts)
  if (smtpEnabled) return sendWithSmtp(opts)
  throw new Error('Aucun transport email configuré')
}
