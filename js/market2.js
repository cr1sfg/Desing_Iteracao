// Players available for SELL
const playersForSale = [
  {
    id: 1,
    name: "Marchesín",
    age: 35,
    position: "GK",
    price: 2500000,
    pace: 45,
    shooting: 10,
    passing: 45,
    dribbling: 25,
    defense: 35,
    physical: 78,
  },
  {
    id: 2,
    name: "Rafael",
    age: 29,
    position: "LB",
    price: 7600000,
    pace: 79,
    shooting: 44,
    passing: 76,
    dribbling: 73,
    defense: 82,
    physical: 80,
  },
  {
    id: 3,
    name: "Maicon",
    age: 32,
    position: "RB",
    price: 6200000,
    pace: 75,
    shooting: 45,
    passing: 74,
    dribbling: 71,
    defense: 81,
    physical: 85,
  },
  {
    id: 4,
    name: "Pedro Geromel",
    age: 37,
    position: "CB",
    price: 1800000,
    pace: 68,
    shooting: 30,
    passing: 75,
    dribbling: 50,
    defense: 85,
    physical: 82,
  },
];

// Other teams players available for BUY
const availablePlayersForBuy = [
  {
    id: 101,
    name: "Gabriel",
    age: 26,
    position: "CB",
    team: "Arsenal",
    price: 45000000,
    pace: 82,
    shooting: 35,
    passing: 76,
    dribbling: 68,
    defense: 88,
    physical: 86,
  },
  {
    id: 102,
    name: "Vinicius Jr",
    age: 24,
    position: "LW",
    team: "Real Madrid",
    price: 120000000,
    pace: 96,
    shooting: 86,
    passing: 82,
    dribbling: 95,
    defense: 38,
    physical: 81,
  },
  {
    id: 103,
    name: "Rodrygo",
    age: 23,
    position: "RW",
    team: "Real Madrid",
    price: 85000000,
    pace: 92,
    shooting: 88,
    passing: 84,
    dribbling: 91,
    defense: 40,
    physical: 79,
  },
  {
    id: 104,
    name: "Fred",
    age: 30,
    position: "CM",
    team: "Manchester United",
    price: 35000000,
    pace: 78,
    shooting: 62,
    passing: 81,
    dribbling: 76,
    defense: 74,
    physical: 82,
  },
  {
    id: 105,
    name: "Neymar",
    age: 32,
    position: "LW",
    team: "Al-Hilal",
    price: 55000000,
    pace: 87,
    shooting: 84,
    passing: 86,
    dribbling: 96,
    defense: 36,
    physical: 75,
  },
  {
    id: 106,
    name: "Richarlison",
    age: 26,
    position: "FW",
    team: "Tottenham",
    price: 60000000,
    pace: 88,
    shooting: 85,
    passing: 78,
    dribbling: 82,
    defense: 42,
    physical: 84,
  },
  {
    id: 107,
    name: "Lucas Paquetá",
    age: 26,
    position: "CM",
    team: "West Ham",
    price: 42000000,
    pace: 81,
    shooting: 76,
    passing: 83,
    dribbling: 84,
    defense: 68,
    physical: 80,
  },
  {
    id: 108,
    name: "Douglas Luiz",
    age: 24,
    position: "CM",
    team: "Aston Villa",
    price: 65000000,
    pace: 79,
    shooting: 64,
    passing: 85,
    dribbling: 78,
    defense: 77,
    physical: 86,
  },
];

let budget = 150000000;

