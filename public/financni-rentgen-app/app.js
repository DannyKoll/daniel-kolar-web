const pillars = {
  reserve: {
    label: "Rezerva",
    color: "#1a9b7a",
    weakCopy:
      "Nejslabším místem je pravděpodobně rezerva. Při výpadku příjmu, větším výdaji nebo změně životní situace může být rozpočet zbytečně zranitelný.",
    practicalCopy:
      "Lidsky to znamená, že i dobrý příjem může být křehký, pokud nemá kolem sebe dostatečný polštář. Rezerva je první vrstva klidu před tím, než se musí sahat do investic, úvěrů nebo rodinného rozpočtu.",
    firstStep:
      "Jako první bych zkontroloval, kolik měsíců výdajů má rezerva reálně pokrýt a jak ji tvořit tak, aby nenarušila ostatní cíle.",
  },
  obligations: {
    label: "Závazky",
    color: "#de8737",
    weakCopy:
      "Nejslabším místem jsou pravděpodobně závazky. Nemusí být problém mít hypotéku nebo úvěr, důležité ale je, aby splátky nenarušovaly rezervu, ochranu příjmu a dlouhodobou tvorbu majetku.",
    practicalCopy:
      "Největší riziko nemusí být samotná hypotéka nebo úvěr. Často je to otázka, jestli po splátkách zůstává prostor na rezervu, ochranu příjmu a budoucí plán.",
    firstStep:
      "Jako první bych zkontroloval, kolik vám po splátkách reálně zůstává na rezervu, ochranu příjmu a dlouhodobou tvorbu majetku.",
  },
  protection: {
    label: "Ochrana příjmu",
    color: "#2d79bd",
    weakCopy:
      "Nejslabším místem je pravděpodobně ochrana příjmu. Pokud na vašem příjmu stojí rodina, hypotéka nebo dlouhodobý plán, je důležité vědět, co by se stalo při delším výpadku příjmu.",
    practicalCopy:
      "Lidsky řečeno: pokud dobrý příjem drží většinu plánu, je potřeba vědět, co plán unese ve chvíli, kdy příjem na čas vypadne nebo se výrazně sníží.",
    firstStep:
      "Jako první bych prošel, jak by rozpočet fungoval při dlouhodobé nemoci, úrazu nebo invaliditě a kdo všechno je na příjmu závislý.",
  },
  wealth: {
    label: "Tvorba majetku",
    color: "#1a9b7a",
    weakCopy:
      "Nejslabším místem je pravděpodobně tvorba majetku. Vyšší příjem sám o sobě nemusí znamenat větší klid, pokud se z něj postupně netvoří rezerva, majetek a více možností do budoucna.",
    practicalCopy:
      "Tohle je časté u lidí, kteří vydělávají slušně, ale nemají pocit většího klidu. Příjem teče dovnitř, ale nemusí se dostatečně měnit v rezervu, majetek a budoucí možnosti.",
    firstStep:
      "Jako první bych zjistil, jaká část příjmu se pravidelně mění v rezervu, investice nebo jiné dlouhodobé možnosti.",
  },
  plan: {
    label: "Přehled a plán",
    color: "#6750a4",
    weakCopy:
      "Nejslabším místem je pravděpodobně celkový přehled a plán. Jednotlivé smlouvy mohou samy o sobě dávat smysl, ale důležité je, jestli dohromady tvoří funkční celek.",
    practicalCopy:
      "Lidsky to znamená, že problém nemusí být v jedné konkrétní smlouvě. Slabé místo může být v tom, že rozhodnutí nejsou poskládaná do jednoho směru.",
    firstStep:
      "Jako první bych dal vedle sebe příjmy, rezervu, závazky, ochranu příjmu a dlouhodobé cíle, aby bylo vidět, co na sebe navazuje.",
  },
};

const situations = [
  "Chci celkový přehled o financích.",
  "Řeším hypotéku nebo bydlení.",
  "Mám rodinu a chci větší jistotu.",
  "Chci začít nebo lépe nastavit investice.",
  "Vydělávám dobře, ale nemám pocit většího klidu.",
  "Chci zkontrolovat smlouvy a pojistky.",
];

const interests = [
  "Rezerva a klid",
  "Hypotéka a závazky",
  "Ochrana příjmu",
  "Investice a majetek",
  "Celkový přehled",
  "Budoucnost a renta",
];

