// ============== DATA ==============
const teams = {
  FLA: {
    name: "Flamengo",
    short: "FLA",
    color: "#E31E24",
    stadium: "Maracanã",
  },
  PAL: {
    name: "Palmeiras",
    short: "PAL",
    color: "#006437",
    stadium: "Allianz Parque",
  },
  COR: {
    name: "Corinthians",
    short: "COR",
    color: "#000000",
    stadium: "Neo Química Arena",
  },
  SAO: {
    name: "São Paulo",
    short: "SAO",
    color: "#E30613",
    stadium: "Morumbi",
  },
  SAN: {
    name: "Santos",
    short: "SAN",
    color: "#FFFFFF",
    stadium: "Vila Belmiro",
  },
  VAS: {
    name: "Vasco",
    short: "VAS",
    color: "#000000",
    stadium: "São Januário",
  },
  BOT: {
    name: "Botafogo",
    short: "BOT",
    color: "#000000",
    stadium: "Nilton Santos",
  },
  FLU: {
    name: "Fluminense",
    short: "FLU",
    color: "#8B0000",
    stadium: "Maracanã",
  },
  GRE: {
    name: "Grêmio",
    short: "GRE",
    color: "#0099CC",
    stadium: "Arena do Grêmio",
  },
  INT: {
    name: "Internacional",
    short: "INT",
    color: "#E5001A",
    stadium: "Beira-Rio",
  },
  ATL: {
    name: "Atlético-MG",
    short: "ATL",
    color: "#000000",
    stadium: "Arena MRV",
  },
  CRU: {
    name: "Cruzeiro",
    short: "CRU",
    color: "#003594",
    stadium: "Mineirão",
  },
  BAH: {
    name: "Bahia",
    short: "BAH",
    color: "#005CAB",
    stadium: "Arena Fonte Nova",
  },
  FOR: {
    name: "Fortaleza",
    short: "FOR",
    color: "#002D72",
    stadium: "Castelão",
  },
  ATH: {
    name: "Athletico-PR",
    short: "ATH",
    color: "#E30613",
    stadium: "Arena da Baixada",
  },
  CUI: {
    name: "Cuiabá",
    short: "CUI",
    color: "#006437",
    stadium: "Arena Pantanal",
  },
  JUV: {
    name: "Juventude",
    short: "JUV",
    color: "#006437",
    stadium: "Alfredo Jaconi",
  },
  VIT: { name: "Vitória", short: "VIT", color: "#E30613", stadium: "Barradão" },
  CRI: {
    name: "Criciúma",
    short: "CRI",
    color: "#FFCC00",
    stadium: "Heriberto Hülse",
  },
  BGT: {
    name: "Bragantino",
    short: "BGT",
    color: "#FFFFFF",
    stadium: "Nabi Abi Chedid",
  },
};