function renderPlayerCard(player, isSell = true, isBuyDisabled = false) {
  const stats = [
    { label: "PAC", value: player.pace },
    { label: "SHO", value: player.shooting },
    { label: "PAS", value: player.passing },
    { label: "DRB", value: player.dribbling },
    { label: "DEF", value: player.defense },
    { label: "PHY", value: player.physical },
  ];

  const color = isSell ? "#FF4444" : isBuyDisabled ? "#999999" : "#44FF44";
  const borderColor = isSell
    ? "rgba(255,68,68,0.2)"
    : isBuyDisabled
      ? "rgba(153,153,153,0.25)"
      : "rgba(68,255,68,0.2)";
  const buttonClass = isSell
    ? ""
    : `btn-buy${isBuyDisabled ? " disabled" : ""}`;
  const buttonText = isSell ? "" : "Comprar";
  const buttonIcon = isSell ? "arrow-up-right" : "arrow-down-left";
  const buttonHtml = isSell
    ? ""
    : `
            <button class="${buttonClass}" onclick="handleTransfer(${player.id}, false)">
              <i data-lucide="${buttonIcon}" style="width: 14px; height: 14px; display: inline;"></i>
              ${buttonText}
            </button>`;

  return `
        <div class="fade-in p-3 rounded border relative" style="background: rgba(255,255,255,0.02); border-color: ${borderColor}; transition: all 0.2s;">
          <div class="flex items-start gap-3 mb-2">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-display font-semibold text-sm" style="color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${player.name}</span>
                <span class="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded flex-shrink-0" style="background: ${isSell ? "rgba(255,68,68,0.15)" : isBuyDisabled ? "rgba(153,153,153,0.15)" : "rgba(68,255,68,0.15)"}; color: ${color};">${player.position}</span>
              </div>
              <div class="flex items-center gap-2 text-xs" style="color: var(--text-muted);">
                <span class="font-mono">${player.age} ans</span>
              </div>
            </div>
            ${buttonHtml}
          </div>

          <div class="mb-2">
            <div class="text-[10px] font-mono mb-1.5" style="color: var(--text-muted);">STATS</div>
            <div class="grid grid-cols-3 gap-1.5">
              ${stats
                .map(
                  (stat) => `
                <div class="player-stat-bar">
                  <span style="color: var(--text-muted); min-width: 26px;">${stat.label}</span>
                  <div class="stat-fill">
                    <div style="width: ${(stat.value / 100) * 100}%; height: 100%; background: ${color};"></div>
                  </div>
                  <span class="stat-value">${stat.value}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t" style="border-color: rgba(255,255,255,0.05);">
            <span class="text-[10px] font-mono uppercase" style="color: var(--text-muted);">Valor</span>
            <span class="font-display font-semibold text-xs" style="color: ${color};">R$ ${(player.price / 1000000).toFixed(1)}M</span>
          </div>
        </div>
      `;
}

function renderSellList() {
  const list = document.getElementById("sellList");
  list.innerHTML = playersForSale
    .map((p) => renderPlayerCard(p, true))
    .join("");
  if (window.lucide) lucide.createIcons();
}

function renderBuyList() {
  const list = document.getElementById("buyList");
  const buyDisabled = !availablePlayersForBuy.some(
    (player) => budget >= player.price,
  );
  list.innerHTML = availablePlayersForBuy
    .map((p) => renderPlayerCard(p, false, buyDisabled))
    .join("");
  if (window.lucide) lucide.createIcons();
}

function updateBudgetDisplay() {
  document.getElementById("budgetDisplay").textContent =
    `R$ ${(budget / 1000000).toFixed(1)}M`;
}

function updateSummaryText(message) {
  const summary = document.getElementById("summaryText");
  if (summary) summary.textContent = message;
}

function handleTransfer(playerId, isSell) {
  if (isSell) {
    const player = playersForSale.find((p) => p.id === playerId);
    if (player) {
      budget += player.price;
      playersForSale.splice(playersForSale.indexOf(player), 1);
      renderSellList();
      updateBudgetDisplay();
      showNotification(
        `Vendeu ${player.name} por R$ ${(player.price / 1000000).toFixed(1)}M`,
        "#FF4444",
      );
    }
  } else {
    const player = availablePlayersForBuy.find((p) => p.id === playerId);
    if (player) {
      if (budget >= player.price) {
        budget -= player.price;
        availablePlayersForBuy.splice(
          availablePlayersForBuy.indexOf(player),
          1,
        );
        renderBuyList();
        updateBudgetDisplay();
        updateSummaryText(
          `Comprou ${player.name} por R$ ${(player.price / 1000000).toFixed(1)}M`,
        );
        showNotification(
          `Comprou ${player.name} por R$ ${(player.price / 1000000).toFixed(1)}M`,
          "#44FF44",
        );
      } else {
        showNotification(
          `Orçamento insuficiente! Não há budget para comprar jogadores.`,
          "#FFB800",
        );
      }
    }
  }
}

function showNotification(message, color) {
  const container =
    document.getElementById("notificationContainer") || document.body;
  const notif = document.createElement("div");
  notif.className = "notification-item";
  notif.style.cssText = `
        background: ${color}20;
        border: 1px solid ${color};
        color: ${color};
        padding: 10px 12px;
        border-radius: 4px;
        font-family: 'Oswald', sans-serif;
        font-size: 13px;
        animation: fadeInUp 0.3s ease-out;
      `;
  notif.textContent = message;
  container.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

const defaultConfig = {
  sell_title: "Jogadores a venda",
  buy_title: "Compra de Jogadores",
  budget_label: "Orçamento Disponível",
};

function applyConfig(cfg) {
  document.getElementById("sellTitle").textContent =
    cfg.sell_title || defaultConfig.sell_title;
  document.getElementById("buyTitle").textContent =
    cfg.buy_title || defaultConfig.buy_title;
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
        ["sell_title", cfg.sell_title || defaultConfig.sell_title],
        ["buy_title", cfg.buy_title || defaultConfig.buy_title],
        ["budget_label", cfg.budget_label || defaultConfig.budget_label],
      ]),
  });
}

renderSellList();
renderBuyList();
if (window.lucide) lucide.createIcons();
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'a103eefcd063f1ea',t:'MTc4MjIyMjMzMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
