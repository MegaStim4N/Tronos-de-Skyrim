/* =======================
   EFECTO DE ASCUAS
======================= */

const canvas = document.getElementById('embers');
const ctx = canvas.getContext('2d');

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * w,
    y: h + Math.random() * h,
    r: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.3 + 0.1,
    alpha: Math.random() * 0.6 + 0.2
  });
}

function update() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.y -= p.speed;
    if (p.y < -10) {
      p.y = h + Math.random() * 50;
      p.x = Math.random() * w;
    }
    ctx.fillStyle = `rgba(177,28,28,${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(update);
}
update();

/* =======================
   TRADUCCIONES
======================= */

const translations = {
  es: {
    title: "TRONOS DE SKYRIM",
    tagline: "La guerra civil no se observa. Se vive.",
    subtitle: "Una experiencia narrativa centrada en facciones, decisiones y consecuencias.",
    status1: "En desarrollo activo",
    status2: "Sin fecha de lanzamiento",
    cta: "Entrar al Discord · Seguir el desarrollo",
    about_title: "Qué es Tronos de Skyrim",
    about_text: "Una modlist curada que transforma la guerra civil en un conflicto profundo y persistente.",
    pillar1: "▸ Narrativa coherente y oscura",
    pillar2: "▸ Elección de facción con impacto real",
    pillar3: "▸ Experiencia personalizada desde el launcher",
    pillar4: "▸ Proyecto vivo y en evolución",
    note: "Proyecto no comercial. Desarrollo sostenible."
  },

  en: {
    title: "THRONES OF SKYRIM",
    tagline: "The civil war is not observed. It is lived.",
    subtitle: "A narrative experience focused on factions, choices, and consequences.",
    status1: "Actively in development",
    status2: "No release date",
    cta: "Join Discord · Follow development",
    about_title: "What is Thrones of Skyrim",
    about_text: "A curated modlist that turns the civil war into a deep and persistent conflict.",
    pillar1: "▸ Dark coherent narrative",
    pillar2: "▸ Faction choice with real impact",
    pillar3: "▸ Personalized launcher experience",
    pillar4: "▸ Living evolving project",
    note: "Non-commercial project. Sustainable development."
  },

  fr: {
    title: "TRÔNES DE SKYRIM",
    tagline: "La guerre civile ne s'observe pas. Elle se vit.",
    subtitle: "Une expérience narrative basée sur les factions et les choix.",
    status1: "En développement actif",
    status2: "Aucune date de sortie",
    cta: "Rejoindre le Discord",
    about_title: "Qu'est-ce que Trônes de Skyrim",
    about_text: "Une modlist immersive centrée sur la guerre civile.",
    pillar1: "▸ Narration sombre",
    pillar2: "▸ Choix de faction impactant",
    pillar3: "▸ Expérience personnalisée",
    pillar4: "▸ Projet vivant",
    note: "Projet non commercial."
  },

  de: {
    title: "THRONES OF SKYRIM",
    tagline: "Der Bürgerkrieg wird nicht beobachtet. Er wird erlebt.",
    subtitle: "Ein narratives Erlebnis über Fraktionen und Entscheidungen.",
    status1: "Aktive Entwicklung",
    status2: "Kein Veröffentlichungsdatum",
    cta: "Discord beitreten",
    about_title: "Was ist Thrones of Skyrim",
    about_text: "Eine kuratierte Modlist für einen realistischen Bürgerkrieg.",
    pillar1: "▸ Dunkle Erzählung",
    pillar2: "▸ Bedeutende Fraktionswahl",
    pillar3: "▸ Personalisierte Erfahrung",
    pillar4: "▸ Lebendiges Projekt",
    note: "Nicht kommerzielles Projekt."
  },

  it: {
    title: "TRONI DI SKYRIM",
    tagline: "La guerra civile non si osserva. Si vive.",
    subtitle: "Un'esperienza narrativa basata su fazioni e decisioni.",
    status1: "In sviluppo attivo",
    status2: "Nessuna data di rilascio",
    cta: "Unisciti a Discord",
    about_title: "Cos'è Troni di Skyrim",
    about_text: "Una modlist curata sulla guerra civile.",
    pillar1: "▸ Narrazione oscura",
    pillar2: "▸ Scelte di fazione con impatto",
    pillar3: "▸ Esperienza personalizzata",
    pillar4: "▸ Progetto vivo",
    note: "Progetto non commerciale."
  },

  pt: {
    title: "TRONOS DE SKYRIM",
    tagline: "A guerra civil não se observa. Vive-se.",
    subtitle: "Uma experiência narrativa focada em facções e escolhas.",
    status1: "Em desenvolvimento ativo",
    status2: "Sem data de lançamento",
    cta: "Entrar no Discord",
    about_title: "O que é Tronos de Skyrim",
    about_text: "Uma modlist curada da guerra civil.",
    pillar1: "▸ Narrativa sombria",
    pillar2: "▸ Escolhas com impacto",
    pillar3: "▸ Experiência personalizada",
    pillar4: "▸ Projeto vivo",
    note: "Projeto não comercial."
  },

  pl: {
    title: "TRONY SKYRIMU",
    tagline: "Wojny domowej się nie obserwuje. Przeżywa się ją.",
    subtitle: "Narracyjne doświadczenie frakcji i wyborów.",
    status1: "Aktywnie rozwijany",
    status2: "Brak daty premiery",
    cta: "Dołącz do Discorda",
    about_title: "Czym jest Trony Skyrim",
    about_text: "Dopracowana modlista wojny domowej.",
    pillar1: "▸ Mroczna narracja",
    pillar2: "▸ Wybory frakcji",
    pillar3: "▸ Spersonalizowane doświadczenie",
    pillar4: "▸ Żywy projekt",
    note: "Projekt niekomercyjny."
  },

  ru: {
    title: "ТРОНЫ СКАЙРИМА",
    tagline: "Гражданскую войну не наблюдают. Её проживают.",
    subtitle: "Нарративный опыт фракций и решений.",
    status1: "Активная разработка",
    status2: "Без даты релиза",
    cta: "Присоединиться к Discord",
    about_title: "Что такое Троны Скайрима",
    about_text: "Кураторский модлист гражданской войны.",
    pillar1: "▸ Мрачный сюжет",
    pillar2: "▸ Выбор фракции",
    pillar3: "▸ Персонализированный опыт",
    pillar4: "▸ Живой проект",
    note: "Некоммерческий проект."
  },

  ja: {
    title: "スカイリムの玉座",
    tagline: "内戦は見るものではない。生きるものだ。",
    subtitle: "派閥と選択に基づく物語体験。",
    status1: "開発中",
    status2: "発売日未定",
    cta: "Discordに参加",
    about_title: "スカイリムの玉座とは",
    about_text: "内戦を描くキュレーションされたModリスト。",
    pillar1: "▸ ダークな物語",
    pillar2: "▸ 派閥選択",
    pillar3: "▸ カスタマイズ体験",
    pillar4: "▸ 進化するプロジェクト",
    note: "非商用プロジェクト。"
  },

  zh: {
    title: "天际王座",
    tagline: "内战不是旁观，而是亲历。",
    subtitle: "围绕派系与选择的叙事体验。",
    status1: "持续开发中",
    status2: "暂无发布日期",
    cta: "加入 Discord",
    about_title: "什么是天际王座",
    about_text: "一个专注于内战的模组整合。",
    pillar1: "▸ 黑暗叙事",
    pillar2: "▸ 派系选择",
    pillar3: "▸ 个性化体验",
    pillar4: "▸ 持续进化的项目",
    note: "非商业项目。"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const strings = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) el.textContent = strings[key];
  });
}

const savedLang = localStorage.getItem("lang");
const browserLang = (navigator.language || "en").split("-")[0];
setLanguage(savedLang || browserLang);