const matches = [
  {
    id: 1,
    home: "FLA",
    away: "PAL",
    hs: 2,
    as: 1,
    venue: "Maracanã",
    city: "Rio de Janeiro",
    date: "Sab, 12 Out 2026",
    time: "16:00",
    attendance: "68,245",
    referee: "Anderson Daronco",
    weather: "24°C Limpo",
    goals: [
      { team: "home", player: "Pedro", minute: 23, type: "goal" },
      { team: "away", player: "Endrick", minute: 41, type: "goal" },
      { team: "home", player: "Arrascaeta", minute: 67, type: "goal" },
    ],
    stats: {
      poss: [58, 42],
      shots: [14, 9],
      shotsOn: [7, 3],
      corners: [8, 4],
      fouls: [11, 14],
      yellow: [2, 3],
      red: [0, 1],
      passes: [542, 398],
      passAcc: [87, 79],
      offsides: [2, 4],
      saves: [2, 5],
    },
  },
  {
    id: 2,
    home: "COR",
    away: "SAO",
    hs: 1,
    as: 1,
    venue: "Neo Química Arena",
    city: "São Paulo",
    date: "Sat, 12 Oct 2024",
    time: "18:30",
    attendance: "45,012",
    referee: "Wilton Pereira Sampaio",
    weather: "22°C Nublado",
    goals: [
      { team: "away", player: "Calleri", minute: 12, type: "goal" },
      { team: "home", player: "Yuri Alberto", minute: 78, type: "goal" },
    ],
    stats: {
      poss: [47, 53],
      shots: [11, 13],
      shotsOn: [4, 5],
      corners: [5, 7],
      fouls: [15, 12],
      yellow: [3, 2],
      red: [0, 0],
      passes: [412, 478],
      passAcc: [81, 85],
      offsides: [3, 2],
      saves: [4, 3],
    },
  },
  {
    id: 3,
    home: "BOT",
    away: "FLU",
    hs: 3,
    as: 0,
    venue: "Nilton Santos",
    city: "Rio de Janeiro",
    date: "Sun, 13 Oct 2024",
    time: "16:00",
    attendance: "42,800",
    referee: "Raphael Claus",
    weather: "26°C Enrolarado",
    goals: [
      { team: "home", player: "Savarino", minute: 8, type: "goal" },
      { team: "home", player: "Almada", minute: 34, type: "goal" },
      { team: "home", player: "Tiquinho Soares", minute: 71, type: "goal" },
    ],
    stats: {
      poss: [63, 37],
      shots: [18, 6],
      shotsOn: [9, 2],
      corners: [11, 3],
      fouls: [8, 16],
      yellow: [1, 4],
      red: [0, 0],
      passes: [621, 342],
      passAcc: [89, 76],
      offsides: [1, 3],
      saves: [2, 6],
    },
  },
  {
    id: 4,
    home: "GRE",
    away: "INT",
    hs: 2,
    as: 2,
    venue: "Arena do Grêmio",
    city: "Porto Alegre",
    date: "Sun, 13 Oct 2024",
    time: "18:30",
    attendance: "51,300",
    referee: "Flavio de Souza",
    weather: "18°C Chuvoso",
    goals: [
      { team: "home", player: "Suárez", minute: 19, type: "goal" },
      { team: "away", player: "Wanderson", minute: 45, type: "goal" },
      { team: "away", player: "Valencia", minute: 62, type: "goal" },
      { team: "home", player: "Pavón", minute: 88, type: "goal" },
    ],
    stats: {
      poss: [51, 49],
      shots: [12, 14],
      shotsOn: [5, 6],
      corners: [6, 7],
      fouls: [14, 13],
      yellow: [3, 3],
      red: [1, 0],
      passes: [456, 441],
      passAcc: [83, 82],
      offsides: [2, 3],
      saves: [4, 3],
    },
  },
  {
    id: 5,
    home: "ATL",
    away: "CRU",
    hs: 1,
    as: 0,
    venue: "Arena MRV",
    city: "Belo Horizonte",
    date: "Sun, 13 Oct 2024",
    time: "20:00",
    attendance: "44,100",
    referee: "Bruno Arleu",
    weather: "20°C Limpo",
    goals: [{ team: "home", player: "Hulk", minute: 56, type: "goal" }],
    stats: {
      poss: [54, 46],
      shots: [13, 8],
      shotsOn: [6, 2],
      corners: [7, 4],
      fouls: [12, 15],
      yellow: [2, 3],
      red: [0, 0],
      passes: [489, 412],
      passAcc: [84, 80],
      offsides: [2, 4],
      saves: [2, 5],
    },
  },
  {
    id: 6,
    home: "VAS",
    away: "SAN",
    hs: 0,
    as: 2,
    venue: "São Januário",
    city: "Rio de Janeiro",
    date: "Mon, 14 Oct 2024",
    time: "19:00",
    attendance: "21,400",
    referee: "Paulo Cesar Zanovelli",
    weather: "25°C Limpo",
    goals: [
      { team: "away", player: "Marcos Leonardo", minute: 31, type: "goal" },
      { team: "away", player: "Soteldo", minute: 74, type: "goal" },
    ],
    stats: {
      poss: [48, 52],
      shots: [9, 11],
      shotsOn: [2, 5],
      corners: [4, 6],
      fouls: [13, 11],
      yellow: [2, 1],
      red: [0, 0],
      passes: [398, 445],
      passAcc: [78, 84],
      offsides: [1, 2],
      saves: [3, 2],
    },
  },
  {
    id: 7,
    home: "BAH",
    away: "FOR",
    hs: 1,
    as: 1,
    venue: "Arena Fonte Nova",
    city: "Salvador",
    date: "Mon, 14 Oct 2024",
    time: "21:30",
    attendance: "38,500",
    referee: "Ramon Abatti",
    weather: "28°C Úmido",
    goals: [
      { team: "home", player: "Everaldo", minute: 27, type: "goal" },
      { team: "away", player: "Lucero", minute: 82, type: "pen" },
    ],
    stats: {
      poss: [55, 45],
      shots: [15, 10],
      shotsOn: [6, 4],
      corners: [8, 5],
      fouls: [10, 13],
      yellow: [2, 3],
      red: [0, 0],
      passes: [512, 421],
      passAcc: [86, 81],
      offsides: [2, 1],
      saves: [3, 5],
    },
  },
  {
    id: 8,
    home: "ATH",
    away: "CUI",
    hs: 2,
    as: 0,
    venue: "Arena da Baixada",
    city: "Curitiba",
    date: "Tue, 15 Oct 2024",
    time: "19:00",
    attendance: "28,900",
    referee: "Rodrigo Batista",
    weather: "19°C Nublado",
    goals: [
      { team: "home", player: "Pablo", minute: 15, type: "goal" },
      { team: "home", player: "Canobbio", minute: 63, type: "goal" },
    ],
    stats: {
      poss: [61, 39],
      shots: [16, 7],
      shotsOn: [8, 2],
      corners: [9, 3],
      fouls: [9, 14],
      yellow: [1, 3],
      red: [0, 1],
      passes: [567, 365],
      passAcc: [88, 77],
      offsides: [1, 3],
      saves: [2, 6],
    },
  },
  {
    id: 9,
    home: "JUV",
    away: "VIT",
    hs: 1,
    as: 2,
    venue: "Alfredo Jaconi",
    city: "Caxias do Sul",
    date: "Tue, 15 Oct 2024",
    time: "21:30",
    attendance: "18,200",
    referee: "Savio Pereira",
    weather: "17°C Chuvoso",
    goals: [
      { team: "away", player: "Alerrandro", minute: 22, type: "goal" },
      { team: "home", player: "Gilberto", minute: 54, type: "goal" },
      { team: "away", player: "Janderson", minute: 87, type: "goal" },
    ],
    stats: {
      poss: [44, 56],
      shots: [10, 13],
      shotsOn: [3, 6],
      corners: [5, 8],
      fouls: [14, 11],
      yellow: [3, 2],
      red: [0, 0],
      passes: [389, 467],
      passAcc: [79, 84],
      offsides: [2, 1],
      saves: [4, 2],
    },
  },
  {
    id: 10,
    home: "CRI",
    away: "BGT",
    hs: 0,
    as: 0,
    venue: "Heriberto Hülse",
    city: "Criciúma",
    date: "Wed, 16 Oct 2024",
    time: "20:00",
    attendance: "16,500",
    referee: "Braulio da Silva",
    weather: "16°C Limpo",
    goals: [],
    stats: {
      poss: [50, 50],
      shots: [8, 9],
      shotsOn: [3, 3],
      corners: [4, 5],
      fouls: [12, 13],
      yellow: [2, 2],
      red: [0, 0],
      passes: [423, 431],
      passAcc: [82, 83],
      offsides: [1, 2],
      saves: [3, 3],
    },
  },
];

