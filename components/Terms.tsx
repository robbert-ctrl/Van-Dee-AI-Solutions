import React from 'react';
import { Reveal } from './Reveal';
import { FileText } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <Reveal width="100%">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 mb-6 border border-violet-200">
              <FileText className="text-violet-600" size={24} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Algemene <span className="text-violet-600">Voorwaarden</span>
            </h1>
            <p className="text-slate-500">
              Laatste update: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} width="100%">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Definities</h2>
              <ul className="space-y-2 text-slate-500 ml-6">
                <li>• <strong className="text-slate-800">Van Dee AI Solutions:</strong> Robbert van Dee, handelend onder de naam Van Dee AI Solutions, gevestigd te Tiel, Nederland. KVK nummer: 85394041.</li>
                <li>• <strong className="text-slate-800">Klant:</strong> De partij waarmee Van Dee AI Solutions een overeenkomst aangaat.</li>
                <li>• <strong className="text-slate-800">Diensten:</strong> Alle werkzaamheden en/of diensten die Van Dee AI Solutions uitvoert voor de Klant.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Toepasselijkheid</h2>
              <p className="text-slate-500 leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen
                Van Dee AI Solutions en de Klant. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Gratis Verkenningsgesprek</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Het gratis verkenningsgesprek bestaat uit:
              </p>
              <ul className="space-y-2 text-slate-500 ml-6">
                <li>• Een 30-minuten strategie gesprek (online)</li>
                <li>• Een geschreven analyse rapport</li>
                <li>• Een strategisch implementatieplan</li>
                <li>• ROI berekening per automatiseringskans</li>
              </ul>
              <p className="text-slate-500 leading-relaxed mt-4">
                Deze analyse verplicht de Klant tot niets. Van Dee AI Solutions behoudt zich het recht voor om een
                aanvraag te weigeren indien deze niet past binnen onze expertise of capaciteit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Offerte en Overeenkomst</h2>
              <p className="text-slate-500 leading-relaxed">
                Alle offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Een overeenkomst komt tot stand
                na schriftelijke bevestiging door beide partijen. Prijzen zijn exclusief BTW, tenzij anders vermeld.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Uitvoering Diensten</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Van Dee AI Solutions zal de diensten naar beste inzicht en vermogen uitvoeren. Alle diensten worden
                uitgevoerd op basis van een inspanningsverplichting, tenzij expliciet anders overeengekomen.
              </p>
              <p className="text-slate-500 leading-relaxed">
                <strong className="text-slate-800">Werkend Prototype Garantie:</strong> Bij custom ontwikkeling betaalt de
                Klant pas na oplevering van een werkend prototype. Indien de Klant niet tevreden is met het prototype,
                wordt 100% van de betaling teruggestort.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Intellectueel Eigendom</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                <strong className="text-slate-800">Code Eigendom:</strong> Na volledige betaling draagt Van Dee AI Solutions
                alle intellectuele eigendomsrechten van de ontwikkelde code over aan de Klant. Dit omvat:
              </p>
              <ul className="space-y-2 text-slate-500 ml-6">
                <li>• Volledige broncode</li>
                <li>• Technische documentatie</li>
                <li>• API toegangsrechten</li>
                <li>• Configuratie bestanden</li>
              </ul>
              <p className="text-slate-500 leading-relaxed mt-4">
                <strong className="text-slate-800">Uitzondering:</strong> Generieke herbruikbare componenten en tools die
                niet specifiek voor de Klant zijn ontwikkeld, blijven eigendom van Van Dee AI Solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Betaling</h2>
              <p className="text-slate-500 leading-relaxed">
                Betalingstermijn is 14 dagen na factuurdatum, tenzij anders overeengekomen. Bij overschrijding van de
                betalingstermijn is de Klant in verzuim en is Van Dee AI Solutions gerechtigd wettelijke rente in rekening
                te brengen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Geheimhouding</h2>
              <p className="text-slate-500 leading-relaxed">
                Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die in het kader van
                de overeenkomst wordt uitgewisseld. Deze verplichting blijft ook na beëindiging van de overeenkomst van kracht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Aansprakelijkheid</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Van Dee AI Solutions is alleen aansprakelijk voor directe schade die het gevolg is van opzet of grove schuld.
                De aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht, met een maximum van €10.000.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Van Dee AI Solutions is niet aansprakelijk voor indirecte schade, zoals gevolgschade, gederfde winst,
                gemiste besparingen of schade door bedrijfsstagnatie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Resultaat Garantie</h2>
              <p className="text-slate-500 leading-relaxed">
                Indien de geïmplementeerde automatisering niet de overeengekomen tijdsbesparing oplevert binnen 6 maanden
                na oplevering, zal Van Dee AI Solutions kosteloos doorwerken totdat het doel wordt behaald. Deze garantie
                geldt alleen voor de doelen die schriftelijk zijn vastgelegd in het project plan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Beëindiging</h2>
              <p className="text-slate-500 leading-relaxed">
                Beide partijen kunnen een overeenkomst voor onbepaalde tijd schriftelijk opzeggen met een opzegtermijn
                van 1 maand. Lopende projecten worden afgemaakt conform de oorspronkelijke planning, tenzij anders overeengekomen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Toepasselijk Recht</h2>
              <p className="text-slate-500 leading-relaxed">
                Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden bij voorkeur in onderling
                overleg opgelost. Indien dit niet mogelijk is, zijn de geschillen onderworpen aan de bevoegde rechter
                in het arrondissement waar Van Dee AI Solutions is gevestigd.
              </p>
            </section>

          </div>
        </Reveal>
      </div>
    </section>
  );
};