const questions = [
  {
    text: "Na kolik měsíců běžných výdajů by vám vystačila finanční rezerva, kdyby vám vypadl příjem?",
    helper:
      "Rezerva je první vrstva klidu. Pomáhá, aby výpadek příjmu nebo větší výdaj nerozhodil celý finanční plán.",
    pillar: "reserve",
    answers: [
      ["Nemám rezervu", 5, "Bez rezervy může i menší výpadek rychle vytvořit tlak na rozpočet. Tady obvykle začíná první krok k většímu klidu."],
      ["Méně než 1 měsíc", 20, "Krátká rezerva pomůže jen částečně. Dává smysl ověřit, co by se dělo při delším výpadku příjmu."],
      ["1–3 měsíce", 55, "To je začátek finanční opory. U delšího výpadku by ale plán ještě mohl být zranitelný."],
      ["3–6 měsíců", 82, "To už je solidní základ. Rezerva dává čas na rozhodování a chrání ostatní části plánu."],
      ["Více než 6 měsíců", 100, "Silná rezerva zvyšuje odolnost. Další otázka je, jestli zároveň vzniká i dlouhodobý majetek."],
    ],
  },
  {
    text: "Kolik z vašeho příjmu se vám pravidelně daří odkládat nebo investovat?",
    helper:
      "Tady sledujeme, jestli se dnešní příjem postupně mění v rezervu, majetek a větší možnosti do budoucna.",
    scores: { wealth: 0.65, plan: 0.35 },
    answers: [
      ["Většinou nic nezůstane", 10, "Pak příjem pravděpodobně slouží hlavně dnešnímu provozu. První krok bývá najít prostor, který může začít tvořit budoucnost."],
      ["Něco odložím jen občas", 35, "Občasné odkládání je dobrý začátek. Větší klid ale obvykle vzniká až ze systému, který funguje pravidelně."],
      ["Pravidelně menší část", 65, "Pravidelnost je důležitější než dokonalá částka. Tady už vzniká základ, na kterém se dá stavět."],
      ["Pravidelně významnou část", 85, "To je dobrý signál. Dává smysl ověřit, jestli odkládané peníze mají jasný účel a správné místo v plánu."],
      ["Mám jasný systém pro rezervu, cíle i investice", 100, "To je silný základ. Peníze pak nemají jen zůstávat stranou, ale plnit konkrétní roli."],
    ],
  },
  {
    text: "Máte hypotéku, úvěry nebo jiné větší závazky?",
    helper:
      "Nejde jen o výši splátky. Důležité je, jestli po ní zůstává prostor pro rezervu, ochranu příjmu a tvorbu majetku.",
    pillar: "obligations",
    answers: [
      ["Ne, žádné významné závazky", 92, "Bez větších závazků bývá větší prostor tvořit rezervu, majetek a plán. Důležité je ten prostor opravdu využít."],
      ["Ano, ale splátky nechávají dost prostoru", 82, "To je dobrá pozice. Často právě tady dává smysl nastavit plán, jak se závazkem pracovat chytře — vedle rezervy, investic a dlouhodobých cílů."],
      ["Ano, někdy zatěžují rozpočet", 48, "Tady stojí za to ověřit, jestli závazky neberou příliš místa rezervě, ochraně příjmu nebo tvorbě majetku."],
      ["Ano, rozpočet je kvůli nim napjatý", 18, "Napjatý rozpočet může oslabit celý plán, i když samotný úvěr dával při sjednání smysl."],
      ["Nejsem si jistý/á", 42, "Nejistota u závazků je důležitý signál. Splátky je dobré vidět v kontextu celého rozpočtu, ne jen jako samostatnou položku."],
    ],
  },
  {
    text: "Co by se stalo s vaším rozpočtem při výpadku hlavního příjmu na 3–6 měsíců?",
    helper:
      "Tahle otázka ukazuje, jestli finance stojí hlavně na aktuálním příjmu, nebo mají kolem sebe dostatečnou oporu.",
    scores: { reserve: 0.55, protection: 0.45 },
    answers: [
      ["Zvládli bychom to bez větších problémů", 95, "To ukazuje dobrou odolnost. Další otázka je, jestli je stejně dobře chráněný i dlouhodobý plán."],
      ["Bylo by to nepříjemné, ale zvládnutelné", 72, "To je relativně zdravá pozice, pokud víte, odkud by peníze přišly a co by to ovlivnilo."],
      ["Museli bychom výrazně omezit výdaje", 42, "Tady by výpadek příjmu už zasáhl životní standard i další finanční rozhodnutí."],
      ["Byl by to vážný problém", 12, "To je důležitý signál, že finance mohou stát příliš na jednom příjmu."],
      ["Nevím, nikdy jsem to nepočítal/a", 35, "Už samotné spočítání tohoto scénáře často ukáže, kde může být nejslabší místo celého plánu."],
    ],
  },
  {
    text: "Máte vyřešenou ochranu příjmu pro případ dlouhodobé nemoci, úrazu nebo invalidity?",
    helper:
      "Pokud na příjmu stojí rodina, bydlení nebo dlouhodobý plán, je dobré vědět, co by se stalo při jeho delším výpadku.",
    pillar: "protection",
    answers: [
      ["Ano, pravidelně to kontroluji", 100, "To je dobrý přístup. Ochrana příjmu má držet krok s příjmem, závazky, rodinou i cíli."],
      ["Ano, ale dlouho jsem to neřešil/a", 68, "To může být v pořádku. Dává ale smysl ověřit, jestli nastavení odpovídá dnešní situaci."],
      ["Něco mám, ale nevím, jestli to stačí", 45, "Tady často nebývá problém v tom, že něco chybí, ale že není jasné, co by to reálně pokrylo."],
      ["Ne", 10, "Pokud na příjmu stojí bydlení, rodina nebo plán do budoucna, chybějící ochrana může být slabé místo."],
      ["Nevím", 25, "Nejasnost u ochrany příjmu je dobrý důvod podívat se na finance jako celek."],
    ],
  },
  {
    text: "Tvoříte si dlouhodobě majetek — například investicemi, rezervami nebo jiným plánem?",
    helper:
      "Cílem není investovat za každou cenu. Důležité je, jestli peníze dostávají jasný směr a čas pracovat.",
    pillar: "wealth",
    answers: [
      ["Ne", 8, "Bez tvorby majetku může i dobrý příjem zůstat hlavně provozem dnešního života."],
      ["Zatím jen přemýšlím", 30, "To je přirozený začátek. První krok bývá převést úvahu do jednoduchého pravidelného systému."],
      ["Ano, ale nepravidelně", 55, "Nepravidelnost může chvíli fungovat, ale dlouhodobě bývá silnější jasný rytmus a účel."],
      ["Ano, pravidelně", 78, "Pravidelnost je velmi dobrý základ. Teď jde o to, jestli má tvorba majetku jasný účel."],
      ["Ano, podle jasného plánu a účelu peněz", 100, "Tady už peníze pravděpodobně nejsou jen odkládané, ale mají konkrétní roli v budoucím plánu."],
    ],
  },
  {
    text: "Víte, k jakému účelu mají peníze, které odkládáte nebo investujete, jednou sloužit?",
    helper:
      "Peníze bez účelu se snadno míchají dohromady. Cíle pomáhají rozhodnout, co má prioritu, čas a vhodné řešení.",
    pillar: "plan",
    answers: [
      ["Ano, mám jasně rozdělené cíle", 100, "Jasné cíle pomáhají určit, kam peníze patří, kdy je budete potřebovat a jaké riziko dává smysl."],
      ["Částečně", 70, "Částečný směr je dobrý základ. Další krok je rozdělit peníze podle účelu a času."],
      ["Spíš ne", 38, "Bez jasného účelu se peníze snadno míchají dohromady a hůř se určují priority."],
      ["Ne", 18, "Tady může chybět mapa. Bez ní se finanční rozhodnutí často dělají po jednotlivostech."],
      ["Neodkládám ani neinvestuji", 8, "Pak je první otázka, jak vytvořit prostor, aby se část příjmu začala měnit v budoucí možnosti."],
    ],
  },
  {
    text: "Navazují na sebe hlavní části vašich financí - rezerva, závazky, ochrana příjmu, majetek a plán?",
    helper:
      "Finance často vznikají postupně. Důležité je, jestli hlavní části táhnou stejným směrem a tvoří funkční celek.",
    pillar: "plan",
    answers: [
      ["Ano, mám v tom jasný systém", 95, "Jasný systém je silný základ. Další otázka je, jestli drží i při změně příjmu, bydlení nebo cílů."],
      ["Spíš ano, ale něco bych si chtěl/a ověřit", 75, "To je dobrý základ. U financí často rozhoduje právě to, jestli jednotlivé části táhnou stejným směrem."],
      ["Něco řeším, ale nevím, jestli to drží pohromadě", 48, "Tady může být největší hodnota v tom, dát hlavní části vedle sebe a zjistit, co má prioritu."],
      ["Spíš ne, řeším věci podle toho, co zrovna přijde", 25, "To je běžné. Finance často vznikají postupně, ale časem dává smysl ověřit, jestli tvoří jeden celek."],
      ["Nevím", 20, "To je přesně situace, kdy krátká kontrola může pomoct ukázat první oblast k ověření."],
    ],
  },
  {
    text: "Kdy jste naposledy řešil/a finance jako celek, ne jen jednu konkrétní smlouvu nebo oblast?",
    helper:
      "Finance se mění spolu s příjmem, rodinou, bydlením i cíli. To, co dávalo smysl dřív, nemusí odpovídat dnešní situaci.",
    pillar: "plan",
    answers: [
      ["V posledním roce", 100, "To je dobrý rytmus. Pravidelná péče pomáhá, aby finance držely směr i při změnách."],
      ["Před 1–2 lety", 74, "To může být stále v pořádku, pokud se od té doby výrazně nezměnil příjem, bydlení, rodina nebo cíle."],
      ["Před více než 2 lety", 42, "Za dva roky se často změní víc, než si člověk uvědomí: příjem, sazby, priority i životní plány."],
      ["Nikdy", 12, "Pak může být největší přínos právě v tom, dát finance poprvé do jednoho obrazu."],
      ["Nevím", 28, "To může znamenat, že finance fungují spíš po jednotlivých smlouvách než jako jeden systém."],
    ],
  },
  {
    text: "Máte jasnou představu, co chcete, aby vám peníze umožnily za 5–10 let?",
    helper:
      "Dlouhodobý směr pomáhá poznat, jestli dnešní rozhodnutí podporují budoucí možnosti.",
    scores: { plan: 0.6, wealth: 0.4 },
    answers: [
      ["Ano, mám konkrétní představu", 100, "Konkrétní představa pomáhá určit, jakou roli má rezerva, investice, závazky i ochrana příjmu."],
      ["Spíš ano", 76, "Směr už existuje. Teď jde o to, jestli dnešní finanční rozhodnutí ten směr opravdu podporují."],
      ["Přibližně", 56, "Přibližný směr je lepší než žádný, ale může ztěžovat rozhodování, co má prioritu."],
      ["Spíš ne", 28, "Bez představy o budoucnosti se finance často řeší jen podle aktuálního tlaku."],
      ["Ne", 10, "Tady může být první přínos v tom, pojmenovat, co vám mají peníze vlastně umožnit."],
    ],
  },
  {
    text: "Máte pocit, že se váš příjem postupně mění v rezervu, majetek a větší možnosti do budoucna?",
    helper:
      "Tohle je jádro rentgenu: dobrá práce je skvělý základ, ale neměla by být jediným finančním plánem.",
    scores: { wealth: 0.55, reserve: 0.2, plan: 0.25 },
    answers: [
      ["Ano", 100, "To je přesně směr, kdy příjem neslouží jen dnešku, ale postupně vytváří i budoucí možnosti."],
      ["Spíš ano", 78, "To je dobrý signál. Dává smysl ověřit, jestli je systém dost pevný i dlouhodobě."],
      ["Jak kdy", 52, "Tady může být největší přínos v pravidelnosti a jasném rozdělení peněz podle účelu."],
      ["Spíš ne", 25, "To často znamená, že příjem funguje hlavně na provoz, ale málo se mění v budoucí klid."],
      ["Ne", 8, "To je důležitý signál. Dobrá práce může být základ, ale zatím nemusí tvořit finanční plán."],
    ],
  },
];

