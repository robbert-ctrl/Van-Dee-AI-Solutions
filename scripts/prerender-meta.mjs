/**
 * Post-build Meta Tag Prerenderer
 *
 * Generates per-route HTML files with unique <title>, <meta>, <canonical>, <og:*> tags,
 * and injects route-specific JSON-LD structured data (FAQPage, BreadcrumbList, Article).
 *
 * Runs after `vite build` as a post-build step.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const SITE_URL = 'https://vandeeaisolutions.com';
const SITE_NAME = 'Van Dee AI Solutions';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/* ---------------- FAQ Data (mirrors FAQ.tsx) ---------------- */
const faqs = [
  { q: "Waarom zou ik met een nieuw bedrijf werken?", a: "Drie redenen: (1) Persoonlijke aandacht - ik werk met een beperkt aantal klanten tegelijk, geen wachtlijsten. (2) Early adopter samenwerking - transparante tarieven en directe toegang. (3) Modernste tech - nieuwste AI-modellen, geen legacy systemen. Plus: het gratis verkenningsgesprek geeft u zekerheid. 30 minuten, geen verplichtingen." },
  { q: "Heb je wel ervaring?", a: "Ja. Ik ben gespecialiseerd in moderne AI-implementaties - geen legacy code of verouderde methodes. Ik werk met dezelfde tools als grote consultancy firms (GPT, Claude, Gemini), maar met praktische, no-nonsense aanpak. Het gratis verkenningsgesprek bestaat om te bewijzen dat ik uw probleem begrijp en kan oplossen. Geen theoretisch verhaal, maar een concrete aanpak." },
  { q: "Wat als het niet werkt?", a: "U betaalt pas na het eerste werkende prototype. Ziet u geen waarde? Dan stopt het daar. Geen cure-no-pay, maar 'geen waarde-geen verdere betaling'. Het eerste verkenningsgesprek is sowieso gratis." },
  { q: "Hoe werken de early adopter voorwaarden?", a: "Als early adopter help je mij bewijzen dat deze aanpak werkt in de praktijk. In ruil: transparante samenwerking, directe toegang, en tarieven op maat. Geen standaard prijslijst - elk project is maatwerk. Tijdens de gratis analyse krijg je een eerlijke inschatting van tijd en kosten." },
  { q: "Is het gratis verkenningsgesprek een verkoopgesprek?", a: "Nee. Het verkenningsgesprek is bedoeld om te kwalificeren en te adviseren. Ik analyseer of uw bedrijf klaar is voor AI. Als ik geen toegevoegde waarde kan bieden, zeg ik dat eerlijk. Ik geloof in langetermijnrelaties, niet in snelle sales." },
  { q: "Hoe snel is de terugverdientijd (ROI)?", a: "Vaak binnen 1 tot 3 maanden. Omdat we beginnen met 'laaghangend fruit' (processen die veel tijd kosten maar eenvoudig te automatiseren zijn), is de impact direct merkbaar in de operationele kosten." },
  { q: "Is mijn data veilig?", a: "Absoluut. Veiligheid is mijn topprioriteit. Ik bouw systemen waarbij uw data nooit gebruikt wordt om publieke AI-modellen te trainen (tenzij expliciet gewenst). Voor zeer gevoelige informatie bieden we 'local deployment' opties, waarbij de AI volledig op uw eigen servers draait." },
  { q: "Werkt dit met mijn huidige software?", a: "Ja. Ik ben gespecialiseerd in het bouwen van 'bruggen' (API's). Of u nu Salesforce, HubSpot, of een ander systeem gebruikt (zoals AFAS, Exact, of zelfs verouderde systemen); ik kan er een AI-laag bovenop bouwen zonder dat u uw hele IT-infrastructuur hoeft te vervangen." },
  { q: "Wie is eigenaar van de code?", a: "U bent 100% eigenaar. Geen licentiekosten voor altijd, geen vendor lock-in. Na oplevering ontvangt u alle broncode, toegangsrechten en documentatie. Ik geloof in onafhankelijkheid." },
  { q: "Vervangt AI mijn personeel?", a: "Mijn doel is augmentatie, niet vervanging. AI neemt de 'saaie', repetitieve taken over (data invoer, sorteren, basisklantvragen), waardoor uw team zich kan richten op creativiteit, strategie en persoonlijk klantcontact. In de praktijk zien we dat medewerkers gelukkiger worden omdat hun werk zinvoller wordt." },
  { q: "Wat is de 'Werkend Prototype of Geld Terug' garantie?", a: "Simpel: U betaalt pas na het eerste werkende prototype. Niet tevreden? U krijgt 100% van uw betaling terug. Geen gedoe, geen vragen. Ik draag het risico, niet u. U gaat pas verder als u zeker weet dat het werkt." },
  { q: "Waarom krijg ik zoveel extra's gratis?", a: "Ik wil dat u succesvol bent, ook als we niet samenwerken. De Implementatie Accelerators (Prompt Library, Integratie Gids, etc.) zijn dingen die ik toch al heb gemaakt. Voor u kunnen ze weken werk besparen, voor mij kost het niks om te delen. Win-win." },
  { q: "Wat is de 'Resultaat Garantie'?", a: "Als uw automatisering niet de beloofde tijdsbesparing levert binnen 6 maanden, blijf ik gratis doorwerken tot het wel gebeurt. Geen extra kosten. U wint, of u wint. Simpel. Ik word pas succesvol als u succesvol bent." },
  { q: "Hoe bepalen we of de automatisering werkt?", a: "In de gratis analyse bepalen we samen concrete doelen: bijvoorbeeld '10 uur per week besparen op facturatie' of '50% minder handmatige data-invoer'. Die doelen worden schriftelijk vastgelegd. Na implementatie meten we of we die doelen halen. Simpel en transparant." },
];

