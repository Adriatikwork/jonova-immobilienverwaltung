'use client'

import { LegalChrome } from '@/components/legal-chrome'
import { useLang } from '@/components/language-context'
import { CONTACT, SITE_NAME } from '@/lib/site'

function DatenschutzBody() {
  const { t } = useLang()

  return (
    <article>
      <p className="section-eyebrow mb-3">Legal</p>
      <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight text-foreground mb-3">
        {t('Datenschutzerklärung', 'Privacy policy')}
      </h1>
      <p className="text-sm text-ink-muted mb-10">
        {t('Stand: August 2026', 'Last updated: August 2026')}
      </p>

      <section className="mb-10" aria-labelledby="verantwortliche">
        <h2 id="verantwortliche" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('1. Verantwortliche Stelle', '1. Controller')}
        </h2>
        <div className="text-sm leading-relaxed text-ink-muted space-y-2 text-pretty">
          <p>
            {t(
              'Verantwortlich für die Bearbeitung personenbezogener Daten auf dieser Website ist:',
              'The controller for personal data processing on this website is:'
            )}
          </p>
          <p className="text-foreground font-medium">{SITE_NAME}</p>
          <p>
            E-Mail:{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-foreground hover:text-primary">
              {CONTACT.email}
            </a>
          </p>
          <p>
            {t(
              'Es gilt das Schweizer Datenschutzrecht (nDSG). Soweit anwendbar, berücksichtigen wir auch die Grundsätze der DSGVO.',
              'Swiss data protection law (nDSG) applies. Where relevant, we also observe GDPR principles.'
            )}
          </p>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="umfang">
        <h2 id="umfang" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('2. Welche Daten wir bearbeiten', '2. What data we process')}
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink-muted text-pretty">
          <p>
            {t(
              'Beim Besuch der Website fallen technisch notwendige Verbindungsdaten an (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser-Typ). Diese werden durch den Hosting-Anbieter zur Auslieferung und Absicherung der Website verarbeitet.',
              'When you visit the website, technically necessary connection data is processed (e.g. IP address, time, page requested, browser type) by the hosting provider to deliver and secure the site.'
            )}
          </p>
          <p>
            {t(
              'Wenn Sie das Kontaktformular nutzen, bearbeiten wir die Angaben, die Sie freiwillig übermitteln: Name, E-Mail-Adresse, optional Telefonnummer, Art der Liegenschaft und Nachricht. Zweck: Bearbeitung Ihrer Anfrage und Kontaktaufnahme.',
              'If you use the contact form, we process the details you voluntarily submit: name, email address, optional phone number, property type and message. Purpose: handling your enquiry and contacting you.'
            )}
          </p>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="grundlage">
        <h2 id="grundlage" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('3. Rechtsgrundlage und Zweck', '3. Legal basis and purpose')}
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted text-pretty">
          {t(
            'Die Bearbeitung erfolgt zur Beantwortung Ihrer Anfragen, zur Anbahnung eines möglichen Vertragsverhältnisses und zur technischen Bereitstellung der Website. Ohne diese Daten können wir Ihre Anfrage nicht bearbeiten bzw. die Website nicht zuverlässig betreiben.',
            'Processing is carried out to answer your enquiries, to prepare a possible contractual relationship and to provide the website technically. Without this data we cannot handle your enquiry or run the site reliably.'
          )}
        </p>
      </section>

      <section className="mb-10" aria-labelledby="weitergabe">
        <h2 id="weitergabe" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('4. Weitergabe und Dienstleister', '4. Sharing and processors')}
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink-muted text-pretty">
          <p>
            {t(
              'Die Website wird über GitHub Pages bereitgestellt. Für den Versand von Kontaktformular-Nachrichten nutzen wir EmailJS (EmailJS Inc.). Dabei können Daten an Server ausserhalb der Schweiz (u. a. USA/EU) übermittelt werden. Wir wählen Dienstleister, die angemessene Schutzmassnahmen treffen.',
              'The website is hosted via GitHub Pages. Contact form messages are sent via EmailJS (EmailJS Inc.). Data may be transferred to servers outside Switzerland (including the USA/EU). We use processors that apply appropriate safeguards.'
            )}
          </p>
          <p>
            {t(
              'Eine Weitergabe an Dritte zu Werbezwecken findet nicht statt.',
              'We do not share data with third parties for advertising purposes.'
            )}
          </p>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="speicher">
        <h2 id="speicher" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('5. Speicherdauer', '5. Retention')}
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted text-pretty">
          {t(
            'Anfragedaten speichern wir so lange, wie es für die Bearbeitung Ihrer Anfrage und allfällige Nachfragen nötig ist, bzw. solange gesetzliche Aufbewahrungspflichten bestehen. Server-Logs beim Hosting werden in der Regel nur kurzfristig aufbewahrt.',
            'We keep enquiry data as long as needed to handle your request and any follow-up, or as required by statutory retention duties. Hosting server logs are typically retained only briefly.'
          )}
        </p>
      </section>

      <section className="mb-10" aria-labelledby="cookies">
        <h2 id="cookies" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('6. Cookies und Tracking', '6. Cookies and tracking')}
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted text-pretty">
          {t(
            'Diese Website setzt keine Marketing- oder Analyse-Cookies ein. Die Sprachauswahl wird lokal in Ihrem Browser gehalten und nicht an uns übermittelt. Technisch notwendige Funktionen des Hostings können temporäre Verbindungsdaten erzeugen.',
            'This website does not use marketing or analytics cookies. Language preference is kept locally in your browser and is not sent to us. Technically necessary hosting functions may generate temporary connection data.'
          )}
        </p>
      </section>

      <section className="mb-10" aria-labelledby="rechte">
        <h2 id="rechte" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('7. Ihre Rechte', '7. Your rights')}
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted text-pretty">
          {t(
            'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung Ihrer Personendaten sowie das Recht, eine Bearbeitung zu widersprechen, soweit das Gesetz dies vorsieht. Wenden Sie sich dazu an ',
            'You have the right to access, rectification, erasure and restriction of processing of your personal data, and to object to processing where the law provides. Contact us at '
          )}
          <a href={`mailto:${CONTACT.email}`} className="text-foreground hover:text-primary">
            {CONTACT.email}
          </a>
          {t(
            '. Sie können sich zudem beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) beschweren.',
            '. You may also lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC).'
          )}
        </p>
      </section>

      <section aria-labelledby="aenderungen">
        <h2 id="aenderungen" className="font-sans font-semibold text-xl text-foreground mb-4 tracking-tight">
          {t('8. Änderungen', '8. Changes')}
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted text-pretty">
          {t(
            'Wir können diese Datenschutzerklärung anpassen, wenn sich unsere Prozesse oder die Rechtslage ändern. Die aktuelle Fassung ist jeweils auf dieser Seite veröffentlicht.',
            'We may update this privacy policy if our processes or the law change. The current version is always published on this page.'
          )}
        </p>
      </section>
    </article>
  )
}

export default function DatenschutzPage() {
  return (
    <LegalChrome current="datenschutz">
      <DatenschutzBody />
    </LegalChrome>
  )
}
