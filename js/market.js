const defaultConfig = {
  background_color: "#0D1B2A",
  surface_color: "#102234",
  text_color: "#F4F7F5",
  primary_action_color: "#d7ff00",
  secondary_action_color: "#7C8EA3",
  font_family: "Sora",
  font_size: 16,
  screen_title: "Central de Negociações",
  screen_subtitle:
    "Administre vendas, avalie reforços e monte o próximo elenco campeão do Grêmio.",
  wallet_label: "Carteira disponível",
  sell_section_title: "Jogadores que você está vendendo",
  buy_section_title: "Mercado de jogadores",
  next_button_text: "Seguir para próxima página",
};

let wallet = 42500000;
let boughtPlayers = [];

const formatMoney = (value) => `€ ${Number(value).toLocaleString("pt-BR")}`;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function updateWallet() {
  document.getElementById("walletAmount").textContent = formatMoney(wallet);
  const percentage = Math.max(6, Math.min(100, (wallet / 42500000) * 72));
  document.getElementById("budgetBar").style.width = `${percentage}%`;

  const summary = document.getElementById("summaryText");
  if (boughtPlayers.length === 0) {
    summary.textContent =
      "Nenhuma compra concluída ainda. Escolha reforços dentro do orçamento.";
  } else {
    summary.textContent = `Compras concluídas: ${boughtPlayers.join(", ")}. Saldo restante: ${formatMoney(wallet)}.`;
  }

  document.querySelectorAll(".buy-btn").forEach((button) => {
    const price = Number(button.dataset.price);
    if (price > wallet) {
      button.disabled = true;
      button.style.opacity = "0.45";
      button.style.cursor = "not-allowed";
      button.innerHTML =
        '<i data-lucide="lock" aria-hidden="true"></i> Sem orçamento';
    }
  });

  lucide.createIcons();
}

function setActiveFilter(activeButton) {
  [
    document.getElementById("filterAll"),
    document.getElementById("filterAttack"),
    document.getElementById("filterDefense"),
  ].forEach((button) => {
    button.style.background = "transparent";
    button.style.color = "#F4F7F5";
  });
  activeButton.style.background = "#d7ff00";
  activeButton.style.color = "#0D1B2A";
}

function filterMarket(role) {
  document.querySelectorAll(".market-card").forEach((card) => {
    const shouldShow = role === "all" || card.dataset.role === role;
    card.style.display = shouldShow ? "block" : "none";
  });
}

document.querySelectorAll(".buy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const price = Number(button.dataset.price);
    const player = button.dataset.player;

    if (price > wallet) {
      showToast("Orçamento insuficiente para esta contratação.");
      return;
    }

    wallet -= price;
    boughtPlayers.push(player);
    button.disabled = true;
    button.style.opacity = "0.55";
    button.style.cursor = "not-allowed";
    button.innerHTML =
      '<i data-lucide="check" aria-hidden="true"></i> Contratado';
    updateWallet();
    showToast(`${player} contratado pelo Grêmio!`);
  });
});

document.querySelectorAll("[data-action='sale']").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Oferta marcada para revisão pelo administrador.");
  });
});

document.getElementById("filterAll").addEventListener("click", (event) => {
  setActiveFilter(event.currentTarget);
  filterMarket("all");
});

document.getElementById("filterAttack").addEventListener("click", (event) => {
  setActiveFilter(event.currentTarget);
  filterMarket("attack");
});

document.getElementById("filterDefense").addEventListener("click", (event) => {
  setActiveFilter(event.currentTarget);
  filterMarket("defense");
});

document.getElementById("nextButton").addEventListener("click", () => {
  showToast(
    "Próxima página está sendo preparada",
  );
});