let selectedMatchId = 1;
let config = {
  championship_name: "Brasileirão",
  matchday_subtitle: "Matchday — 1ª Fase",
  continue_button_text: "Avançar para próxima rodada",
};

// ============== RENDER MATCH LIST ==============
function renderMatchList() {
  const list = document.getElementById("matchList");
  list.innerHTML = matches
    .map((m, idx) => {
      const home = teams[m.home];
      const away = teams[m.away];
      const isSelected = m.id === selectedMatchId;
      const homeWin = m.hs > m.as;
      const awayWin = m.as > m.hs;
      return `
          <div class="match-card ${isSelected ? "selected" : ""} grid grid-cols-12 gap-2 items-center px-5 py-3 cursor-pointer border-b border-white/5"
               data-match-id="${m.id}">
            <div class="col-span-1 font-mono text-xs" style="color: var(--text-muted);">
              ${String(idx + 1).padStart(2, "0")}
            </div>
            <div class="col-span-3 flex items-center gap-2 min-w-0">
              <div class="team-badge" style="background: ${home.color}; color: ${getContrastColor(home.color)};">${home.short}</div>
              <span class="team-name font-display font-medium text-sm truncate ${homeWin ? "font-semibold" : ""}" style="${homeWin ? "color:#fff" : "color:#B8C2CF"}">${home.name}</span>
            </div>
            <div class="col-span-2 flex items-center justify-center gap-2">
              <span class="font-display font-bold text-xl ${homeWin ? "" : "opacity-60"}" style="color: ${homeWin ? "var(--lime)" : "#fff"}">${m.hs}</span>
              <span class="font-mono text-xs" style="color: var(--text-muted);">—</span>
              <span class="font-display font-bold text-xl ${awayWin ? "" : "opacity-60"}" style="color: ${awayWin ? "var(--lime)" : "#fff"}">${m.as}</span>
            </div>
            <div class="col-span-3 flex items-center gap-2 min-w-0">
              <div class="team-badge" style="background: ${away.color}; color: ${getContrastColor(away.color)};">${away.short}</div>
              <span class="team-name font-display font-medium text-sm truncate ${awayWin ? "font-semibold" : ""}" style="${awayWin ? "color:#fff" : "color:#B8C2CF"}">${away.name}</span>
            </div>
            <div class="col-span-2 flex items-center gap-1.5 min-w-0 text-xs" style="color: var(--text-muted);">
              <i data-lucide="map-pin" class="w-3 h-3 flex-shrink-0"></i>
              <span class="truncate font-mono uppercase tracking-wide">${m.city}</span>
            </div>
            <div class="col-span-1 flex justify-end">
              <span class="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5" style="background: var(--lime-dim); color: var(--lime);">FT</span>
            </div>
          </div>
        `;
    })
    .join("");

  // Attach click handlers
  list.querySelectorAll(".match-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedMatchId = parseInt(card.dataset.matchId);
      renderMatchList();
      renderDetail();
    });
  });

  if (window.lucide) lucide.createIcons();
}

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#0D1B2A" : "#fff";
}

