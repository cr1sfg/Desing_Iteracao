const teams = [
  {
    name: "Flamengo",
    Cidade: "Rio de Janeiro",
    stadium: "Estádio da Gávea",
    capacity: "13.178",
    serie: "A",
  },
  {
    name: "Palmeiras",
    Cidade: "São Paulo",
    stadium: "Allianz Parque",
    capacity: "43.713",
    serie: "A",
  },
  {
    name: "Corinthians",
    badge: "⚪",
    Cidade: "São Paulo",
    stadium: "Arena Corinthians",
    capacity: "49.205",
    serie: "A",
  },
  {
    name: "São Paulo",
    badge: "🔴",
    Cidade: "São Paulo",
    stadium: "Morumbi",
    capacity: "72.039",
    serie: "A",
  },
  {
    name: "Fluminense",
    badge: "🔴",
    Cidade: "Rio de Janeiro",
    stadium: "Estádio de São Januário",
    capacity: "20.822",
    serie: "A",
  },
  {
    name: "Botafogo",
    badge: "⚫",
    Cidade: "Rio de Janeiro",
    stadium: "Estádio Nilton Santos",
    capacity: "27.910",
    serie: "A",
  },
  {
    name: "Vasco",
    badge: "⚫",
    Cidade: "Rio de Janeiro",
    stadium: "Estádio de São Januário",
    capacity: "20.822",
    serie: "A",
  },
  {
    name: "Grêmio",
    badge: "🔵",
    Cidade: "Porto Alegre",
    stadium: "Arena do Grêmio",
    capacity: "60.544",
    serie: "A",
  },
  {
    name: "Internacional",
    badge: "🔴",
    Cidade: "Porto Alegre",
    stadium: "Beira-Rio",
    capacity: "65.645",
    serie: "A",
  },
  {
    name: "Atlético-MG",
    badge: "⚫",
    Cidade: "Belo Horizonte",
    stadium: "Arena MRV",
    capacity: "46.122",
    serie: "A",
  },
  {
    name: "Cruzeiro",
    badge: "🔵",
    Cidade: "Belo Horizonte",
    stadium: "Mineirão",
    capacity: "61.846",
    serie: "A",
  },
  {
    name: "Bahia",
    badge: "🔵",
    Cidade: "Salvador",
    stadium: "Estádio de Pituaçu",
    capacity: "35.800",
    serie: "A",
  },
  {
    name: "Fortaleza",
    badge: "🔵",
    Cidade: "Fortaleza",
    stadium: "Arena Castelão",
    capacity: "63.903",
    serie: "A",
  },
  {
    name: "Athletico-PR",
    badge: "🔴",
    Cidade: "Curitiba",
    stadium: "Estádio Joaquim Américo",
    capacity: "46.477",
    serie: "A",
  },
  {
    name: "Santos",
    badge: "⚪",
    Cidade: "Santos",
    stadium: "Estádio da Vila Belmiro",
    capacity: "16.798",
    serie: "A",
  },
  {
    name: "Red Bull Bragantino",
    badge: "⚪",
    Cidade: "Bragança Paulista",
    stadium: "Nabi Abi Chedid",
    capacity: "35.032",
    serie: "A",
  },
  {
    name: "Juventude",
    badge: "🟢",
    Cidade: "Caxias do Sul",
    stadium: "Estádio Alfeu Chaves",
    capacity: "18.698",
    serie: "A",
  },
  {
    name: "Vitória",
    badge: "🔴",
    Cidade: "Salvador",
    stadium: "Estádio de Pituaçu",
    capacity: "35.800",
    serie: "A",
  },
  {
    name: "Criciúma",
    badge: "🟡",
    Cidade: "Criciúma",
    stadium: "Estádio Heriberto Hülse",
    capacity: "15.698",
    serie: "A",
  },
  {
    name: "Cuiabá",
    badge: "🟢",
    Cidade: "Cuiabá",
    stadium: "Estádio Verdão",
    capacity: "10.500",
    serie: "A",
  },
];

let selectedTeam = null;

function renderTeams(filter = "") {
  const grid = document.getElementById("teams-grid");
  grid.innerHTML = "";
  const filtered = teams.filter((t) =>
    t.name.toLowerCase().includes(filter.toLowerCase()),
  );
  filtered.forEach((team, i) => {
    const card = document.createElement("div");
    card.className =
      "team-card rounded-lg p-4 flex flex-col items-center cursor-pointer";
    card.style.background = "#1B2838";
    card.style.animationDelay = `${0.3 + i * 0.05}s`;
    card.classList.add("animate-in");
    if (selectedTeam === team.name) card.classList.add("selected");
    card.innerHTML = `
          <span class="text-sm font-semibold text-center" style="color: #fff; font-family: 'Oswald', sans-serif;">${team.name}</span>
          <span class="text-xs mt-1" style="color: #667788;">${team.Cidade}</span>
          <span class="text-xs mt-1" style="color: #667788;">${team.stadium}</span>
          <span class="text-xs mt-1" style="color: #8899aa;">Cap: ${team.capacity}</span>
        `;
    card.addEventListener("click", () => selectTeam(team.name));
    grid.appendChild(card);
  });
}

