import React from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../../components/PageMeta';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export const PostWatKostAIPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Wat Kost AI Automatisering voor MKB? — Transparante Prijzen"
        description="Eerlijk overzicht van wat AI automatisering kost voor MKB-bedrijven. Van €3.000 tot €30.000 projecten. ROI, kostenposten en voorbeelden."
        path="/blog/wat-kost-ai-automatisering"
        keywords="kosten AI automatisering, AI prijzen MKB, ROI AI, AI budget, wat kost AI"
      />
      <BlogPostLayout
        title="Wat Kost AI Automatisering voor MKB? — Een Eerlijk Overzicht"
        date="3 april 2026"
        readTime="6 min"
        category="Kosten & ROI"
        slug="wat-kost-ai-automatisering"
      >
        <p>
          De vraag die ik het meest krijg: "Wat kost dit nou eigenlijk?" Het eerlijke antwoord: het
          hangt af van de scope. Maar omdat veel MKB-bedrijven geen referentiepunt hebben, geef ik in dit
          artikel een eerlijk en transparant overzicht van wat AI automatisering realistisch kost —
          inclusief voorbeelden uit de praktijk.
        </p>

        <h2>De drie projecttypes</h2>
        <p>
          AI automatiseringsprojecten vallen ruwweg in drie categorieën, gebaseerd op complexiteit en scope:
        </p>

        <h3>1. Klein: €3.000 – €8.000</h3>
        <p>
          Eén geïsoleerd proces automatiseren met bestaande tools (Make.com, Zapier + OpenAI API).
          Geen maatwerk code, alleen configuratie en integratie.
        </p>
        <ul>
          <li>Voorbeelden: email classificatie, simpele data-entry automation, basic chatbot</li>
          <li>Implementatietijd: 2-4 weken</li>
          <li>ROI: typisch binnen 2-3 maanden</li>
        </ul>

        <h3>2. Middel: €8.000 – €18.000</h3>
        <p>
          Meerdere processen of één complex proces met custom logica. Combinatie van no-code tools en
          Python/TypeScript maatwerk voor de kritieke delen.
        </p>
        <ul>
          <li>Voorbeelden: factuurverwerking + boekhoudkoppeling, AI-gedreven CRM updates, geavanceerde chatbot</li>
          <li>Implementatietijd: 4-8 weken</li>
          <li>ROI: typisch binnen 4-6 maanden</li>
        </ul>

        <h3>3. Groot: €18.000 – €30.000+</h3>
        <p>
          Volledige workflow of afdeling automatiseren. Custom development, meerdere integraties,
          mogelijk on-premise deployment voor gevoelige data.
        </p>
        <ul>
          <li>Voorbeelden: complete klantenservice afdeling, end-to-end order-to-cash proces</li>
          <li>Implementatietijd: 8-16 weken</li>
          <li>ROI: typisch binnen 6-12 maanden</li>
        </ul>

        <h2>Wat bepaalt de prijs?</h2>
        <p>
          Vijf factoren bepalen waar uw project in het spectrum valt:
        </p>
        <ol>
          <li>
            <strong>Aantal integraties:</strong> Koppelen met Exact is goedkoper dan een verouderd AS/400
            systeem uit 1998.
          </li>
          <li>
            <strong>Custom logica:</strong> Hoe meer uitzonderingen en bedrijfsregels, hoe meer tijd er in
            de implementatie zit.
          </li>
          <li>
            <strong>Data kwaliteit:</strong> Schone data = snelle implementatie. Rommel in = rommel uit +
            extra opschoonwerk.
          </li>
          <li>
            <strong>Privacy eisen:</strong> Publieke APIs (OpenAI) zijn goedkoop. Local deployment voor
            gevoelige data (bijv. medische informatie) kost meer.
          </li>
          <li>
            <strong>Schaal:</strong> 100 transacties per dag is iets anders dan 100.000.
          </li>
        </ol>

        <h2>Typische ROI berekening</h2>
        <p>
          Laten we een concreet rekenvoorbeeld maken voor een MKB-bedrijf met 15 medewerkers:
        </p>

        <blockquote>
          <strong>Scenario:</strong> Administratie medewerker besteedt 15 uur/week aan factuurverwerking.<br/>
          <strong>Kosten:</strong> 15 uur × €35/uur = €525/week = €27.300/jaar<br/>
          <strong>Automatisering:</strong> €12.000 eenmalig + €100/maand operationele kosten<br/>
          <strong>Besparing:</strong> 90% tijdsbesparing = €24.570/jaar bespaard<br/>
          <strong>Terugverdientijd:</strong> 5-6 maanden
        </blockquote>

        <h2>Wat zijn operationele kosten?</h2>
        <p>
          Naast de eenmalige implementatie zijn er doorlopende kosten:
        </p>
        <ul>
          <li><strong>API kosten (OpenAI, Claude, etc.):</strong> €20–€500/maand afhankelijk van volume</li>
          <li><strong>Automation platform (Make.com/Zapier):</strong> €10–€100/maand</li>
          <li><strong>Hosting (indien custom):</strong> €20–€200/maand</li>
          <li><strong>Onderhoud:</strong> Meestal niet nodig na oplevering — u bent eigenaar van de code</li>
        </ul>

        <h2>Hoe werkt de prijsstelling bij Van Dee AI Solutions?</h2>
        <p>
          Ik werk met <strong>fixed-price projecten</strong>: u weet vooraf exact wat u betaalt. Tijdens
          het gratis verkenningsgesprek krijgt u een eerlijke inschatting. Bij akkoord: u betaalt pas na
          het eerste werkende prototype. Niet tevreden? Geld terug.
        </p>
        <p>
          Geen uurtje-factuurtje, geen verrassingen, geen verborgen kosten.{' '}
          <Link to="/faq">Lees meer over onze garanties</Link>.
        </p>

        <h2>Volgende stap</h2>
        <p>
          Wilt u weten wat uw specifieke project zou kosten? Doe eerst de{' '}
          <Link to="/ai-scan">gratis AI Readiness Scan</Link> voor een eerste inschatting, of plan direct
          een{' '}
          <a href="https://cal.com/vandeeaisolutions/discoverycall" target="_blank" rel="noopener noreferrer">
            gratis verkenningsgesprek
          </a>{' '}
          voor een persoonlijke kostenraming.
        </p>
      </BlogPostLayout>
    </>
  );
};