// ============== RENDER DETAIL PANEL ==============
function renderDetail() {
  const m = matches.find((x) => x.id === selectedMatchId);
  if (!m) return;
  const home = teams[m.home];
  const away = teams[m.away];
  const homeWin = m.hs > m.as;
  const awayWin = m.as > m.hs;
  const el = document.getElementById("detailContent");

  el.innerHTML = `
        <div class="fade-in">
          <!-- Venue info strip -->
          <div class="diagonal-lines px-5 py-2.5 flex items-center justify-between flex-wrap gap-2 border-b border-white/5">
            <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest" style="color: var(--lime);">
              <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
              <span>${m.venue}</span>
            </div>
            <div class="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest" style="color: var(--text-muted);">
              <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i>${m.date}</span>
              <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i>${m.time}</span>
              <span class="hidden sm:flex items-center gap-1"><i data-lucide="users" class="w-3 h-3"></i>${m.attendance}</span>
            </div>
          </div>

          <!-- Scoreline -->
          <div class="px-5 py-5 border-b border-white/5">
            <div class="flex items-center justify-between gap-3">
              <!-- Home -->
              <div class="flex-1 flex flex-col items-center text-center gap-2 min-w-0">
                <div class="team-badge badge-lg" style="background: ${home.color}; color: ${getContrastColor(home.color)};">
                  ${home.short}
                </div>
                <div class="font-display font-bold text-sm sm:text-base uppercase tracking-wider truncate w-full" style="color:#fff">${home.name}</div>
                <div class="text-[10px] font-mono uppercase tracking-widest" style="color: ${homeWin ? "var(--lime)" : "var(--text-muted)"};">
                  ${homeWin ? "★ Vencedor" : homeWin === awayWin ? "Empatado" : "Fora"}
                </div>
              </div>

              <!-- Score -->
              <div class="flex flex-col items-center gap-1 px-2">

                <div class="flex items-baseline gap-3 sm:gap-4">
                  <span class="big-number" style="color: ${homeWin ? "var(--lime)" : "#fff"}">${m.hs}</span>
                  <span class="font-display text-2xl" style="color: var(--text-muted);">:</span>
                  <span class="big-number" style="color: ${awayWin ? "var(--lime)" : "#fff"}">${m.as}</span>
                </div>
                <div class="text-[9px] font-mono uppercase tracking-[0.25em]" style="color: var(--text-muted);">90'+3</div>
              </div>

              <!-- Away -->
              <div class="flex-1 flex flex-col items-center text-center gap-2 min-w-0">
                <div class="team-badge badge-lg" style="background: ${away.color}; color: ${getContrastColor(away.color)};">
                  ${away.short}
                </div>
                <div class="font-display font-bold text-sm sm:text-base uppercase tracking-wider truncate w-full" style="color:#fff">${away.name}</div>
                <div class="text-[10px] font-mono uppercase tracking-widest" style="color: ${awayWin ? "var(--lime)" : "var(--text-muted)"};">
                  ${awayWin ? "★ Vencedor" : homeWin === awayWin ? "Empatado" : "Em casa"}
                </div>
              </div>
            </div>
          </div>

          <!-- Goal scorers -->
          <div class="px-5 py-4 border-b border-white/5">
            <div class="flex items-center gap-2 mb-3">
              <i data-lucide="target" class="w-3.5 h-3.5" style="color: var(--lime);"></i>
              <h3 class="font-display uppercase tracking-[0.2em] text-xs font-semibold">Autor do gol</h3>
            </div>
            ${
              m.goals.length === 0
                ? `
              <div class="text-xs font-mono uppercase tracking-wider py-3 text-center" style="color: var(--text-muted);">— No Goals —</div>
            `
                : `
              <div class="grid grid-cols-2 gap-x-3 gap-y-1.5">
                <div class="space-y-1.5">
                  ${
                    m.goals
                      .filter((g) => g.team === "home")
                      .map(
                        (g) => `
                    <div class="flex items-center gap-2 text-xs">
                      <span class="font-mono font-semibold w-7 text-right" style="color: var(--lime);">${g.minute}'</span>
                      <i data-lucide="${g.type === "pen" ? "circle-dot" : "futbol"}" class="w-3 h-3 flex-shrink-0" style="color:#fff"></i>
                      <span class="font-display font-medium truncate" style="color:#fff">${g.player}</span>
                    </div>
                  `,
                      )
                      .join("") ||
                    '<div class="text-xs font-mono" style="color: var(--text-muted);">—</div>'
                  }
                </div>
                <div class="space-y-1.5 pl-3 border-l border-white/10">
                  ${
                    m.goals
                      .filter((g) => g.team === "away")
                      .map(
                        (g) => `
                    <div class="flex items-center gap-2 text-xs">
                      <span class="font-mono font-semibold w-7 text-right" style="color: var(--lime);">${g.minute}'</span>
                      <i data-lucide="${g.type === "pen" ? "circle-dot" : "futbol"}" class="w-3 h-3 flex-shrink-0" style="color:#fff"></i>
                      <span class="font-display font-medium truncate" style="color:#fff">${g.player}</span>
                    </div>
                  `,
                      )
                      .join("") ||
                    '<div class="text-xs font-mono" style="color: var(--text-muted);">—</div>'
                  }
                </div>
              </div>
            `
            }

            ${
              m.goals.length > 0
                ? `
              <!-- Timeline -->
              <div class="mt-4 pt-3">
                <div class="relative h-8 timeline-track rounded-sm">
                  ${m.goals
                    .map(
                      (g) => `
                    <div class="minute-marker ${g.team === "away" ? "away" : ""}" style="left: ${(g.minute / 95) * 100}%;" title="${g.player} ${g.minute}'"></div>
                  `,
                    )
                    .join("")}
                  <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between text-[9px] font-mono px-1" style="color: var(--text-muted);">
                    <span>0'</span>
                    <span>45'</span>
                    <span>90'</span>
                  </div>
                </div>
              </div>
            `
                : ""
            }
          </div>

          <!-- Possession -->
          <div class="px-5 py-4 border-b border-white/5">
            <div class="flex items-center gap-2 mb-3">
              <i data-lucide="pie-chart" class="w-3.5 h-3.5" style="color: var(--lime);"></i>
              <h3 class="font-display uppercase tracking-[0.2em] text-xs font-semibold">Posse de bola</h3>
            </div>
            <div class="flex items-center gap-3 mb-1.5">
              <span class="font-display font-bold text-lg" style="color:#fff; width: 40px;">${m.stats.poss[0]}%</span>
              <div class="flex-1 h-3 flex overflow-hidden" style="background: var(--navy);">
                <div style="width: ${m.stats.poss[0]}%; background: var(--lime); transition: width 0.6s;"></div>
                <div style="width: ${m.stats.poss[1]}%; background: #fff; transition: width 0.6s;"></div>
              </div>
              <span class="font-display font-bold text-lg text-right" style="color:#fff; width: 40px;">${m.stats.poss[1]}%</span>
            </div>
            <div class="flex justify-between text-[10px] font-mono uppercase tracking-widest" style="color: var(--text-muted);">
              <span>${home.short}</span>
              <span>${away.short}</span>
            </div>
          </div>

          <!-- Match Stats -->
          <div class="px-5 py-4 border-b border-white/5">
            <div class="flex items-center gap-2 mb-3">
              <i data-lucide="bar-chart-3" class="w-3.5 h-3.5" style="color: var(--lime);"></i>
              <h3 class="font-display uppercase tracking-[0.2em] text-xs font-semibold">Estatísticas da partida</h3>
            </div>
            <div class="space-y-2.5">
              ${statBar("Chutes", m.stats.shots[0], m.stats.shots[1])}
              ${statBar("Chutes a gol", m.stats.shotsOn[0], m.stats.shotsOn[1])}
              ${statBar("Escanteios", m.stats.corners[0], m.stats.corners[1])}
              ${statBar("Faltas", m.stats.fouls[0], m.stats.fouls[1])}
              ${statBar("Passes", m.stats.passes[0], m.stats.passes[1])}
              ${statBar("Precisão de passe %", m.stats.passAcc[0], m.stats.passAcc[1])}
              ${statBar("Laterais", m.stats.offsides[0], m.stats.offsides[1])}
              ${statBar("Defesas", m.stats.saves[0], m.stats.saves[1])}
            </div>
          </div>

          <!-- Cards -->
          <div class="px-5 py-4 border-b border-white/5">
            <div class="flex items-center gap-2 mb-3">
              <i data-lucide="square" class="w-3.5 h-3.5" style="color: var(--lime);"></i>
              <h3 class="font-display uppercase tracking-[0.2em] text-xs font-semibold">Cartões</h3>
            </div>
            <div class="grid grid-cols-3 gap-2 text-center">
              <div></div>
              <div class="flex items-center justify-center gap-2">
                <div class="w-3 h-4" style="background:#FFD700;"></div>
                <span class="text-[10px] font-mono uppercase tracking-wider" style="color: var(--text-muted);">Amarelo</span>
                <div class="w-3 h-4" style="background:#E30613;"></div>
                <span class="text-[10px] font-mono uppercase tracking-wider" style="color: var(--text-muted);">Vermelho</span>
              </div>
              <div></div>

              <div class="font-display font-semibold text-sm text-left" style="color:#fff">${home.short}</div>
              <div class="flex items-center justify-center gap-3">
                <div class="flex items-center gap-1">
                  <div class="w-3 h-4" style="background:#FFD700;"></div>
                  <span class="font-mono font-bold" style="color:#fff">${m.stats.yellow[0]}</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-3 h-4" style="background:#E30613;"></div>
                  <span class="font-mono font-bold" style="color:#fff">${m.stats.red[0]}</span>
                </div>
              </div>
              <div></div>

              <div class="font-display font-semibold text-sm text-left" style="color:#fff">${away.short}</div>
              <div class="flex items-center justify-center gap-3">
                <div class="flex items-center gap-1">
                  <div class="w-3 h-4" style="background:#FFD700;"></div>
                  <span class="font-mono font-bold" style="color:#fff">${m.stats.yellow[1]}</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-3 h-4" style="background:#E30613;"></div>
                  <span class="font-mono font-bold" style="color:#fff">${m.stats.red[1]}</span>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <!-- Match details -->
          <div class="px-5 py-4">
            <div class="flex items-center gap-2 mb-3">
              <i data-lucide="clipboard-list" class="w-3.5 h-3.5" style="color: var(--lime);"></i>
              <h3 class="font-display uppercase tracking-[0.2em] text-xs font-semibold">Informações da partida</h3>
            </div>
            <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <div class="flex justify-between">
                <span class="font-mono uppercase tracking-wider" style="color: var(--text-muted);">Árbitro</span>
                <span class="font-display font-medium" style="color:#fff">${m.referee}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-mono uppercase tracking-wider" style="color: var(--text-muted);">Temperatura</span>
                <span class="font-display font-medium" style="color:#fff">${m.weather}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-mono uppercase tracking-wider" style="color: var(--text-muted);">Público</span>
                <span class="font-display font-medium" style="color:#fff">${m.attendance}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-mono uppercase tracking-wider" style="color: var(--text-muted);">Cidade</span>
                <span class="font-display font-medium" style="color:#fff">${m.city}</span>
              </div>
            </div>
          </div>
        </div>
      `;

  if (window.lucide) lucide.createIcons();
}

