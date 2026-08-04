'use client'

import { LegalChrome } from '@/components/legal-chrome'
import { useLang } from '@/components/language-context'
import { CONTACT, LEGAL, SITE_NAME } from '@/lib/site'

function Field({ label, value }: { label: string; value: string }) {
  if (!value) return null
  return (
    <p className="text-sm text-ink-muted">
      <span className="text-foreground font-medium">{label}</span> {value}
    </p>
  )
}

function ImpressumBody() {
  const { t } = useLang()
  const hasAddress = Boolean(LEGAL.street || LEGAL.postalCode || LEGAL.city)
  const hasPerson = Boolean(LEGAL.responsibleName)

  return (
    <article>
      <p className="section-eyebrow mb-3">Legal</p>
      <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight text-foreground mb-8">
        Impressum
      </h1>

      <section className="mb-10" aria-labelledby="kontakt-legal">
        <h2 id="kontakt-legal" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('Kontaktdaten', 'Contact details')}
        </h2>
        <div className="bg-surface border border-rule/70 rounded-sm p-6 space-y-2">
          <p className="font-semibold text-foreground">{SITE_NAME}</p>
          {LEGAL.legalForm ? (
            <p className="text-sm text-ink-muted">{LEGAL.legalForm}</p>
          ) : null}
          <Field
            label={t('Verantwortlich:', 'Responsible:')}
            value={LEGAL.responsibleName}
          />
          {hasAddress ? (
            <>
              {LEGAL.street ? <p className="text-sm text-ink-muted">{LEGAL.street}</p> : null}
              <p className="text-sm text-ink-muted">
                {[LEGAL.postalCode, LEGAL.city].filter(Boolean).join(' ')}
              </p>
            </>
          ) : (
            <p className="text-sm text-ink-muted">
              {t(CONTACT.areaServedDe, CONTACT.areaServedEn)}
            </p>
          )}
          {CONTACT.phoneDisplay ? (
            <p className="text-sm text-ink-muted">
              {t('Telefon:', 'Phone:')}{' '}
              <a href={`tel:${CONTACT.phoneE164}`} className="text-foreground hover:text-primary">
                {CONTACT.phoneDisplay}
              </a>
            </p>
          ) : null}
          <p className="text-sm text-ink-muted">
            E-Mail:{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-foreground hover:text-primary">
              {CONTACT.email}
            </a>
          </p>
          {LEGAL.uid ? (
            <p className="text-sm text-ink-muted">
              {t('UID / MwSt:', 'UID / VAT:')} {LEGAL.uid}
            </p>
          ) : null}
          {!hasPerson || !hasAddress ? (
            <p className="text-xs text-ink-muted pt-3 border-t border-rule/60 mt-3 leading-relaxed">
              {t(
                'Weitere Angaben (verantwortliche Person, Domiziladresse) werden ergänzt, sobald die Unternehmensregistrierung finalisiert ist. Bis dahin erreichen Sie uns unter der genannten E-Mail-Adresse.',
                'Further details (responsible person, registered address) will be added once company registration is finalised. Until then, reach us at the email above.'
              )}
            </p>
          ) : null}
        </div>
      </section>

      <section className="mb-10" aria-labelledby="haftung">
        <h2 id="haftung" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('Haftungsausschluss', 'Disclaimer')}
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink-muted text-pretty">
          <p>
            {t(
              'Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.',
              'The author assumes no liability regarding the correctness, accuracy, currency, reliability or completeness of the information provided.'
            )}
          </p>
          <p>
            {t(
              'Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.',
              'Liability claims against the author for material or immaterial damage arising from access to, use or non-use of the published information, from misuse of the connection or from technical faults are excluded.'
            )}
          </p>
          <p>
            {t(
              'Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.',
              'All offers are non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offering without prior notice, or to discontinue publication temporarily or permanently.'
            )}
          </p>
        </div>
      </section>

      <section aria-labelledby="links">
        <h2 id="links" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('Haftungsausschluss für Links', 'Disclaimer for links')}
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted text-pretty">
          {t(
            'Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.',
            'References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is declined. Access to and use of such websites is at the user’s own risk.'
          )}
        </p>
      </section>
    </article>
  )
}

export default function ImpressumPage() {
  return (
    <LegalChrome current="impressum">
      <ImpressumBody />
    </LegalChrome>
  )
}
