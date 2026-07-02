import nodemailer from 'nodemailer'

const HOST = process.env.SMTP_HOST
const PORT = Number(process.env.SMTP_PORT || 465)
const USER = process.env.SMTP_USER
const PASS = process.env.SMTP_PASS

/**
 * Adresse d'expédition. Doit rester la boîte authentifiée (SMTP_USER) pour
 * respecter SPF/DKIM — sinon le mail part en spam ou est rejeté.
 */
const FROM = process.env.SMTP_FROM || USER
/** Boîte qui reçoit les notifications (par défaut : la boîte d'envoi). */
const TO = process.env.CONTACT_TO || USER

/** Actif uniquement si les identifiants SMTP sont présents. */
export const mailEnabled = !!(HOST && USER && PASS)

const transporter = mailEnabled
  ? nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: PORT === 465, // 465 = SSL direct, 587 = STARTTLS
      auth: { user: USER, pass: PASS },
    })
  : null

type MailOptions = {
  subject: string
  text: string
  html?: string
  /** Répondre directement au visiteur (son email va ici, pas dans `from`). */
  replyTo?: string
  to?: string
}

/** Envoie un email via le SMTP de la boîte. */
export async function sendMail(opts: MailOptions): Promise<void> {
  if (!transporter) {
    throw new Error('SMTP non configuré')
  }

  await transporter.sendMail({
    from: FROM,
    to: opts.to || TO,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  })
}