const resultBands = [
  {
    min: 80,
    text:
      "Vaše finance působí relativně pevně a pravděpodobně máte dobrý základ. Přesto může dávat smysl ověřit, jestli jednotlivé části opravdu navazují.",
  },
  {
    min: 60,
    text:
      "Vaše finance mají základ, ale některé části si pravděpodobně zaslouží větší pozornost. Největší smysl dává podívat se na oblast, která vyšla nejslabší.",
  },
  {
    min: 40,
    text:
      "Výsledek naznačuje, že některé části financí nemusí být dostatečně propojené. Nemusí to znamenat problém, ale může být užitečné určit priority.",
  },
  {
    min: 0,
    text:
      "Výsledek ukazuje, že vaše finance mohou být zranitelné při výpadku příjmu, vyšších závazcích nebo chybějícím plánu.",
  },
];

const app = document.querySelector("#app");
const state = {
  step: "intro",
  situation: "",
  situationIndex: null,
  currentQuestion: 0,
  answers: [],
  interest: "",
  contactOpen: false,
  insightOpen: false,
  feedback: null,
  renderedViewKey: "",
};

function render() {
  const viewKey = `${state.step}:${state.currentQuestion}`;
  const shouldResetScroll = state.renderedViewKey && state.renderedViewKey !== viewKey;
  if (state.step === "intro") renderIntro();
  if (state.step === "situation") renderSituation();
  if (state.step === "questions") renderQuestion();
  if (state.step === "interest") renderInterest();
  if (state.step === "result") renderResult();
  state.renderedViewKey = viewKey;
  if (shouldResetScroll) window.setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0);
}