function applyConfig(config) {
  const backgroundColor =
    config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryActionColor =
    config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryActionColor =
    config.secondary_action_color || defaultConfig.secondary_action_color;
  const fontFamily = config.font_family || defaultConfig.font_family;
  const fontSize = config.font_size || defaultConfig.font_size;

  document.getElementById("app").style.backgroundColor = backgroundColor;
  document.getElementById("app").style.color = textColor;
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
  document.body.style.fontFamily = `${fontFamily}, "Trebuchet MS", sans-serif`;

  document.getElementById("screenTitle").textContent =
    config.screen_title || defaultConfig.screen_title;
  document.getElementById("screenSubtitle").textContent =
    config.screen_subtitle || defaultConfig.screen_subtitle;
  document.getElementById("walletLabel").textContent =
    config.wallet_label || defaultConfig.wallet_label;
  document.getElementById("sellTitle").textContent =
    config.sell_section_title || defaultConfig.sell_section_title;
  document.getElementById("buyTitle").textContent =
    config.buy_section_title || defaultConfig.buy_section_title;
  document.getElementById("nextButtonText").textContent =
    config.next_button_text || defaultConfig.next_button_text;

  document.querySelectorAll(".glass-card").forEach((card) => {
    card.style.backgroundColor = `${surfaceColor}d1`;
  });

  document
    .querySelectorAll("h1, h2, h3, p, span, button, div")
    .forEach((element) => {
      element.style.fontFamily = `${fontFamily}, "Trebuchet MS", sans-serif`;
    });

  document.getElementById("screenTitle").style.fontSize =
    `${fontSize * 2.55}px`;
  document.getElementById("screenSubtitle").style.fontSize = `${fontSize}px`;
  document
    .querySelectorAll("h2")
    .forEach((element) => (element.style.fontSize = `${fontSize * 1.45}px`));
  document
    .querySelectorAll("h3")
    .forEach((element) => (element.style.fontSize = `${fontSize * 1.05}px`));
  document.querySelectorAll("p, button, span, div").forEach((element) => {
    if (!element.querySelector("h1, h2, h3")) {
      element.style.fontSize = "";
    }
  });

  document.querySelectorAll('[style*="#d7ff00"]').forEach((element) => {
    const current = element.getAttribute("style");
    element.setAttribute(
      "style",
      current
        .replaceAll("#d7ff00", primaryActionColor)
        .replaceAll("215,255,0", "215,255,0"),
    );
  });

  document
    .querySelectorAll(".buy-btn, #nextButton, #filterAll")
    .forEach((button) => {
      if (!button.disabled) {
        button.style.backgroundColor = primaryActionColor;
        button.style.color = backgroundColor;
      }
    });

  document.getElementById("walletAmount").style.color = primaryActionColor;
  document.getElementById("budgetBar").style.backgroundColor =
    primaryActionColor;
  document
    .querySelectorAll(".rounded-full, .rounded-2xl")
    .forEach((element) => {
      if (
        element.textContent &&
        (element.textContent.includes("ativos") ||
          element.textContent.includes("OVR"))
      ) {
        element.style.borderColor = secondaryActionColor;
      }
    });
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      applyConfig(config);
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) =>
            window.elementSdk.setConfig({ background_color: value }),
        },
        {
          get: () => config.surface_color || defaultConfig.surface_color,
          set: (value) => window.elementSdk.setConfig({ surface_color: value }),
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => window.elementSdk.setConfig({ text_color: value }),
        },
        {
          get: () =>
            config.primary_action_color || defaultConfig.primary_action_color,
          set: (value) =>
            window.elementSdk.setConfig({ primary_action_color: value }),
        },
        {
          get: () =>
            config.secondary_action_color ||
            defaultConfig.secondary_action_color,
          set: (value) =>
            window.elementSdk.setConfig({ secondary_action_color: value }),
        },
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => window.elementSdk.setConfig({ font_family: value }),
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => window.elementSdk.setConfig({ font_size: value }),
      },
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        ["screen_title", config.screen_title || defaultConfig.screen_title],
        [
          "screen_subtitle",
          config.screen_subtitle || defaultConfig.screen_subtitle,
        ],
        ["wallet_label", config.wallet_label || defaultConfig.wallet_label],
        [
          "sell_section_title",
          config.sell_section_title || defaultConfig.sell_section_title,
        ],
        [
          "buy_section_title",
          config.buy_section_title || defaultConfig.buy_section_title,
        ],
        [
          "next_button_text",
          config.next_button_text || defaultConfig.next_button_text,
        ],
      ]),
  });
}

updateWallet();
lucide.createIcons();
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'a0fea738611282e9',t:'MTc4MjE2Njk2Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
