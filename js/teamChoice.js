const teamPlayers = [
  {
    id: 1,
    name: "Zico",
    Idade: 35,
    Posição: "GK",
    Número: 1,
    Pace: 45,
    Chute: 10,
    Passe: 45,
    Drible: 25,
    Defesa: 35,
    Resistência: 78,
    Mercado: "2.5M",
  },
  {
    id: 2,
    name: "Rodrigues",
    Idade: 30,
    Posição: "CB",
    Número: 4,
    Pace: 76,
    Chute: 35,
    Passe: 78,
    Drible: 55,
    Defesa: 87,
    Resistência: 89,
    Mercado: "8.2M",
  },
  {
    id: 3,
    name: "Lucianinho",
    Idade: 37,
    Posição: "CB",
    Número: 2,
    Pace: 68,
    Chute: 30,
    Passe: 75,
    Drible: 50,
    Defesa: 85,
    Resistência: 82,
    Mercado: "1.8M",
  },
  {
    id: 4,
    name: "Vanderley",
    Idade: 23,
    Posição: "LB",
    Número: 33,
    Pace: 88,
    Chute: 48,
    Passe: 72,
    Drible: 81,
    Defesa: 71,
    Resistência: 78,
    Mercado: "28.5M",
  },
  {
    id: 5,
    name: "Justos",
    Idade: 27,
    Posição: "RB",
    Número: 24,
    Pace: 84,
    Chute: 52,
    Passe: 75,
    Drible: 78,
    Defesa: 78,
    Resistência: 81,
    Mercado: "12.3M",
  },
  {
    id: 6,
    name: "Villa",
    Idade: 24,
    Posição: "CM",
    Número: 5,
    Pace: 78,
    Chute: 65,
    Passe: 80,
    Drible: 76,
    Defesa: 75,
    Resistência: 85,
    Mercado: "18.7M",
  },
  {
    id: 7,
    name: "Zacarias",
    Idade: 28,
    Posição: "CM",
    Número: 20,
    Pace: 76,
    Chute: 62,
    Passe: 82,
    Drible: 74,
    Defesa: 72,
    Resistência: 83,
    Mercado: "15.4M",
  },
  {
    id: 8,
    name: "Thiago",
    Idade: 36,
    Posição: "FW",
    Número: 9,
    Pace: 82,
    Chute: 93,
    Passe: 88,
    Drible: 92,
    Defesa: 38,
    Resistência: 84,
    Mercado: "4.2M",
  },
  {
    id: 9,
    name: "Antonelli",
    Idade: 25,
    Posição: "LW",
    Número: 22,
    Pace: 89,
    Chute: 81,
    Passe: 85,
    Drible: 94,
    Defesa: 45,
    Resistência: 80,
    Mercado: "22.1M",
  },
  {
    id: 10,
    name: "Jorginho",
    Idade: 28,
    Posição: "RW",
    Número: 17,
    Pace: 91,
    Chute: 84,
    Passe: 82,
    Drible: 91,
    Defesa: 42,
    Resistência: 79,
    Mercado: "24.5M",
  },
  {
    id: 11,
    name: "Vico",
    Idade: 30,
    Posição: "CF",
    Número: 10,
    Pace: 85,
    Chute: 88,
    Passe: 79,
    Drible: 86,
    Defesa: 40,
    Resistência: 81,
    Mercado: "16.8M",
  },
  {
    id: 12,
    name: "Chico",
    Idade: 26,
    Posição: "LW",
    Número: 11,
    Pace: 87,
    Chute: 79,
    Passe: 81,
    Drible: 89,
    Defesa: 44,
    Resistência: 78,
    Mercado: "19.3M",
  },
  {
    id: 13,
    name: "Silva",
    Idade: 24,
    Posição: "FW",
    Número: 18,
    Pace: 86,
    Chute: 80,
    Passe: 75,
    Drible: 84,
    Defesa: 38,
    Resistência: 76,
    Mercado: "20.5M",
  },
  {
    id: 14,
    name: "Rafael",
    Idade: 29,
    Posição: "LB",
    Número: 3,
    Pace: 79,
    Chute: 44,
    Passe: 76,
    Drible: 73,
    Defesa: 82,
    Resistência: 80,
    Mercado: "7.6M",
  },
  {
    id: 15,
    name: "Milla",
    Idade: 32,
    Posição: "RB",
    Número: 6,
    Pace: 75,
    Chute: 45,
    Passe: 74,
    Drible: 71,
    Defesa: 81,
    Resistência: 85,
    Mercado: "6.2M",
  },
];