function renderIntro() {
  app.innerHTML = `
    <div class="screen intro-screen">
      <div class="topline">
        <div class="brand-mark">
          <span class="brand-copy">
            <strong>Daniel Kolář</strong>
            <small>Osobní finanční poradce</small>
          </span>
        </div>
      </div>
      <div class="hero-grid">
        <div>
          <p class="eyebrow">Krátká anonymní kontrola</p>
          <h1>Rentgen financí jako celku</h1>
          <p class="lead strong-lead">Zjistěte, co vaše finance zbytečně brzdí.</p>
          <p class="hero-copy">Za 3 minuty uvidíte, která oblast vašich financí si říká o pozornost jako první — a kde začít.</p>
          <div class="trust-row">
            <span>Bez jména</span>
            <span>Bez telefonu</span>
            <span>Výsledek hned</span>
          </div>
          <div class="actions">
            <button class="btn primary" data-action="start">Spustit rentgen financí</button>
          </div>
        </div>
        <div class="diagnostic-card" aria-hidden="true">
          <div class="diagnostic-score">
            <div><strong>68</strong><span>ukázkové skóre</span></div>
          </div>
          <div class="signal-list">
            ${demoRows()}
          </div>
          <p class="demo-note">* Ukázkové skóre je orientační. Slouží jako první vodítko.</p>
        </div>
      </div>
      <div class="landing-sections">
        <section class="landing-card">
          <p class="section-kicker">Co získáte</p>
          <div class="landing-grid">
            <div>
              <strong>Uvidíte oblast k ověření</strong>
              <span>Rezerva, závazky, ochrana příjmu, tvorba majetku nebo plán.</span>
            </div>
            <div>
              <strong>Zjistíte první krok</strong>
              <span>Ne všechno najednou. Jen to, co si říká o pozornost nejdřív.</span>
            </div>
            <div>
              <strong>Pochopíte souvislosti</strong>
              <span>Ne jednotlivé smlouvy, ale jestli finance fungují jako celek.</span>
            </div>
          </div>
        </section>
        <section class="landing-card split-card">
          <div>
            <p class="section-kicker">Kdy to dává smysl?</p>
            <h3>Pokud si u některé z těchto otázek řeknete „nevím“.</h3>
            <ul class="fit-list">
              <li>Kolik z příjmu se opravdu mění v rezervu, majetek a budoucí možnosti?</li>
              <li>Zůstává vám vedle hypotéky nebo závazků prostor i na ostatní cíle?</li>
              <li>Vydržel by váš plán několik měsíců bez hlavního příjmu?</li>
              <li>Víte, k čemu mají odkládané nebo investované peníze jednou sloužit?</li>
              <li>Navazují na sebe rezerva, závazky, ochrana příjmu, majetek a plán?</li>
            </ul>
          </div>
          <div class="assurance-box">
            <strong>Výsledek uvidíte bez zadání kontaktu.</strong>
            <p>Kontakt můžete doplnit až po výsledku, pokud budete chtít krátký komentář a osobní pohled na souvislosti.</p>
          </div>
        </section>
      </div>
    </div>
  `;
}

