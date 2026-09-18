// ---- Mobile menu ----
const navWrap = document.querySelector('.nav-wrap');
const menuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks && navWrap) {
  menuButton.addEventListener('click', () => {
    const isOpen = navWrap.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    navLinks.classList.toggle('mobile-open', isOpen);
  });
}

// ---- Translations ----
const translations = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.quote': 'Get a Quote',
    'nav.menu': 'Menu',
    'a11y.brandHome': 'Winblad Design home',
    'a11y.toggleMenu': 'Toggle menu',
    'a11y.langToggle': 'Switch language',
    'a11y.themeToggle': 'Toggle dark mode',
    'shared.contact': 'Contact',
    'shared.call': 'Call',
    'shared.email': 'Email',
    'shared.serviceArea': 'Service area',
    'shared.serviceAreaValue': 'Stockholm & surrounding communities',
    'shared.requestQuote': 'Request a quote',

    'meta.title.home': 'Winblad Design',
    'meta.desc.home': 'Custom carpentry, trim work, decks, and home renovations by Winblad Design.',
    'meta.title.projects': 'Projects | Winblad Design',
    'meta.desc.projects': 'Explore recent carpentry projects from Winblad Design, including trim work, decks, custom cabinetry, and remodel support.',
    'meta.title.quote': 'Request a Quote | Winblad Design',
    'meta.desc.quote': 'Send a project request to Winblad Design through the quote form and email contact details.',

    'home.hero.eyebrow': 'Custom carpentry & finish work',
    'home.hero.h1': 'Built with care. Finished to last.',
    'home.hero.lead': 'Winblad Design creates beautiful, functional spaces for homeowners, contractors, and property managers. From custom trim to full remodel support, we bring craftsmanship, reliability, and clean finishing to every job.',
    'home.hero.ctaPrimary': 'Book a consultation',
    'home.hero.ctaSecondary': 'View our projects',
    'home.hero.meta1': 'Years experience',
    'home.hero.meta2': 'Projects completed',
    'home.hero.meta3': 'Custom craftsmanship',
    'home.hero.imgAlt': 'Beautiful hardwood interior trim and custom carpentry work',
    'home.hero.badgeStrong': 'Interior upgrades',
    'home.hero.badgeSpan': 'Custom woodwork • trim • stairs',

    'home.about.eyebrow': 'Why choose us',
    'home.about.h2': 'Craftsmanship that feels personal.',
    'home.about.lead': 'We specialize in quality woodwork for homes and commercial spaces, balancing detail-heavy craftsmanship with dependable, on-time project management.',
    'home.about.f1h': 'Built for daily life',
    'home.about.f1p': 'Every project is planned around function, durability, and the way a space is actually used — from family kitchens to high-traffic entryways.',
    'home.about.f2h': 'Careful attention to detail',
    'home.about.f2p': 'We treat trim, finish carpentry, and structural upgrades as a craft — every line, corner, and reveal matters.',
    'home.about.f3h': 'Honest communication',
    'home.about.f3p': 'Clear timelines, transparent pricing, and practical recommendations keep the job moving smoothly from start to finish.',
    'home.about.f4h': 'Clean, respectful service',
    'home.about.f4p': 'We respect your space, your schedule, and your property, keeping work areas tidy and organized throughout the process.',

    'home.services.eyebrow': 'Our services',
    'home.services.h2': 'From custom details to full room transformations.',
    'home.services.s1h': 'Custom Trim & Millwork',
    'home.services.s1p': 'Baseboards, crown molding, window casings, built-ins, and tailored finishing details.',
    'home.services.s2h': 'Decks & Outdoor Builds',
    'home.services.s2p': 'New decking, pergolas, railings, and exterior upgrades made to handle daily use.',
    'home.services.s3h': 'Renovation Support',
    'home.services.s3p': 'Cabinet install, framing assistance, flooring prep, shelving, and finish carpentry.',

    'home.featured.eyebrow': 'Featured work',
    'home.featured.h2': 'Some of our best projects.',
    'home.featured.seeAll': 'See all work',
    'home.featured.p1Alt': 'Modern kitchen remodel with custom cabinetry',
    'home.featured.p1Tag': 'Kitchen',
    'home.featured.p1H': 'Custom kitchen cabinetry',
    'home.featured.p1P': 'Warm wood finishes, built-in storage, and a crisp layout designed for everyday living.',
    'home.featured.p2Alt': 'Wood trim and custom interior finish detail',
    'home.featured.p2Tag': 'Interior',
    'home.featured.p2H': 'Modern trim package',
    'home.featured.p2P': 'Clean lines and refined detailing for a full home refresh with lasting visual impact.',

    'home.cta.h2': 'Ready to start your next project?',
    'home.cta.p': "Tell us about your ideas and we'll help plan the right carpentry solution.",

    'footer.h2': "Let's build something lasting.",
    'footer.lead': "Whether you need a small trim update or an extensive custom build, we're ready to help.",
    'footer.quickEyebrow': 'Quick details',
    'footer.quickH3': 'What to expect',
    'footer.quickLead': 'Consultation, detailed estimate, material planning, expert craftsmanship, and a tidy finish.',
    'footer.check1H': 'Residential & light commercial',
    'footer.check1P': 'Custom woodwork and install services',
    'footer.check2H': 'Flexible scheduling',
    'footer.check2P': 'Weekend and after-hours options available',
    'footer.tagline': 'Craftsmanship for homes, additions, and custom spaces.',

    'projects.eyebrow': 'Project gallery',
    'projects.h1': 'Recent work and custom builds.',
    'projects.lead': "A closer look at the projects we've completed across kitchens, living spaces, outdoor builds, and detail-focused renovations.",
    'projects.p1Alt': 'Custom hardwood kitchen cabinetry',
    'projects.p1Tag': 'Kitchen remodel',
    'projects.p1H': 'Family kitchen renovation',
    'projects.p1P': 'Rebuilt a dated kitchen into a warm, functional gathering space with custom cabinetry, open shelving, and refinished trim details.',
    'projects.p2Alt': 'Custom interior trim and wall panels',
    'projects.p2Tag': 'Interior finish',
    'projects.p2H': 'Whole-home trim package',
    'projects.p2P': 'Installed wall paneling, crown molding, and built-ins to give the home a cleaner, more elevated interior finish throughout.',
    'projects.p3Alt': 'Deck construction with wood railing',
    'projects.p3Tag': 'Outdoor living',
    'projects.p3H': 'Backyard deck & railing',
    'projects.p3P': 'Designed and built a durable deck and railing system to expand outdoor seating while boosting curb appeal and long-term value.',
    'projects.p4Alt': 'Wood staircase and custom banister',
    'projects.p4Tag': 'Staircase',
    'projects.p4H': 'Custom staircase upgrade',
    'projects.p4P': 'Reworked a dated staircase with new treads, a custom banister, and a more polished look that paired with the surrounding architecture.',
    'projects.p5Alt': 'Wood shelving and storage installation',
    'projects.p5Tag': 'Built-ins',
    'projects.p5H': 'Storage and shelving install',
    'projects.p5P': 'Built custom shelving and organization features that maximize space while maintaining a clean, custom-finish aesthetic.',
    'projects.p6Alt': 'Entryway carpentry and bench seating',
    'projects.p6Tag': 'Entryway',
    'projects.p6H': 'Entry bench & mudroom detail',
    'projects.p6P': 'Installed built-in seating, storage cubbies, and custom trim to create a high-function mudroom with a tailored, custom finish.',
    'projects.cta.h2': 'Want a project like this?',
    'projects.cta.p': "Start with a quick conversation and we'll help you plan the right build.",
    'projects.footerTagline': 'Built for lasting craftsmanship.',

    'quote.h1': 'Request a quote',
    'quote.lead': "Tell us a little about your project and we'll be in touch with next steps.",
    'quote.form.name': 'Name',
    'quote.form.namePh': 'Your name',
    'quote.form.email': 'Email',
    'quote.form.phone': 'Phone',
    'quote.form.phonePh': 'Your phone number',
    'quote.form.projectType': 'Project type',
    'quote.form.projectTypePh': 'Kitchen, deck, trim, etc.',
    'quote.form.message': 'Your request',
    'quote.form.messagePh': "Tell us about your project, timeline, and what you'd like help with...",
    'quote.form.submit': 'Send request',
    'quote.footerTagline': 'Request details & project inquiries',

    'meta.title.notFound': 'Page Not Found | Winblad Design',
    'meta.desc.notFound': "The page you're looking for doesn't exist on Winblad Design's website.",
    'notFound.eyebrow': '404 error',
    'notFound.h1': 'This page took a wrong turn.',
    'notFound.lead': "The page you're looking for doesn't exist, may have been moved, or the link might be outdated. Let's get you back on track.",
    'notFound.homeButton': 'Back to homepage',
  },
  sv: {
    'nav.about': 'Om oss',
    'nav.services': 'Tjänster',
    'nav.projects': 'Projekt',
    'nav.quote': 'Begär offert',
    'nav.menu': 'Meny',
    'a11y.brandHome': 'Winblad Design startsida',
    'a11y.toggleMenu': 'Växla meny',
    'a11y.langToggle': 'Byt språk',
    'a11y.themeToggle': 'Växla mörkt läge',
    'shared.contact': 'Kontakt',
    'shared.call': 'Ring',
    'shared.email': 'E-post',
    'shared.serviceArea': 'Serviceområde',
    'shared.serviceAreaValue': 'Stockholm och kringliggande områden',
    'shared.requestQuote': 'Begär en offert',

    'meta.title.home': 'Winblad Design',
    'meta.desc.home': 'Skräddarsytt snickeri, listverk, altaner och renoveringar av Winblad Design.',
    'meta.title.projects': 'Projekt | Winblad Design',
    'meta.desc.projects': 'Utforska nya snickeriprojekt från Winblad Design, inklusive listverk, altaner, skräddarsydda skåp och renoveringsstöd.',
    'meta.title.quote': 'Begär offert | Winblad Design',
    'meta.desc.quote': 'Skicka en projektförfrågan till Winblad Design via offertformuläret eller via e-post.',

    'home.hero.eyebrow': 'Skräddarsytt snickeri & finish',
    'home.hero.h1': 'Byggt med omsorg. Gjort för att hålla.',
    'home.hero.lead': 'Winblad Design skapar vackra, funktionella utrymmen för husägare, entreprenörer och fastighetsförvaltare. Från skräddarsydda lister till fullständigt renoveringsstöd levererar vi hantverk, pålitlighet och rena finisher i varje uppdrag.',
    'home.hero.ctaPrimary': 'Boka en konsultation',
    'home.hero.ctaSecondary': 'Se våra projekt',
    'home.hero.meta1': 'Års erfarenhet',
    'home.hero.meta2': 'Avslutade projekt',
    'home.hero.meta3': 'Skräddarsytt hantverk',
    'home.hero.imgAlt': 'Vackert hårdträ-listverk och skräddarsytt snickeriarbete',
    'home.hero.badgeStrong': 'Inredningsuppgraderingar',
    'home.hero.badgeSpan': 'Skräddarsytt snickeri • lister • trappor',

    'home.about.eyebrow': 'Varför välja oss',
    'home.about.h2': 'Hantverk som känns personligt.',
    'home.about.lead': 'Vi är specialiserade på kvalitetssnickeri för hem och kommersiella utrymmen, med en balans mellan detaljrikt hantverk och pålitlig, punktlig projektledning.',
    'home.about.f1h': 'Byggt för vardagen',
    'home.about.f1p': 'Varje projekt planeras utifrån funktion, hållbarhet och hur ett utrymme faktiskt används — från familjekök till högtrafikerade hallar.',
    'home.about.f2h': 'Noggrann uppmärksamhet på detaljer',
    'home.about.f2p': 'Vi behandlar lister, finsnickeri och strukturella uppgraderingar som ett hantverk — varje linje, hörn och skarv spelar roll.',
    'home.about.f3h': 'Ärlig kommunikation',
    'home.about.f3p': 'Tydliga tidsplaner, transparent prissättning och praktiska rekommendationer håller projektet på rätt spår från start till mål.',
    'home.about.f4h': 'Ren och respektfull service',
    'home.about.f4p': 'Vi respekterar ditt utrymme, din tidsplan och din egendom, och håller arbetsytorna städade och organiserade genom hela processen.',

    'home.services.eyebrow': 'Våra tjänster',
    'home.services.h2': 'Från detaljer till fullständiga rumsförvandlingar.',
    'home.services.s1h': 'Skräddarsydda lister & snickerier',
    'home.services.s1p': 'Golvlister, taklister, fönsterfoder, inbyggda förvaringslösningar och skräddarsydda finishdetaljer.',
    'home.services.s2h': 'Altaner & utomhusbyggen',
    'home.services.s2p': 'Nya altaner, pergolor, räcken och utomhusuppgraderingar byggda för daglig användning.',
    'home.services.s3h': 'Renoveringsstöd',
    'home.services.s3p': 'Skåpsinstallation, hjälp med stomme, golvförberedelser, hyllor och finsnickeri.',

    'home.featured.eyebrow': 'Utvalda projekt',
    'home.featured.h2': 'Några av våra bästa projekt.',
    'home.featured.seeAll': 'Se alla projekt',
    'home.featured.p1Alt': 'Modernt köksrenovering med skräddarsydda skåp',
    'home.featured.p1Tag': 'Kök',
    'home.featured.p1H': 'Skräddarsydda köksskåp',
    'home.featured.p1P': 'Varma träfinisher, inbyggd förvaring och en ren planlösning skapad för vardagen.',
    'home.featured.p2Alt': 'Träpaneler och skräddarsydd inredningsfinish',
    'home.featured.p2Tag': 'Inredning',
    'home.featured.p2H': 'Modernt listpaket',
    'home.featured.p2P': 'Rena linjer och förfinad detaljering för en fullständig uppfräschning med bestående visuell effekt.',

    'home.cta.h2': 'Redo att starta ditt nästa projekt?',
    'home.cta.p': 'Berätta om dina idéer så hjälper vi dig planera rätt snickerilösning.',

    'footer.h2': 'Låt oss bygga något som håller.',
    'footer.lead': 'Oavsett om du behöver en mindre listuppdatering eller ett stort skräddarsytt bygge är vi redo att hjälpa till.',
    'footer.quickEyebrow': 'Snabb information',
    'footer.quickH3': 'Vad du kan förvänta dig',
    'footer.quickLead': 'Konsultation, detaljerad offert, materialplanering, expertis och en städad avslutning.',
    'footer.check1H': 'Bostäder & lätt kommersiellt',
    'footer.check1P': 'Skräddarsytt snickeri och installationstjänster',
    'footer.check2H': 'Flexibel schemaläggning',
    'footer.check2P': 'Helg- och kvällstider tillgängliga',
    'footer.tagline': 'Hantverk för hem, tillbyggnader och skräddarsydda utrymmen.',

    'projects.eyebrow': 'Projektgalleri',
    'projects.h1': 'Nya projekt och skräddarsydda byggen.',
    'projects.lead': 'En närmare titt på projekten vi har genomfört inom kök, vardagsrum, utomhusbyggen och detaljfokuserade renoveringar.',
    'projects.p1Alt': 'Skräddarsydda köksskåp i hårdträ',
    'projects.p1Tag': 'Köksrenovering',
    'projects.p1H': 'Renovering av familjekök',
    'projects.p1P': 'Byggde om ett omodernt kök till ett varmt, funktionellt samlingsutrymme med skräddarsydda skåp, öppna hyllor och nyrenoverade listdetaljer.',
    'projects.p2Alt': 'Skräddarsydda lister och väggpaneler',
    'projects.p2Tag': 'Inredningsfinish',
    'projects.p2H': 'Listpaket för hela hemmet',
    'projects.p2P': 'Installerade väggpaneler, taklister och inbyggda lösningar för en renare, mer förfinad inredning genomgående.',
    'projects.p3Alt': 'Altanbygge med träräcke',
    'projects.p3Tag': 'Utomhusliv',
    'projects.p3H': 'Altan & räcke på baksidan',
    'projects.p3P': 'Designade och byggde ett hållbart altan- och räckesystem för att utöka utomhussittplatserna och höja både utseende och värde.',
    'projects.p4Alt': 'Trätrappa med skräddarsytt räcke',
    'projects.p4Tag': 'Trappa',
    'projects.p4H': 'Uppgradering av trappa',
    'projects.p4P': 'Byggde om en omodern trappa med nya trappsteg, ett skräddarsytt räcke och ett mer polerat utseende anpassat till omgivande arkitektur.',
    'projects.p5Alt': 'Trähyllor och förvaringsinstallation',
    'projects.p5Tag': 'Inbyggt',
    'projects.p5H': 'Installation av förvaring och hyllor',
    'projects.p5P': 'Byggde skräddarsydda hyllor och förvaringslösningar som maximerar utrymmet samtidigt som en ren, skräddarsydd estetik bibehålls.',
    'projects.p6Alt': 'Snickeri och bänk vid entrén',
    'projects.p6Tag': 'Entré',
    'projects.p6H': 'Entrébänk & detalj i grovkök',
    'projects.p6P': 'Installerade inbyggda sittplatser, förvaringsfack och skräddarsydda lister för att skapa ett funktionellt grovkök med en anpassad finish.',
    'projects.cta.h2': 'Vill du ha ett liknande projekt?',
    'projects.cta.p': 'Börja med ett kort samtal så hjälper vi dig planera rätt lösning.',
    'projects.footerTagline': 'Byggt för hållbart hantverk.',

    'quote.h1': 'Begär en offert',
    'quote.lead': 'Berätta lite om ditt projekt så hör vi av oss med nästa steg.',
    'quote.form.name': 'Namn',
    'quote.form.namePh': 'Ditt namn',
    'quote.form.email': 'E-post',
    'quote.form.phone': 'Telefon',
    'quote.form.phonePh': 'Ditt telefonnummer',
    'quote.form.projectType': 'Projekttyp',
    'quote.form.projectTypePh': 'Kök, altan, lister, etc.',
    'quote.form.message': 'Din förfrågan',
    'quote.form.messagePh': 'Berätta om ditt projekt, tidsplan och vad du vill ha hjälp med...',
    'quote.form.submit': 'Skicka förfrågan',
    'quote.footerTagline': 'Offertförfrågningar & projektfrågor',

    'meta.title.notFound': 'Sidan hittades inte | Winblad Design',
    'meta.desc.notFound': 'Sidan du letar efter finns inte på Winblad Designs webbplats.',
    'notFound.eyebrow': '404-fel',
    'notFound.h1': 'Den här sidan tog fel väg.',
    'notFound.lead': 'Sidan du letar efter finns inte, kan ha flyttats, eller så är länken inaktuell. Låt oss hjälpa dig hitta rätt igen.',
    'notFound.homeButton': 'Tillbaka till startsidan',
  },
};

let currentLang = localStorage.getItem('lang') || 'sv';

const langToggleButtons = document.querySelectorAll('.lang-toggle');
const themeToggleButtons = document.querySelectorAll('.theme-toggle');
const root = document.documentElement;

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  root.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });
  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const key = el.getAttribute('data-i18n-content');
    if (dict[key] !== undefined) el.setAttribute('content', dict[key]);
  });

  langToggleButtons.forEach((btn) => {
    btn.textContent = lang === 'en' ? 'SV' : 'EN';
  });

  localStorage.setItem('lang', lang);
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggleButtons.forEach((btn) => {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
  localStorage.setItem('theme', theme);
}

langToggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'sv' : 'en');
  });
});

themeToggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
});

applyLanguage(currentLang);
applyTheme(localStorage.getItem('theme') || 'light');
