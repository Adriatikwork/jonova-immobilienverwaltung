/**
 * EmailJS config — same pattern as Fahrschule 06.
 * Swap these IDs when JONOVA’s EmailJS service/template is ready
 * (or set NEXT_PUBLIC_EMAILJS_* env vars).
 */
export const EMAILJS = {
  serviceId:
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'YOUR_EMAILJS_SERVICE_ID',
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey:
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'YOUR_EMAILJS_PUBLIC_KEY',
} as const

export function isEmailJsConfigured(): boolean {
  return (
    !EMAILJS.serviceId.startsWith('YOUR_') &&
    !EMAILJS.templateId.startsWith('YOUR_') &&
    !EMAILJS.publicKey.startsWith('YOUR_')
  )
}