function demoRows() {
  return [
    ["Rezerva", 74],
    ["Závazky", 64],
    ["Ochrana příjmu", 48],
    ["Tvorba majetku", 72],
    ["Přehled a plán", 82],
  ]
    .map(
      ([label, value]) => `
        <div class="signal-row">
          <span>${label}</span>
          <span class="mini-bar"><span style="width:${value}%; background:${demoScoreColor(value)}"></span></span>
        </div>
      `,
    )
    .join("");
}

function demoScoreColor(value) {
  if (value < 50) return "#de8737";
  if (value < 70) return "#d49a32";
  return "#1a9b7a";
}

function renderSituation() {
  app.innerHTML = `
    <div class="screen">
      ${progress(1, questions.length + 2, "Začínáme")}
      <div class="step-layout">
        <div class="question-card">
          <p class="question-label">Nejdřív kontext</p>
          <h2>Co teď nejvíc řešíte?</h2>
          <p class="lead">Vyberte možnost, která je vám nejbližší. Výsledek díky tomu bude působit osobněji.</p>
          <div class="answers">
            ${situations
              .map(
                (item, index) => `
                  <button class="answer-btn" data-situation="${index}">${item}</button>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const step = state.currentQuestion + 2;
  const answeredIndex = state.answers[state.currentQuestion];
  const isFeedback = Boolean(state.feedback);

  app.innerHTML = `
    <div class="screen">
      ${progress(step, questions.length + 2, `Otázka ${state.currentQuestion + 1} z ${questions.length}`)}
      <div class="step-layout">
        <div class="question-card">
          <p class="question-label">Finance jako celek</p>
          <h2>${question.text}</h2>
          <p class="question-help">${question.helper}</p>
          ${contextNudge(question)}
          <div class="answers">
            ${question.answers
              .map(
                ([label], index) => `
                  <button class="answer-btn ${answeredIndex === index && isFeedback ? "selected" : ""}" data-answer="${index}" ${isFeedback ? "disabled" : ""}>${label}</button>
                `,
              )
              .join("")}
          </div>
          ${
            state.feedback
              ? `<div class="feedback-card">
                  <span>${state.feedback.area}</span>
                  <strong>${state.feedback.title}</strong>
                  <p>${state.feedback.text}</p>
                  <button class="btn primary feedback-next" data-action="continue-feedback">Pokračovat</button>
                </div>`
              : ""
          }
          <div class="step-actions">
            <button class="btn ghost" data-action="back">Zpět</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderInterest() {
  app.innerHTML = `
    <div class="screen">
      ${progress(questions.length + 2, questions.length + 2, "Poslední krok")}
      <div class="step-layout">
        <div class="question-card">
          <p class="question-label">Co vás zajímá nejvíc</p>
          <h2>Která oblast vás teď nejvíc zajímá?</h2>
          <p class="lead">Tahle odpověď skóre nemění. Pomůže jen lépe nasměrovat závěr.</p>
          <div class="answers">
            ${interests
              .map(
                (item, index) => `
                  <button class="answer-btn" data-interest="${index}">${item}</button>
                `,
              )
              .join("")}
          </div>
          <div class="step-actions">
            <button class="btn ghost" data-action="back">Zpět</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderResult() {
  const result = calculateResult();
  const weak = pillars[result.weakest];
  const band = resultBands.find((item) => result.total >= item.min);
  const scoreColor = result.total < 50 ? "#de8737" : result.total < 70 ? "#d49a32" : "#1a9b7a";
  const cta = resultCta(result.weakest);
  const priorityCopy = priorityResultCopy(result.weakest);

  app.innerHTML = `
    <div class="screen result-screen">
      <div class="topline">
        <div class="brand-mark">
          <span class="brand-copy">
            <strong>Daniel Kolář</strong>
            <small>Osobní finanční poradce</small>
          </span>
        </div>
        <div class="privacy-pill">Výsledek bez povinného odeslání</div>
      </div>

      <div class="diagnosis-strip">
        <div>
          <span>Nejslabší místo</span>
          <strong>${weak.label}</strong>
        </div>
        <div>
          <span>Celkové skóre</span>
          <strong>${result.total}/100</strong>
        </div>
        <div>
          <span>Co zkontrolovat první</span>
          <strong>${shortFirstStep(result.weakest)}</strong>
        </div>
      </div>

      <div class="result-hero">
        <div class="result-summary">
          <p class="eyebrow">Vaše orientační skóre</p>
          <h2>${result.total}/100</h2>
          <div class="score-display">
            <div class="score-ring" style="--score:${result.total}; --score-color:${scoreColor}">
              <strong>${result.total}</strong>
            </div>
            <p class="score-copy">${band.text}</p>
          </div>
          <p class="fineprint">Zvolený kontext: ${state.situation || "Celkový přehled"} ${state.interest ? `· Nejvíc vás zajímá: ${state.interest}` : ""}</p>
        </div>

        <div class="weak-card">
          <span class="weak-label">Oblast, která si říká o pozornost</span>
          <h3>${weak.label}</h3>
          <p class="priority-copy">${priorityCopy}</p>
          <p>${weak.weakCopy}</p>
          <div class="practice-box">
            <strong>Co to znamená v praxi</strong>
            <p>${weak.practicalCopy}</p>
          </div>
          <p><strong>Co bych zkontroloval jako první:</strong> ${weak.firstStep}</p>
        </div>
      </div>

      <div class="pillars-grid">
        ${Object.entries(result.pillarScores)
          .map(([key, value]) => pillarCard(key, value, key === result.weakest))
          .join("")}
      </div>

      <div class="cta-card">
        <div class="cta-grid">
          <div class="cta-copy">
            <h3>Chcete k výsledku krátký komentář?</h3>
            <p>${cta.copy}</p>
            <p class="micro-note">Bez závazku. K navázání použijete jen výsledek a kontakt, který dobrovolně vyplníte.</p>
          </div>
          <div class="cta-actions">
            <button class="btn primary" data-action="open-contact">Chci krátký komentář k výsledku</button>
            <div class="advisor-profile">
              <div class="advisor-avatar">
                <img src="/Foto-3.jpg" alt="Daniel Kolář" loading="lazy" />
              </div>
              <div class="advisor-profile-copy">
                <span>Kdo se na výsledek podívá?</span>
                <strong>Daniel Kolář</strong>
                <p>Finanční poradce s více než 11 lety praxe. Výsledek projdu v souvislostech: příjem, rezerva, ochrana příjmu, majetek a plán.</p>
                <span class="advisor-link">Více o Danielovi</span>
              </div>
            </div>
            <button class="btn secondary" data-action="toggle-insight">Chci pochopit finance jako celek</button>
            <button class="btn secondary" data-action="copy">Zkopírovat shrnutí</button>
            <button class="btn ghost" data-action="restart">Nechat si výsledek pro sebe</button>
          </div>
        </div>
      </div>

      <div class="insight-card ${state.insightOpen ? "" : "hidden"}">
        <h3>Jak fungují finance jako celek</h3>
        <p>Dobrá práce a slušný příjem jsou skvělý základ. Finanční klid ale obvykle vzniká až ve chvíli, kdy na sebe navazuje rezerva, závazky, ochrana příjmu, tvorba majetku a plán do budoucna.</p>
        <p>Proto rentgen ukazuje místo, které může oslabovat celý systém a stojí za pozornost jako první.</p>
      </div>

      <div class="contact-card ${state.contactOpen ? "" : "hidden"}">
        <h3>Kontakt pro navázání</h3>
        <p>Kontakt zadáváte dobrovolně. Stačí e-mail. Telefon doplňte jen tehdy, pokud vám vyhovuje rychlejší domluva.</p>
        <form class="form-grid">
          <div class="field">
            <label for="name">Jméno</label>
            <input id="name" name="name" autocomplete="name" />
          </div>
          <div class="field">
            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" autocomplete="email" />
          </div>
          <div class="field">
            <label for="phone">Telefon, pokud chcete zavolat</label>
            <input id="phone" name="phone" type="tel" autocomplete="tel" />
          </div>
          <div class="field">
            <label for="topic">Téma</label>
            <input id="topic" name="topic" value="${weak.label}" />
          </div>
          <div class="field full">
            <div class="send-notice">
              <strong>Co se Danielovi předá</strong>
              <p>Daniel uvidí krátkou zprávu níže a k ní automaticky přiložený stručný přehled odpovědí z rentgenu. Díky tomu se může podívat na souvislosti, ne jen na výsledné skóre.</p>
            </div>
          </div>
          <div class="field full">
            <label for="message">Krátká zpráva - můžete doplnit vlastní poznámku</label>
            <textarea id="message" name="message">${summaryText(result)}</textarea>
          </div>
          <div class="field full">
            <details class="answer-preview">
              <summary>Zobrazit přehled odpovědí, který se přiloží</summary>
              <pre>${advisorPayload(result)}</pre>
            </details>
            <textarea class="visually-hidden" id="advisor-context" name="advisorContext" readonly>${advisorPayload(result)}</textarea>
          </div>
          <div class="field full">
            <button class="btn primary full" type="button" data-action="copy-contact">Zkopírovat zprávu včetně podkladu</button>
          </div>
        </form>
      </div>

      <div class="disclaimer">
        Tento výsledek je pouze orientační a nenahrazuje osobní finanční analýzu ani individuální finanční doporučení. Smyslem je ukázat, které oblasti vašich financí mohou stát za bližší pozornost.
      </div>
    </div>
  `;
}

function resultCta(key) {
  const pillar = pillars[key];
  return {
    copy:
      `Vyšlo vám, že největší pozornost si říká oblast: ${pillar.label.toLowerCase()}. Pokud chcete, Daniel se na výsledek podívá a krátce vám napíše, co by ověřil jako první.`,
  };
}

function priorityResultCopy(key) {
  const pillar = pillars[key];
  return `Pokud byste měli řešit jen jednu věc jako první, pravděpodobně by to byla právě tato oblast: ${pillar.label.toLowerCase()}.`;
}

function shortFirstStep(key) {
  const steps = {
    reserve: "ověřit rezervu",
    obligations: "prověřit splátky",
    protection: "ověřit, co by se stalo při výpadku příjmu",
    wealth: "nastavit tvorbu majetku",
    plan: "srovnat finance jako celek",
  };

  return steps[key];
}

function pillarCard(key, value, weak) {
  const pillar = pillars[key];
  const color = value < 50 ? "#de8737" : value < 70 ? "#d49a32" : pillar.color;
  return `
    <div class="pillar-card ${weak ? "weak" : ""}">
      <strong>${pillar.label}</strong>
      <div class="pillar-score">${value}</div>
      <div class="pillar-bar"><span style="width:${value}%; background:${color}"></span></div>
    </div>
  `;
}

function progress(current, total, label) {
  const width = Math.round((current / total) * 100);
  return `
    <div class="progress-wrap">
      <div class="progress-meta">
        <span>${label}</span>
        <span>${width}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${width}%"></div></div>
    </div>
  `;
}

function contextNudge(question) {
  if (state.situationIndex === null) return "";

  const topic = question.pillar || strongestScorePillar(question.scores);
  const nudges = {
    1: {
      reserve: "U bydlení není důležité jen schválení hypotéky. Důležité je, kolik rezervy zůstane potom.",
      obligations: "U hypotéky rozhoduje hlavně to, jestli splátka zapadá do celého rozpočtu.",
    },
    2: {
      reserve: "U rodiny rezerva často chrání nejen rozpočet, ale i klid při běžných životních změnách.",
      protection: "Když na příjmu stojí rodina, ochrana příjmu je jedna z klíčových návazností.",
    },
    3: {
      wealth: "U investic nejde jen o výnos. Důležité je, k čemu mají peníze jednou sloužit.",
      plan: "Dobrý plán pomáhá rozlišit, které peníze mají být dostupné brzy a které pracují dlouhodobě.",
    },
    4: {
      wealth: "U vyššího příjmu je klíčové, kolik z něj se opravdu mění v majetek a budoucí možnosti.",
      plan: "Vyšší příjem sám o sobě ještě nemusí znamenat větší klid, pokud nemá jasný systém.",
    },
    5: {
      plan: "U smluv nejde jen o to, co máte sjednané. Důležité je, jestli to dohromady dává smysl.",
      protection: "U pojistek je zásadní, jestli chrání skutečný plán, ne jen existují ve šanonu.",
    },
  };

  const text = nudges[state.situationIndex]?.[topic];
  return text ? `<p class="context-nudge">${text}</p>` : "";
}

function strongestScorePillar(scores = {}) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "plan";
}