function statBar(label, h, a) {
  const total = h + a || 1;
  const hp = (h / total) * 100;
  const ap = (a / total) * 100;
  return `
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="font-display font-semibold text-sm" style="color:#fff">${h}</span>
            <span class="font-mono text-[10px] uppercase tracking-widest" style="color: var(--text-muted);">${label}</span>
            <span class="font-display font-semibold text-sm" style="color:#fff">${a}</span>
          </div>
          <div class="flex h-1.5 overflow-hidden" style="background: var(--navy);">
            <div class="flex justify-end" style="width: 50%;">
              <div style="width: ${hp}%; background: var(--lime); transition: width 0.5s;"></div>
            </div>
            <div class="w-px" style="background: rgba(255,255,255,0.2);"></div>
            <div style="width: 50%;">
              <div style="width: ${ap}%; background: #fff; transition: width 0.5s;"></div>
            </div>
          </div>
        </div>
      `;
}

// ============== CONTINUE BUTTON ==============
document.getElementById("continueBtn").addEventListener("click", () => {
  const btn = document.getElementById("continueBtn");
  btn.style.background = "#B8DC00";
  setTimeout(() => {
    btn.style.background = "";
  }, 200);
  // Could advance to next round - for now just visual feedback
  const text = document.getElementById("continueBtnText");
  const orig = text.textContent;
  text.textContent = "✓ Avançando...";
  setTimeout(() => {
    text.textContent = orig;
  }, 1200);
});

