const translations = {
  en: {
    title: 'Mustafa Qassmieh — Software & Embedded Systems',
    description: 'Mustafa Qassmieh — software developer building backend, embedded and connected systems.',
    navLabel: 'Main navigation', languageLabel: 'Language', navWork: 'Work', navExperience: 'Experience', navAbout: 'About', contact: 'Let’s talk',
    eyebrow: 'Based in Sweden · Open to opportunities', heroTitle: 'I build where<br><em>software meets reality.</em>',
    heroBody: 'Software developer working across backend systems, embedded devices, networking and cybersecurity. I like taking ideas all the way from protocol and code to a working physical system.',
    explore: 'Explore my work', portraitCaption: 'Software / Embedded / Security',
    statYears: 'years building software', statDomains: 'systems domains', statRule: 'rule: make it work',
    workLabel: '01 / Selected work', workTitle: 'Built, tested,<br>and made real.',
    droneLabel: '01 — THESIS / EMBEDDED', droneTitle: 'Voice-Controlled<br>Drone System',
    droneBody: 'An end-to-end command pipeline from a mobile voice interface through two ESP32 devices to an STM32 flight controller. Built with packet validation, CRSF, telemetry parsing, throttle smoothing and communication-loss failsafes.',
    smartLabel: '02 — DISTRIBUTED SYSTEMS', smartTitle: 'Smart Home Control System',
    smartBody: 'A multi-client system connecting a Python TCP server, Android client and React dashboard through a Node.js WebSocket gateway, with SQLite persistence and NDJSON messaging.',
    kronLabel: '03 — ANDROID / TEAM', kronTitle: 'Kron Schedule App',
    kronBody: 'Production Android work in Kotlin across seven Swedish universities: persistent saved-schedule state, free-tier product logic, UI fixes and contributions delivered through pull requests and team review.',
    courseLabel: '04 — FULL STACK', courseTitle: 'Course Registration Platform',
    courseBody: 'A full-stack enrollment platform with student applications, prerequisite checks and administrative workflows secured with JWT authentication.',
    experienceLabel: '02 / Experience', experienceTitle: 'Code, classrooms<br>and real deadlines.', taTime: '2023 — NOW',
    taTitle: 'Teaching Assistant', university: 'Kristianstad University',
    taBody: 'Supporting algorithms, data structures, Android and client/server systems. I debug code, guide industry-linked student teams and explain technical trade-offs to groups of 40+ students.',
    driverTitle: 'Delivery Driver',
    driverBody: 'Independent, time-critical night work across multiple routes—planning around fixed deadlines and resolving unexpected problems without losing pace or quality.',
    aboutLabel: '03 / About', aboutTitle: 'I’m Mustafa.<br><em>Curiosity is the engine.</em>',
    aboutLead: 'I’m a Computer Science student nearing graduation, specializing in software engineering and now expanding into cybersecurity.',
    aboutBody: 'I’m most at home in the messy middle between disciplines: tracing a packet across services, reading telemetry from a flight controller, soldering a connection, or helping someone reason through a broken algorithm. I care about understanding the whole system—not just the file I’m editing.',
    aboutPersonal: 'Outside the terminal, I train, build electronics, 3D print parts, read Dostoyevsky and occasionally convince myself the next hardware idea will be “a quick weekend project.”',
    languages: 'LANGUAGES', systems: 'SYSTEMS', hardware: 'HARDWARE', databases: 'DATABASES',
    systemsList: 'Linux · TCP/IP · WebSockets<br>REST · Distributed systems', hardwareList: 'ESP32 · UART · Sensors<br>RF · Soldering · 3D printing',
    footerPrompt: 'Have a difficult problem?', footerCta: 'Let’s build the solution. ↗'
  },
  sv: {
    title: 'Mustafa Qassmieh — Mjukvara och inbyggda system',
    description: 'Mustafa Qassmieh — mjukvaruutvecklare inom backend, inbyggda och uppkopplade system.',
    navLabel: 'Huvudnavigation', languageLabel: 'Språk', navWork: 'Projekt', navExperience: 'Erfarenhet', navAbout: 'Om mig', contact: 'Kontakta mig',
    eyebrow: 'Baserad i Sverige · Öppen för möjligheter', heroTitle: 'Jag bygger där<br><em>mjukvara möter verkligheten.</em>',
    heroBody: 'Mjukvaruutvecklare med fokus på backendsystem, inbyggda enheter, nätverk och cybersäkerhet. Jag gillar att ta idéer hela vägen från protokoll och kod till ett fungerande fysiskt system.',
    explore: 'Se mina projekt', portraitCaption: 'Mjukvara / Inbyggda system / Säkerhet',
    statYears: 'år av mjukvaruutveckling', statDomains: 'systemområden', statRule: 'regel: få det att fungera',
    workLabel: '01 / Utvalda projekt', workTitle: 'Byggt, testat<br>och förverkligat.',
    droneLabel: '01 — EXAMENSARBETE / INBYGGDA SYSTEM', droneTitle: 'Röststyrt<br>drönarsystem',
    droneBody: 'En komplett kommandokedja från ett mobilt röstgränssnitt via två ESP32-enheter till en STM32-flygkontroller. Systemet omfattar paketvalidering, CRSF, telemetritolkning, mjuk gasreglering och felsäkerhet vid kommunikationsbortfall.',
    smartLabel: '02 — DISTRIBUERADE SYSTEM', smartTitle: 'Styrsystem för smarta hem',
    smartBody: 'Ett flerklientsystem som kopplar samman en TCP-server i Python, en Android-klient och en React-panel via en WebSocket-gateway i Node.js, med SQLite-lagring och NDJSON-meddelanden.',
    kronLabel: '03 — ANDROID / TEAM', kronTitle: 'Kron schemaapp',
    kronBody: 'Produktionsarbete i Kotlin för sju svenska lärosäten: beständig lagring av scheman, produktlogik för gratisversionen, gränssnittsfixar och bidrag levererade genom pull requests och teamgranskning.',
    courseLabel: '04 — FULLSTACK', courseTitle: 'Plattform för kursregistrering',
    courseBody: 'En fullstackplattform för studentansökningar, behörighetskontroller och administrativa arbetsflöden, skyddad med JWT-autentisering.',
    experienceLabel: '02 / Erfarenhet', experienceTitle: 'Kod, klassrum<br>och riktiga deadlines.', taTime: '2023 — NU',
    taTitle: 'Lärarassistent', university: 'Högskolan Kristianstad',
    taBody: 'Stöd inom algoritmer, datastrukturer, Android och klient/server-system. Jag felsöker kod, vägleder studentteam i branschanknutna projekt och förklarar tekniska avvägningar för grupper med över 40 studenter.',
    driverTitle: 'Distributionsförare',
    driverBody: 'Självständigt och tidskritiskt nattarbete på flera rutter—med planering mot fasta deadlines och problemlösning utan att tappa tempo eller kvalitet.',
    aboutLabel: '03 / Om mig', aboutTitle: 'Jag är Mustafa.<br><em>Nyfikenheten driver mig.</em>',
    aboutLead: 'Jag studerar datavetenskap och närmar mig examen, med inriktning mot mjukvaruutveckling och en växande kompetens inom cybersäkerhet.',
    aboutBody: 'Jag trivs bäst i mötet mellan olika discipliner: att följa ett paket genom flera tjänster, läsa telemetri från en flygkontroller, löda en anslutning eller hjälpa någon att resonera kring en trasig algoritm. Jag vill förstå hela systemet—inte bara filen jag redigerar.',
    aboutPersonal: 'Utanför terminalen tränar jag, bygger elektronik, 3D-printar delar, läser Dostojevskij och lyckas ibland övertyga mig själv om att nästa hårdvaruidé blir “ett snabbt helgprojekt”.',
    languages: 'SPRÅK', systems: 'SYSTEM', hardware: 'HÅRDVARA', databases: 'DATABASER',
    systemsList: 'Linux · TCP/IP · WebSockets<br>REST · Distribuerade system', hardwareList: 'ESP32 · UART · Sensorer<br>RF · Lödning · 3D-printing',
    footerPrompt: 'Har du ett svårt problem?', footerCta: 'Låt oss bygga lösningen. ↗'
  }
};

const metaDescription = document.querySelector('meta[name="description"]');
const languageButtons = document.querySelectorAll('[data-lang]');

function setLanguage(language) {
  const lang = translations[language] ? language : 'en';
  const copy = translations[lang];
  document.documentElement.lang = lang;
  document.title = copy.title;
  metaDescription.setAttribute('content', copy.description);
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = copy[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = copy[element.dataset.i18nHtml]; });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', copy[element.dataset.i18nAria]); });
  languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
}

let savedLanguage;
try { savedLanguage = localStorage.getItem('portfolio-language'); } catch (_) {}
const initialLanguage = savedLanguage || (navigator.language.toLowerCase().startsWith('sv') ? 'sv' : 'en');
setLanguage(initialLanguage);
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

document.getElementById('year').textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .timeline article, .skills > div').forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(18px)';
  element.style.transition = 'opacity .65s ease, transform .65s ease';
  reveal.observe(element);
});

const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