function answerQuestion(answerIndex) {
  if (state.feedback) return;

  state.answers[state.currentQuestion] = answerIndex;
  state.feedback = buildFeedback(state.currentQuestion, answerIndex);
  render();
  window.setTimeout(() => document.querySelector(".feedback-card")?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
}

function buildFeedback(questionIndex, answerIndex) {
  const question = questions[questionIndex];
  const answer = question.answers[answerIndex];
  const pillarKey = question.pillar || strongestScorePillar(question.scores);
  const area = pillars[pillarKey]?.label || "Souvislost";
  const score = answer[1];
  const positiveTitles = ["Silný základ", "Dobrý základ", "Důležitý signál"];
  const reviewTitles = ["Dobrý základ", "Stojí za ověření"];
  const weakTitles = ["Stojí za ověření", "Možné slabé místo"];
  const title =
    score >= 80
      ? positiveTitles[(questionIndex + answerIndex) % positiveTitles.length]
      : score >= 55
        ? reviewTitles[(questionIndex + answerIndex) % reviewTitles.length]
        : score >= 30
          ? weakTitles[(questionIndex + answerIndex) % weakTitles.length]
          : "Možné slabé místo";

  return {
    area,
    title,
    text: answer[2] || question.helper,
  };
}

function advanceFromQuestion() {
  state.feedback = null;
  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion += 1;
  } else {
    state.step = "interest";
  }
  render();
}