// ============== ELEMENT SDK ==============
const defaultConfig = {
  championship_name: "Brasileirão",
  matchday_subtitle: "Matchday — 1ª Fase",
  continue_button_text: "Avançar para próxima rodada",
};

function applyConfig(cfg) {
  document.getElementById("championshipName").textContent =
    cfg.championship_name || defaultConfig.championship_name;
  document.getElementById("matchdaySubtitle").textContent =
    cfg.matchday_subtitle || defaultConfig.matchday_subtitle;
  document.getElementById("continueBtnText").textContent =
    cfg.continue_button_text || defaultConfig.continue_button_text;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (cfg) => {
      applyConfig(cfg);
    },
    mapToCapabilities: () => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined,
    }),
    mapToEditPanelValues: (cfg) =>
      new Map([
        [
          "championship_name",
          cfg.championship_name || defaultConfig.championship_name,
        ],
        [
          "matchday_subtitle",
          cfg.matchday_subtitle || defaultConfig.matchday_subtitle,
        ],
        [
          "continue_button_text",
          cfg.continue_button_text || defaultConfig.continue_button_text,
        ],
      ]),
  });
}

// ============== INIT ==============
renderMatchList();
renderDetail();
document.getElementById("matchCount").textContent = matches.length;
if (window.lucide) lucide.createIcons();
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'a099ef1cbe9d81d6',t:'MTc4MTExMDg0NA=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
