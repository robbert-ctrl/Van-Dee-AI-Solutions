import React from 'react';
import { Reveal } from './Reveal';
import { Shield } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <Reveal width="100%">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 mb-6 border border-brand-200">
              <Shield className="text-brand-600" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Privacy<span className="text-brand-600">verklaring</span>
            </h1>
            <p className="text-slate-500">
              Laatste update: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} width="100%">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Algemeen</h2>
              <p className="text-slate-500 leading-relaxed mb-2">
                Van Dee AI Solutions, gevestigd te Tiel, Nederland, is verantwoordelijk voor de verwerking van persoonsgegevens
                zoals weergegeven in deze privacyverklaring.
              </p>
              <p className="text-slate-500 leading-relaxed">
                <strong className="text-slate-800">KVK nummer:</strong> 85394041
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Van Dee AI Solutions verwerkt persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt.
              </p>
              <ul className="space-y-2 text-slate-500 ml-6">
                <li>• Voor- en achternaam</li>
                <li>• Bedrijfsnaam en functie</li>
                <li>• E-mailadres</li>
                <li>• Telefoonnummer</li>
                <li>• IP-adres en browsergegevens (via Cal.com en website analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Waarom hebben wij deze gegevens nodig?</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Van Dee AI Solutions verwerkt uw persoonsgegevens voor de volgende doelen:
              </p>
              <ul className="space-y-2 text-slate-500 ml-6">
                <li>• Het afhandelen van uw aanvraag voor een gratis verkenningsgesprek</li>
                <li>• U te kunnen bellen of e-mailen indien dit nodig is voor de uitvoering van onze dienstverlening</li>
                <li>• U te informeren over wijzigingen van onze diensten en producten</li>
                <li>• Het versturen van onze nieuwsbrief (indien u zich hiervoor heeft aangemeld)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Hoe lang bewaren wij gegevens?</h2>
              <p className="text-slate-500 leading-relaxed">
                Van Dee AI Solutions bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren
                waarvoor uw gegevens worden verzameld. Wij hanteren een bewaartermijn van maximaal 2 jaar voor contactgegevens
                van prospects, tenzij u langer klant bij ons bent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Delen met derden</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Van Dee AI Solutions verstrekt uw gegevens alleen aan derden als dit nodig is voor de uitvoering van onze diensten:
              </p>
              <ul className="space-y-2 text-slate-500 ml-6">
                <li>• <strong className="text-slate-800">Cal.com</strong> - Voor het afspraken systeem</li>
                <li>• <strong className="text-slate-800">E-mail service providers</strong> - Voor nieuwsbrief verzending (indien van toepassing)</li>
              </ul>
              <p className="text-slate-500 leading-relaxed mt-4">
                <strong className="text-slate-800">Belangrijke garantie:</strong> Uw bedrijfsdata wordt NOOIT gebruikt om publieke
                AI-modellen te trainen, tenzij u hier expliciet toestemming voor geeft.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Cookies</h2>
              <p className="text-slate-500 leading-relaxed">
                Van Dee AI Solutions gebruikt functionele en analytische cookies. Deze cookies hebben geen gevolgen voor uw privacy.
                Wij gebruiken geen tracking cookies voor advertentiedoeleinden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Uw rechten</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht
                om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van
                uw persoonsgegevens.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Neem contact op via LinkedIn of het contactformulier op deze website om gebruik te maken van deze rechten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Beveiliging</h2>
              <p className="text-slate-500 leading-relaxed">
                Van Dee AI Solutions neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik,
                verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Wijzigingen</h2>
              <p className="text-slate-500 leading-relaxed">
                Van Dee AI Solutions kan deze privacyverklaring aanpassen. Nieuwe versies worden altijd op de website gepubliceerd.
                Wij raden u aan om deze verklaring regelmatig te raadplegen.
              </p>
            </section>

          </div>
        </Reveal>
      </div>
    </section>
  );
};