function goBack() {
  if (state.feedback) {
    state.feedback = null;
    render();
    return;
  }

  if (state.step === "questions" && state.currentQuestion > 0) {
    state.currentQuestion -= 1;
  } else if (state.step === "questions") {
    state.step = "situation";
  } else if (state.step === "interest") {
    state.step = "questions";
    state.currentQuestion = questions.length - 1;
  }
  render();
}

function calculateResult() {
  const buckets = Object.fromEntries(Object.keys(pillars).map((key) => [key, []]));

  questions.forEach((question, index) => {
    const answerIndex = state.answers[index];
    const selected = question.answers[answerIndex];
    if (!selected) return;

    const value = selected[1];
    if (question.pillar) buckets[question.pillar].push({ value, weight: 1 });
    if (question.scores) {
      Object.entries(question.scores).forEach(([key, weight]) => {
        buckets[key].push({ value, weight });
      });
    }
  });

  const pillarScores = Object.fromEntries(
    Object.entries(buckets).map(([key, entries]) => {
      const totalWeight = entries.reduce((sum, entry) => sum + entry.weight, 0);
      const score = totalWeight
        ? Math.round(entries.reduce((sum, entry) => sum + entry.value * entry.weight, 0) / totalWeight)
        : 0;
      return [key, score];
    }),
  );

  const total = Math.round(
    Object.values(pillarScores).reduce((sum, value) => sum + value, 0) /
      Object.keys(pillarScores).length,
  );
  const weakest = Object.entries(pillarScores).sort((a, b) => a[1] - b[1])[0][0];

  return { total, pillarScores, weakest };
}

