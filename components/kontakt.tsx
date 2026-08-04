'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { EMAILJS, isEmailJsConfigured } from '@/lib/emailjs'
import { CONTACT, SITE_NAME } from '@/lib/site'
import { useLang } from './language-context'

type SubmitStatus = 'idle' | 'success' | 'error'

export function Kontakt() {
  const { t } = useLang()
  const showPhone = Boolean(CONTACT.phoneDisplay && CONTACT.phoneE164)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    liegenschaft: '',
    nachricht: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!isEmailJsConfigured()) {
        throw new Error('EmailJS is not configured yet')
      }

      // Same shape as Fahrschule — swap EMAILJS IDs when JONOVA service is live
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: fields.name,
          from_email: fields.email,
          phone: fields.phone || '—',
          property_type: fields.liegenschaft || '—',
          message: fields.nachricht,
          to_name: SITE_NAME,
        },
        EMAILJS.publicKey
      )

      setSubmitStatus('success')
      setFields({
        name: '',
        email: '',
        phone: '',
        liegenschaft: '',
        nachricht: '',
      })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="py-24 md:py-32" aria-labelledby="kontakt-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20">
          <div className="flex flex-col">
            <h2
              id="kontakt-heading"
              className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance mb-5"
            >
              {t('Wir freuen uns auf Ihre Anfrage.', 'We look forward to your enquiry.')}
            </h2>
            <p className="text-base leading-relaxed text-ink-muted text-pretty mb-10 max-w-prose">
              {t(
                'Ob einzelne Liegenschaft oder grösseres Portfolio – wir beraten Sie persönlich und entwickeln eine passende Verwaltungslösung.',
                'Whether a single property or a larger portfolio — we advise you personally and develop a suitable management solution.'
              )}
            </p>

            <ul className="space-y-5" role="list">
              {showPhone && (
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface text-primary flex-shrink-0">
                    <Phone size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-muted uppercase tracking-widest mb-0.5">
                      {t('Telefon', 'Phone')}
                    </p>
                    <a
                      href={`tel:${CONTACT.phoneE164}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>
              )}
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface text-primary flex-shrink-0">
                  <Mail size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs text-ink-muted uppercase tracking-widest mb-0.5">
                    E-Mail
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                  <p className="text-xs text-ink-muted mt-1">
                    {t(
                      'oder nutzen Sie das Formular auf der Seite',
                      'or use the form on this page'
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface text-primary flex-shrink-0">
                  <MapPin size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs text-ink-muted uppercase tracking-widest mb-0.5">
                    {t('Standort', 'Location')}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {t(CONTACT.areaServedDe, CONTACT.areaServedEn)}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-surface rounded-sm p-8 md:p-10">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <CheckCircle2 size={40} strokeWidth={1.2} className="text-primary" />
                <h3 className="font-serif text-2xl text-foreground">
                  {t('Vielen Dank für Ihre Anfrage.', 'Thank you for your enquiry.')}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted max-w-sm text-pretty">
                  {t(
                    'Wir haben Ihre Nachricht erhalten und melden uns so bald wie möglich bei Ihnen.',
                    'We have received your message and will get back to you as soon as possible.'
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="text-sm text-primary underline underline-offset-2"
                >
                  {t('Weitere Nachricht senden', 'Send another message')}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label={t('Kontaktformular', 'Contact form')}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                      Name <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={fields.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-rule rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-ring transition"
                      placeholder={t('Max Muster', 'Jane Doe')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                      E-Mail <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={fields.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-rule rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-ring transition"
                      placeholder={t('max@beispiel.ch', 'jane@example.ch')}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                      {t('Telefon', 'Phone')}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={fields.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-rule rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-ring transition"
                      placeholder="+41 …"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="liegenschaft" className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                      {t('Art der Liegenschaft', 'Property type')}
                    </label>
                    <select
                      id="liegenschaft"
                      name="liegenschaft"
                      value={fields.liegenschaft}
                      onChange={handleChange}
                      className="w-full bg-background border border-rule rounded-sm px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition appearance-none"
                    >
                      <option value="">{t('Bitte wählen', 'Please select')}</option>
                      <option value="mfh">{t('Mehrfamilienhaus', 'Apartment building')}</option>
                      <option value="efh">{t('Einfamilienhaus', 'Single-family home')}</option>
                      <option value="gwg">{t('Gewerbe', 'Commercial')}</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="sonstiges">{t('Sonstiges', 'Other')}</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nachricht" className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                    {t('Nachricht', 'Message')} <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    required
                    rows={5}
                    value={fields.nachricht}
                    onChange={handleChange}
                    className="w-full bg-background border border-rule rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    placeholder={t(
                      'Beschreiben Sie Ihr Anliegen kurz …',
                      'Briefly describe your request…'
                    )}
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-100 rounded-sm px-3 py-2.5">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <p>
                      {t(
                        'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns per E-Mail.',
                        'Message could not be sent. Please try again or email us directly.'
                      )}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:pointer-events-none inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting && <Loader2 size={16} className="animate-spin" />}
                  {isSubmitting
                    ? t('Wird gesendet…', 'Sending…')
                    : t('Jetzt Kontakt aufnehmen', 'Contact us now')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