function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
}

function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/* ---------------- Routes ---------------- */
const routes = [
  {
    path: '/',
    title: 'Van Dee AI Solutions - AI Automatisering voor Nederlandse Bedrijven',
    description: 'Uw team verspilt uren aan handmatig werk. Ontdek gratis in 30 minuten welke processen u morgen al kunt automatiseren. Voor MKB-bedrijven met 5-50 medewerkers.',
    keywords: 'AI automatisering, AI automatisering MKB, workflow automatisering, MKB automatisering, process automation, AI Tiel, AI Gelderland, AI bedrijfsprocessen, automatisering Nederlandse bedrijven',
  },
  {
    path: '/about',
    title: 'Over Ons — AI Automatisering Specialist Tiel | Van Dee AI Solutions',
    description: 'Maak kennis met Robbert van Dee, oprichter van Van Dee AI Solutions in Tiel. AI-automatisering specialist voor MKB-bedrijven. Persoonlijke aanpak, moderne technologie.',
    keywords: 'AI consultant Tiel, AI specialist Gelderland, workflow automatisering MKB, AI implementatie Nederland, Robbert van Dee',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Over Ons', url: `${SITE_URL}/about` },
    ],
  },
  {
    path: '/how-it-works',
    title: 'Hoe Werkt AI Automatisering? — Ons 3-Stappen Proces | Van Dee AI Solutions',
    description: 'Van gratis verkenningsgesprek tot werkende AI-automatisering in 3 stappen. Discovery, Development, Deployment. 100% eigendom van de code. Transparant en agile.',
    keywords: 'AI implementatie proces, workflow automatisering stappen, AI automatisering MKB, agile AI development, AI integratie bedrijf',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Hoe Het Werkt', url: `${SITE_URL}/how-it-works` },
    ],
  },
  {
    path: '/faq',
    title: 'Veelgestelde Vragen over AI Automatisering | Van Dee AI Solutions',
    description: 'Antwoorden op alle vragen over AI automatisering voor MKB: veiligheid, ROI, integratie, kosten en garanties. Transparante informatie van Van Dee AI Solutions.',
    keywords: 'AI automatisering vragen, ROI AI automatisering, data veiligheid AI, AI integratie MKB, kosten AI automatisering',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'FAQ', url: `${SITE_URL}/faq` },
    ],
    extraSchemas: [buildFaqSchema()],
  },
  {
    path: '/ai-scan',
    title: 'Gratis AI Readiness Scan — Test Uw Bedrijf | Van Dee AI Solutions',
    description: 'Ontdek in 2 minuten hoeveel uw MKB-bedrijf kan besparen met AI-automatisering. Gratis AI Readiness Scan met persoonlijk adviesrapport.',
    keywords: 'AI readiness scan, AI test bedrijf, AI automatisering MKB, besparen met AI, gratis AI analyse',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'AI Scan', url: `${SITE_URL}/ai-scan` },
    ],
  },
  {
    path: '/ai-automatisering-tiel',
    title: 'AI Automatisering Tiel — Lokale AI-Expert voor MKB | Van Dee AI Solutions',
    description: 'AI automatisering specialist in Tiel, Gelderland. Bespaar 10-20 uur per week met slimme AI-oplossingen. Gratis verkenningsgesprek voor MKB-bedrijven in de regio.',
    keywords: 'AI automatisering Tiel, AI Tiel, AI Gelderland, MKB automatisering Betuwe, AI specialist Rivierenland, workflow automatisering Tiel',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'AI Automatisering Tiel', url: `${SITE_URL}/ai-automatisering-tiel` },
    ],
  },
  {
    path: '/blog',
    title: 'Blog — AI Automatisering Inzichten voor MKB | Van Dee AI Solutions',
    description: 'Praktische artikelen over AI automatisering voor MKB-bedrijven. Leer over ROI, implementatie, veiligheid en kansen. Concrete voorbeelden uit de praktijk.',
    keywords: 'AI automatisering blog, AI artikelen MKB, AI tips, workflow automatisering tips, AI inzichten',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Blog', url: `${SITE_URL}/blog` },
    ],
  },
  {
    path: '/blog/5-processen-automatiseren-mkb',
    title: '5 Processen die elk MKB kan Automatiseren met AI | Van Dee AI Solutions',
    description: 'Ontdek 5 concrete bedrijfsprocessen die uw MKB vandaag al kan automatiseren met AI. Van factuurverwerking tot klantenservice. Inclusief ROI en implementatietijd.',
    keywords: 'AI automatisering voorbeelden, processen automatiseren MKB, factuurverwerking AI, email automatisering, rapportage automatisering',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: '5 Processen', url: `${SITE_URL}/blog/5-processen-automatiseren-mkb` },
    ],
  },
  {
    path: '/blog/wat-kost-ai-automatisering',
    title: 'Wat Kost AI Automatisering voor MKB? — Transparante Prijzen | Van Dee AI Solutions',
    description: 'Eerlijk overzicht van wat AI automatisering kost voor MKB-bedrijven. Van €3.000 tot €30.000 projecten. ROI, kostenposten en voorbeelden.',
    keywords: 'kosten AI automatisering, AI prijzen MKB, ROI AI, AI budget, wat kost AI',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: 'Wat Kost AI', url: `${SITE_URL}/blog/wat-kost-ai-automatisering` },
    ],
  },
  {
    path: '/blog/ai-vs-handmatig-werk',
    title: 'AI Automatisering vs. Handmatig Werk — Het Echte Verschil | Van Dee AI Solutions',
    description: 'Vergelijking van AI automatisering en handmatig werk: tijd, kosten, fouten en schaalbaarheid. Concrete cijfers voor MKB-bedrijven.',
    keywords: 'AI vs handmatig, automatisering voordelen, handmatig werk, AI efficiency, productiviteit AI',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: 'AI vs Handmatig', url: `${SITE_URL}/blog/ai-vs-handmatig-werk` },
    ],
  },
  {
    path: '/privacy',
    title: 'Privacybeleid | Van Dee AI Solutions',
    description: 'Lees hoe Van Dee AI Solutions uw gegevens beschermt. Transparant privacybeleid conform AVG.',
    keywords: '',
  },
  {
    path: '/terms',
    title: 'Algemene Voorwaarden | Van Dee AI Solutions',
    description: 'Algemene voorwaarden van Van Dee AI Solutions. Duidelijke afspraken over samenwerking, eigendom code, garanties en ondersteuning.',
    keywords: '',
  },
];