function summaryText(result = calculateResult()) {
  const weak = pillars[result.weakest];
  const lines = [
    `Rentgen financí jako celku - orientační výsledek`,
    `Celkové skóre: ${result.total}/100`,
    `Nejslabší oblast: ${weak.label}`,
    `Kontext: ${state.situation || "neuvedeno"}`,
    ...(state.interest ? [`Největší zájem: ${state.interest}`] : []),
    `První krok: ${weak.firstStep}`,
  ];

  return lines.join("\n");
}

function advisorPayload(result = calculateResult()) {
  const weak = pillars[result.weakest];
  const scoreLines = Object.entries(result.pillarScores).map(([key, value]) => {
    return `${pillars[key].label}: ${value}/100`;
  });
  const answerLines = questions.map((question, index) => {
    const selected = question.answers[state.answers[index]];
    const area = pillars[question.pillar || strongestScorePillar(question.scores)]?.label || "Souvislost";
    return `${index + 1}. ${area}: ${selected ? selected[0] : "bez odpovědi"}`;
  });

  const lines = [
    `Podklad z finančního rentgenu pro Daniela`,
    ``,
    `Situace: ${state.situation || "neuvedeno"}`,
    ...(state.interest ? [`Největší zájem: ${state.interest}`] : []),
    ``,
    `Celkové skóre: ${result.total}/100`,
    ...scoreLines,
    ``,
    `Nejslabší oblast: ${weak.label}`,
    `První krok: ${weak.firstStep}`,
    ``,
    `Stručný přehled odpovědí:`,
    ...answerLines,
  ];

  return lines.join("\n");
}

function contactCopyText(message, result = calculateResult()) {
  return [message.trim(), advisorPayload(result)].filter(Boolean).join("\n\n---\n\n");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    helper.style.top = "0";
    document.body.append(helper);
    helper.select();

    try {
      return document.execCommand("copy");
    } finally {
      helper.remove();
    }
  }
}

async function copySummary(result) {
  const copied = await copyText(summaryText(result));
  showToast(copied ? "Shrnutí zkopírováno" : "Shrnutí je připravené ve zprávě");
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);

  window.setTimeout(() => toast.remove(), 2200);
}

function restart() {
  state.step = "intro";
  state.situation = "";
  state.situationIndex = null;
  state.currentQuestion = 0;
  state.answers = [];
  state.interest = "";
  state.contactOpen = false;
  state.insightOpen = false;
  state.feedback = null;
  render();
}

function jumpToDemoResult() {
  state.step = "result";
  state.situationIndex = Math.floor(Math.random() * situations.length);
  state.situation = situations[state.situationIndex];
  state.answers = questions.map((question) => Math.floor(Math.random() * question.answers.length));
  state.interest = interests[Math.floor(Math.random() * interests.length)];
  state.contactOpen = false;
  state.insightOpen = false;
  state.feedback = null;
  render();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "start") {
    state.step = "situation";
    render();
  }
  if (action === "back") goBack();
  if (action === "continue-feedback") advanceFromQuestion();
  if (action === "open-contact") {
    state.contactOpen = true;
    render();
    window.setTimeout(() => document.querySelector(".contact-card")?.scrollIntoView({ behavior: "smooth" }), 80);
  }
  if (action === "toggle-insight") {
    state.insightOpen = !state.insightOpen;
    render();
    if (state.insightOpen) {
      window.setTimeout(() => document.querySelector(".insight-card")?.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }
  if (action === "copy") copySummary();
  if (action === "copy-contact") {
    const result = calculateResult();
    const message = document.querySelector("#message")?.value || summaryText(result);
    copyText(contactCopyText(message, result)).then((copied) => {
      showToast(copied ? "Zpráva zkopírována" : "Zpráva je připravená v poli");
    });
  }
  if (action === "restart") restart();

  if (target.dataset.situation !== undefined) {
    state.situationIndex = Number(target.dataset.situation);
    state.situation = situations[state.situationIndex];
    state.step = "questions";
    render();
  }

  if (target.dataset.answer !== undefined) {
    answerQuestion(Number(target.dataset.answer));
  }

  if (target.dataset.interest !== undefined) {
    state.interest = interests[Number(target.dataset.interest)];
    state.step = "result";
    render();
  }
});

render();