function selectTeam(name) {
  selectedTeam = name;
  document
    .querySelectorAll(".team-card")
    .forEach((c) => c.classList.remove("selected"));
  const cards = document.querySelectorAll(".team-card");
  const idx = teams
    .filter(
      (t) =>
        document.getElementById("search").value === "" ||
        t.name
          .toLowerCase()
          .includes(document.getElementById("search").value.toLowerCase()),
    )
    .findIndex((t) => t.name === name);
  if (idx >= 0 && cards[idx]) cards[idx].classList.add("selected");
  document.getElementById("confirm-section").classList.remove("hidden");
}

document
  .getElementById("search")
  .addEventListener("input", (e) => renderTeams(e.target.value));

document.getElementById("confirm-btn").addEventListener("click", () => {
  const team = teams.find((t) => t.name === selectedTeam);
  if (!team) return;
  document.getElementById("modal-badge").textContent = team.badge;
  document.getElementById("modal-team").textContent = team.name;
  document.getElementById("modal").classList.remove("hidden");
});

renderTeams();
lucide.createIcons();

// Element SDK
const defaultConfig = {
  main_title: "FOOTFUTE BRASIL",
  subtitle: "Escolha seu clube para gerenciar no Brasileirão",
  background_color: "#0D1B2A",
  surface_color: "#1B2838",
  text_color: "#ffffff",
  primary_action_color: "#D7FF00",
  secondary_action_color: "#8899aa",
  font_family: "Oswald",
  font_size: 16,
};

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => {
    const c = { ...defaultConfig, ...config };
    document.body.style.backgroundColor = c.background_color;
    document.getElementById("championshipName").style.color = c.text_color;
    document.getElementById("championshipName").style.fontFamily =
      `${c.font_family}, Oswald, sans-serif`;
    document.getElementById("championshipName").style.fontSize =
      `${c.font_size * 1.875}px`;
    document.getElementById("subtitle").textContent = c.subtitle;
    document.getElementById("subtitle").style.color = c.secondary_action_color;
    document.getElementById("subtitle").style.fontFamily =
      `${c.font_family}, Barlow, sans-serif`;
    document.getElementById("subtitle").style.fontSize = `${c.font_size}px`;
    document.querySelectorAll(".team-card").forEach((card) => {
      card.style.background = c.surface_color;
    });
    document.getElementById("confirm-btn").style.background =
      c.primary_action_color;
    document.getElementById("confirm-btn").style.color = c.background_color;
  },
  mapToCapabilities: (config) => {
    const c = { ...defaultConfig, ...config };
    return {
      recolorables: [
        {
          get: () => c.background_color,
          set: (v) => {
            c.background_color = v;
            window.elementSdk.setConfig({ background_color: v });
          },
        },
        {
          get: () => c.surface_color,
          set: (v) => {
            c.surface_color = v;
            window.elementSdk.setConfig({ surface_color: v });
          },
        },
        {
          get: () => c.text_color,
          set: (v) => {
            c.text_color = v;
            window.elementSdk.setConfig({ text_color: v });
          },
        },
        {
          get: () => c.primary_action_color,
          set: (v) => {
            c.primary_action_color = v;
            window.elementSdk.setConfig({ primary_action_color: v });
          },
        },
        {
          get: () => c.secondary_action_color,
          set: (v) => {
            c.secondary_action_color = v;
            window.elementSdk.setConfig({ secondary_action_color: v });
          },
        },
      ],
      borderables: [],
      fontEditable: {
        get: () => c.font_family,
        set: (v) => {
          c.font_family = v;
          window.elementSdk.setConfig({ font_family: v });
        },
      },
      fontSizeable: {
        get: () => c.font_size,
        set: (v) => {
          c.font_size = v;
          window.elementSdk.setConfig({ font_size: v });
        },
      },
    };
  },
  mapToEditPanelValues: (config) => {
    const c = { ...defaultConfig, ...config };
    return new Map([
      ["main_title", c.main_title],
      ["subtitle", c.subtitle],
    ]);
  },
});
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'a099e54c3c9432a9',t:'MTc4MTExMDQ0Mg=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