const nextMatch = {
  opponent: "Flamengo",
  date: "Sab, 21 Out 2026",
  time: "16:00",
  venue: "Arena do Grêmio",
  stadium_capacity: "55,000",
};

let selectedPlayers = new Set();
let config = {
  team_name: "Grêmio",
  next_opponent: "Flamengo",
  start_match_button: "Iniciar Partida",
  players_header: "Escalação do Time",
};

function renderPlayers() {
  const list = document.getElementById("playerList");
  list.innerHTML = teamPlayers
    .map((p) => {
      const isSelected = selectedPlayers.has(p.id);
      return `
          <div class="player-card fade-in" style="background: ${isSelected ? "rgba(215,255,0,0.08)" : "transparent"}; border: 1px solid ${isSelected ? "var(--lime)" : "rgba(255,255,255,0.1)"}; border-radius: 4px; overflow: hidden; transition: all 0.2s;">
            <div class="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-black/20 transition-colors" data-player-id="${p.id}">
              <input type="checkbox" class="player-checkbox w-4 h-4 cursor-pointer rounded" ${isSelected ? "checked" : ""} data-player-id="${p.id}" style="accent-color: var(--lime);">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="font-display font-semibold text-mg truncate" style="color: #fff;">#${p.Número} ${p.name}</span>
                  <span class="text-[16px] font-mono uppercase px-2 py-0.5 rounded" style="background: rgba(215,255,0,0.15); color: var(--lime);">${p.Posição}</span>
                </div>
                <div class="flex items-center gap-2 text-[14px]" style="color: var(--text-muted);">
                  <span class="font-mono">Idade: ${p.Idade}</span>
                  <span class="font-mono">Mercado: ${p.Mercado}</span>
                </div>
              </div>
              <i data-lucide="chevron-down" class="w-4 h-4 flex-shrink-0 player-toggle" style="color: var(--text-muted); transition: transform 0.2s;"></i>
            </div>
            <div class="player-stats hidden px-4 pb-3 pt-2 border-t border-white/5 sPace-y-2 bg-black/20">
              <div class="grid grid-cols-2 gap-2 text-sm">
                ${[
                  ["Pace", p.Pace],
                  ["Chute", p.chute],
                  ["Passe", p.Passe],
                  ["Drible", p.Drible],
                  ["Defesa", p.Defesa],
                  ["Resistência", p.Resistência],
                ]
                  .map(
                    ([stat, val]) => `
                  <div class="flex justify-between">
                    <span style="color: var(--text-muted);">${stat}</span>
                    <div class="flex-1 mx-2 h-1.5 bg-black/40 rounded overflow-hidden">
                      <div style="width: ${(val / 100) * 100}%; height: 100%; background: var(--lime);"></div>
                    </div>
                    <span style="color: #fff; width: 20px; text-align: right;">${val}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        `;
    })
    .join("");

  list.querySelectorAll(".player-checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const pid = parseInt(e.target.dataset.playerId);
      if (e.target.checked) {
        if (selectedPlayers.size < 11) {
          selectedPlayers.add(pid);
        } else {
          e.target.checked = false;
        }
      } else {
        selectedPlayers.delete(pid);
      }
      updateSelection();
    });
  });

  list.querySelectorAll(".player-card").forEach((card) => {
    const header = card.querySelector("[data-player-id]");
    const stats = card.querySelector(".player-stats");
    const toggle = card.querySelector(".player-toggle");

    header.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT") return;
      stats.classList.toggle("hidden");
      toggle.style.transform = stats.classList.contains("hidden")
        ? "rotate(0deg)"
        : "rotate(180deg)";
    });
  });

  if (window.lucide) lucide.createIcons();
}

function updateSelection() {
  document.getElementById("selectedCount").textContent = selectedPlayers.size;
  const status = document.getElementById("selectionStatus");
  const btn = document.getElementById("startMatchBtn");

  if (selectedPlayers.size === 11) {
    status.textContent = "✓ Time pronto para partida";
    status.style.color = "var(--lime)";
    btn.disabled = false;
  } else {
    status.textContent = `Selecione 11 jogadores para iniciar a partida (${selectedPlayers.size}/11)`;
    status.style.color = "var(--text-muted)";
    btn.disabled = true;
  }
}

function renderNextMatch() {
  const info = document.getElementById("matchInfo");
  info.innerHTML = `
        <div class="text-center mb-3 pt-10">
            <div class="flex items-center gap-3 mb-3">
                <div class="flex-1">
                <div class="font-display font-semibold text-[24px]" style="color:#fff;">Grêmio</div>
                <div class="text-[16px] font-mono" style="color: var(--text-muted);">Home</div>
            </div>
        </div>
          <div class="font-mono text-xs uppercase tracking-widest" style="color: var(--lime); margin-bottom: 4px;">vs</div>
          <div class="font-display font-semibold text-[24px]" style="color:#fff;">${nextMatch.opponent}</div>
          <div class="text-[16px] font-mono" style="color: var(--text-muted);">Away</div>
        </div> 
        <div class="divider-line my-2"></div>
        <div class="space-y-1.5 text-[14px]">
          <div class="flex items-center gap-2">
            <i data-lucide="calendar" class="w-3 h-3" style="color: var(--lime);"></i>
            <div>
              <span class="font-mono" style="color: var(--text-muted);">Data</span>
              <div class="font-display font-semibold" style="color:#fff;">${nextMatch.date}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="clock" class="w-3 h-3" style="color: var(--lime);"></i>
            <div>
              <span class="font-mono" style="color: var(--text-muted);">Horário</span>
              <div class="font-display font-semibold" style="color:#fff;">${nextMatch.time}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="map-pin" class="w-3 h-3" style="color: var(--lime);"></i>
            <div>
              <span class="font-mono" style="color: var(--text-muted);">Local</span>
              <div class="font-display font-semibold" style="color:#fff;">${nextMatch.venue}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="users" class="w-3 h-3" style="color: var(--lime);"></i>
            <div>
              <span class="font-mono" style="color: var(--text-muted);">Capacidade</span>
              <div class="font-display font-semibold" style="color:#fff;">${nextMatch.stadium_capacity}</div>
            </div>
          </div>
        </div>
        <div class="divider-line my-2"></div>
       
      `;

  if (window.lucide) lucide.createIcons();
}

document.getElementById("startMatchBtn").addEventListener("click", () => {
  if (selectedPlayers.size === 11) {
    const btn = document.getElementById("startMatchBtn");
    btn.style.background = "#B8DC00";
    setTimeout(() => {
      btn.style.background = "";
    }, 200);

    const text = document.getElementById("startMatchBtnText");
    const orig = text.textContent;
    text.textContent = "✓ Iniciando...";

    setTimeout(() => {
      text.textContent = orig;
      window.location.href = "matchaday.html";
    }, 1000);


  }
});

const defaultConfig = {
  team_name: "Grêmio",
  next_opponent: "Flamengo",
  start_match_button: "Iniciar Partida",
  players_header: "Escalação do Time",
};

function applyConfig(cfg) {
  document.getElementById("teamName").textContent =
    cfg.team_name || defaultConfig.team_name;
  document.getElementById("playersHeader").textContent =
    cfg.players_header || defaultConfig.players_header;
  document.getElementById("startMatchBtnText").textContent =
    cfg.start_match_button || defaultConfig.start_match_button;
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
        ["team_name", cfg.team_name || defaultConfig.team_name],
        ["next_opponent", cfg.next_opponent || defaultConfig.next_opponent],
        [
          "start_match_button",
          cfg.start_match_button || defaultConfig.start_match_button,
        ],
        ["players_header", cfg.players_header || defaultConfig.players_header],
      ]),
  });
}

renderPlayers();
renderNextMatch();
updateSelection();
if (window.lucide) lucide.createIcons();
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'a099ef1d2bad93b3',t:'MTc4MTExMDg0NA=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.Posição = "absolute";
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