function generateRouteHtml(template, route) {
  let html = template;
  const fullUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${route.title}" />`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${route.description}" />`);

  if (route.keywords) {
    html = html.replace(/<meta name="keywords" content="[^"]*" \/>/, `<meta name="keywords" content="${route.keywords}" />`);
  }

  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
  html = html.replace(/<link rel="alternate" hreflang="nl" href="[^"]*" \/>/, `<link rel="alternate" hreflang="nl" href="${fullUrl}" />`);
  html = html.replace(/<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/, `<link rel="alternate" hreflang="x-default" href="${fullUrl}" />`);

  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`);

  html = html.replace(/<meta property="twitter:url" content="[^"]*" \/>/, `<meta property="twitter:url" content="${fullUrl}" />`);
  html = html.replace(/<meta property="twitter:title" content="[^"]*" \/>/, `<meta property="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta property="twitter:description" content="[^"]*" \/>/, `<meta property="twitter:description" content="${route.description}" />`);

  // Inject breadcrumbs and extra JSON-LD schemas before </head>
  const extraSchemas = [];
  if (route.breadcrumbs) {
    extraSchemas.push(buildBreadcrumbSchema(route.breadcrumbs));
  }
  if (route.extraSchemas) {
    extraSchemas.push(...route.extraSchemas);
  }

  if (extraSchemas.length > 0) {
    const schemaTags = extraSchemas
      .map(s => `    <script type="application/ld+json">\n${JSON.stringify(s, null, 6)}\n    </script>`)
      .join('\n');
    html = html.replace('</head>', `${schemaTags}\n  </head>`);
  }

  return html;
}

function prerender() {
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  let generated = 0;

  for (const route of routes) {
    const routeHtml = generateRouteHtml(template, route);

    if (route.path === '/') {
      fs.writeFileSync(templatePath, routeHtml, 'utf-8');
      console.log(`  ✓ / → dist/index.html`);
    } else {
      const routeSlug = route.path.replace(/^\//, '');
      const routeDir = path.join(distDir, routeSlug);

      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }

      fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf-8');
      console.log(`  ✓ ${route.path} → dist/${routeSlug}/index.html`);
    }

    generated++;
  }

  console.log(`\n  Pre-rendered ${generated} routes with unique meta tags + structured data.\n`);
}

console.log('\n📄 Pre-rendering meta tags for SEO...\n');
prerender();
