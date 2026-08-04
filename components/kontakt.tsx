'use client'

import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { EMAILJS, isEmailJsConfigured } from '@/lib/emailjs'
import { CONTACT, SITE_NAME } from '@/lib/site'
import { useInquiry } from './inquiry-context'
import { useLang } from './language-context'
import { Reveal } from './reveal'

type SubmitStatus = 'idle' | 'success' | 'error'

const PROPERTY_OPTIONS = [
  { value: 'mfh', de: 'Mehrfamilienhaus', en: 'Apartment building' },
  { value: 'efh', de: 'Einfamilienhaus', en: 'Single-family home' },
  { value: 'einzeln', de: 'Einzelne Wohnung', en: 'Single flat' },
  { value: 'gwg', de: 'Gewerbe', en: 'Commercial' },
  { value: 'portfolio', de: 'Portfolio', en: 'Portfolio' },
  { value: 'sonstiges', de: 'Sonstiges', en: 'Other' },
] as const

export function Kontakt() {
  const { t, lang } = useLang()
  const { propertyType, setPropertyType } = useInquiry()
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

  useEffect(() => {
    if (propertyType) {
      setFields((prev) => ({ ...prev, liegenschaft: propertyType }))
    }
  }, [propertyType])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (name === 'liegenschaft') {
      setPropertyType(value as typeof propertyType)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!isEmailJsConfigured()) {
        throw new Error('EmailJS is not configured yet')
      }

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
      setPropertyType('')
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
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-14 lg:gap-20">
          <Reveal>
            <p className="section-eyebrow mb-4">
              {t('Kontakt', 'Contact')}
            </p>
            <h2
              id="kontakt-heading"
              className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground leading-[1.15] text-balance mb-5"
            >
              {t(
                'Sprechen Sie mit uns — persönlich.',
                'Talk to us — personally.'
              )}
            </h2>
            <p className="text-base leading-relaxed text-ink-muted text-pretty mb-10 max-w-prose">
              {t(
                'Ob einzelne Liegenschaft oder Portfolio: Schildern Sie kurz Ihre Situation. Wir melden uns persönlich und entwickeln eine passende Verwaltungslösung.',
                'Whether a single property or a portfolio: briefly describe your situation. We reply personally and develop a suitable management solution.'
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
                      'Antwort persönlich — kein Ticket-Pingpong',
                      'Personal reply — no ticket ping-pong'
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
                    {t('Einsatzgebiet', 'Service area')}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {t(CONTACT.areaServedDe, CONTACT.areaServedEn)}
                  </p>
                  <p className="text-xs text-ink-muted mt-1">
                    {t(
                      'Persönliche Beratung für Eigentümer in der Schweiz.',
                      'Personal advice for property owners in Switzerland.'
                    )}
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="bg-surface rounded-sm p-8 md:p-10 border border-rule/60">
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                  <CheckCircle2 size={40} strokeWidth={1.2} className="text-primary" />
                  <h3 className="font-sans font-semibold text-2xl text-foreground tracking-tight">
                    {t('Vielen Dank für Ihre Anfrage.', 'Thank you for your enquiry.')}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted max-w-sm text-pretty">
                    {t(
                      'Wir haben Ihre Nachricht erhalten und melden uns so bald wie möglich persönlich bei Ihnen.',
                      'We have received your message and will get back to you personally as soon as possible.'
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
                        {PROPERTY_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {lang === 'de' ? opt.de : opt.en}
                          </option>
                        ))}
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
                        'z. B. Standort, Anzahl Wohnungen, was Sie heute belastet …',
                        'e.g. location, number of units, what is burdensome today…'
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
                      : t('Unverbindlich anfragen', 'Send free enquiry')}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
