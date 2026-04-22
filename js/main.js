const paperDetails = {
  "second-dimension-outliers": {
    title: "Second-dimension outliers for spatial prediction",
    authors: "Kai Ren, Yongze Song, Qiang Yu",
    venue: "International Journal of Geographical Information Science, 2025",
    image: "image/paper-urban-change.svg",
    abstract:
      "This paper develops the concept of second-dimension outliers for spatial prediction, using spatial outlier patterns to improve the interpretation of heterogeneity and prediction behavior in geographic data.",
    doi: "https://doi.org/10.1080/13658816.2025.2580414",
    pdf: "#",
    code: "#",
    data: "#",
    readMore: "details/papers/second-dimension-outliers/"
  },
  "wheat-production": {
    title:
      "Identifying climate and environmental determinants of spatial disparities in wheat production using a geospatial machine learning model",
    authors: "Kai Ren, Yongze Song, L. Li, F. Mancini, Z. Xiao, X. Zhang, R. Qu, Qiang Yu",
    venue: "GIScience & Remote Sensing, 2025",
    image: "image/paper-geoai.svg",
    abstract:
      "This study uses a geospatial machine learning model to identify climate and environmental determinants of spatial disparities in wheat production, with evidence from Australian agricultural systems.",
    doi: "https://doi.org/10.1080/15481603.2025.2533487",
    pdf: "#",
    code: "#",
    data: "#",
    readMore: "details/papers/wheat-production-disparities/"
  },
  "urban-heat-island": {
    title: "Irregular anisotropy in surface urban heat island footprint",
    authors: "X. Yang, Yongze Song, C. Yoo, Kai Ren, P. Wu",
    venue: "Sustainable Cities and Society, 2025",
    image: "image/paper-resilience.svg",
    abstract:
      "This co-authored paper examines irregular anisotropy in surface urban heat island footprints, contributing spatial evidence for urban climate and environmental analysis.",
    doi: "https://doi.org/10.1016/j.scs.2025.106779",
    pdf: "#",
    code: "#",
    data: "#",
    readMore: "details/papers/urban-heat-island-footprint/"
  },
  // Confidential until accepted:
  // "spatial-outliers-heterogeneity": {
  //   title: "Spatial outliers as a pattern measure for explaining heterogeneity",
  //   authors: "Kai Ren, Yongze Song, Qiang Yu",
  //   venue: "Under Review",
  //   image: "image/paper-urban-change.svg",
  //   abstract:
  //     "This manuscript extends spatial outlier thinking toward a pattern measure for explaining spatial heterogeneity.",
  //   doi: "#",
  //   pdf: "#",
  //   code: "#",
  //   data: "#",
  //   readMore: "publications/#spatial-outliers-heterogeneity"
  // },
  "aerosol-unmixing": {
    title:
      "A spatio-temporal unmixing with heterogeneity model for the identification of remotely sensed MODIS aerosols",
    authors: "L. Yang, P. Luo, Z. Zhang, Yongze Song, Kai Ren, C. Zhang, J. Awange, P. M. Atkinson, L. Meng",
    venue: "International Journal of Applied Earth Observation and Geoinformation, 2024",
    image: "image/paper-resilience.svg",
    abstract:
      "This co-authored paper proposes a spatio-temporal unmixing model with heterogeneity for identifying remotely sensed MODIS aerosols, exemplified by the case of Africa.",
    doi: "https://doi.org/10.1016/j.jag.2024.104068",
    pdf: "#",
    code: "#",
    data: "#",
    readMore: "publications/#aerosol-unmixing"
  },
  "oasisation-ecology": {
    title: "Ecological influence of oasisation on peripheral regions",
    authors: "X. Zhang, Yongze Song, A. Dewan, Z. Guo, X. Cao, Q. Bie, Y. Xie, X. Ma, Kai Ren, H. Zhang, G. Xi",
    venue: "International Journal of Applied Earth Observation and Geoinformation, 2024",
    image: "image/paper-geoai.svg",
    abstract:
      "This co-authored paper studies the ecological influence of oasisation on peripheral regions using applied Earth observation and geospatial analysis.",
    doi: "https://doi.org/10.1016/j.jag.2024.104004",
    pdf: "#",
    code: "#",
    data: "#",
    readMore: "publications/#oasisation-ecology"
  }
};

const paperDetailsZh = {
  "second-dimension-outliers": {
    ...paperDetails["second-dimension-outliers"],
    abstract:
      "本文提出 second-dimension outliers 的概念，用空间异常模式辅助解释地理数据中的异质性和空间预测行为。",
    readMore: "details/papers/second-dimension-outliers/"
  },
  "wheat-production": {
    ...paperDetails["wheat-production"],
    abstract:
      "本文使用地理空间机器学习模型识别影响小麦产量空间差异的气候与环境决定因素，以澳大利亚农业系统为案例。",
    readMore: "details/papers/wheat-production-disparities/"
  },
  "urban-heat-island": {
    ...paperDetails["urban-heat-island"],
    abstract:
      "该合作论文研究地表城市热岛足迹中的不规则各向异性，为城市气候与环境分析提供空间证据。",
    readMore: "details/papers/urban-heat-island-footprint/"
  }
};

const projectDetails = {
  "smart-agriculture": {
    title: "Shaanxi Smart Agricultural Decision-Making System and Big Data Analysis Platform",
    category: "Smart Agriculture",
    image: "image/project-urban.svg",
    link: "#",
    summary:
      "A big-data platform for dryland agricultural systems and smart orchard decision support, developed under the Sanqin Innovation Team of Smart Agriculture.",
    methods:
      "Agricultural climate data collection, crop growth data collection, GIS analysis, smart agriculture decision support, and field validation.",
    readMore: "details/projects/smart-agriculture/"
  },
  "xinjiang-cotton": {
    title: "Xinjiang Cotton Decision Management Support System",
    category: "Agricultural GIS",
    image: "image/project-geoai.svg",
    link: "#",
    summary:
      "A cotton production decision management system for plot management, field tasks, crop growth, pest and disease warning, and agronomic service support.",
    methods:
      "GIS platform design, user and plot management, decision-support workflow design, crop monitoring, and system validation.",
    readMore: "details/projects/xinjiang-cotton/"
  },
  "dianchi-cyanobacteria": {
    title: "Remote Sensing Monitoring and Early Warning System of Cyanobacteria Bloom in Dianchi Lake",
    category: "Lake Hydrodynamic Modeling",
    image: "image/project-earth.svg",
    link: "#",
    summary:
      "A remote sensing monitoring and early-warning project for cyanobacteria bloom drift in Dianchi Lake, integrating FVCOM, ArcGIS Engine, Fortran, C#, and VTK.",
    methods:
      "Remote sensing retrieval, hydrodynamic numerical simulation, particle drift modeling, grid visualization, and GIS software development.",
    readMore: "details/projects/dianchi-cyanobacteria/"
  },
  "groundwater-vulnerability": {
    title: "Groundwater Vulnerability Assessment in Pizhou City",
    category: "Environmental GIS",
    image: "image/project-urban.svg",
    link: "#",
    summary:
      "A groundwater vulnerability assessment project for Pizhou City using geological, meteorological, and physical geography data.",
    methods:
      "ArcGIS analysis, C# development, DRASTIC-based fuzzy evaluation, expert weighting, groundwater vulnerability mapping.",
    readMore: "contact/"
  }
};

const projectDetailsZh = {
  "smart-agriculture": {
    ...projectDetails["smart-agriculture"],
    category: "智慧农业",
    summary: "面向旱地农业系统和智慧果园决策支持的大数据平台，属于智慧农业“三秦创新团队”相关工作。",
    methods: "农业气候数据采集、作物生长数据采集、GIS 分析、智慧农业决策支持与田间验证。"
  },
  "xinjiang-cotton": {
    ...projectDetails["xinjiang-cotton"],
    category: "农业 GIS",
    summary: "面向棉花生产的决策管理系统，支持地块管理、田间任务、作物长势、病虫害预警与农技服务。",
    methods: "GIS 平台设计、用户与地块管理、决策支持流程设计、作物监测与系统验证。"
  },
  "dianchi-cyanobacteria": {
    ...projectDetails["dianchi-cyanobacteria"],
    category: "湖泊水动力模拟",
    summary: "面向滇池蓝藻水华漂移的遥感监测与预警系统，融合 FVCOM、ArcGIS Engine、Fortran、C# 与 VTK。",
    methods: "遥感反演、水动力数值模拟、质点漂移建模、栅格可视化与 GIS 软件开发。"
  }
};

const mainScript = document.currentScript || document.querySelector('script[src$="js/main.js"]');
const siteBasePath = (mainScript?.getAttribute("src") || "js/main.js").replace(
  /js\/main\.js(?:[?#].*)?$/,
  ""
);

function sitePath(path) {
  if (!path || /^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(path)) {
    return path;
  }

  return `${siteBasePath}${path}`;
}

function isChinesePage() {
  return document.documentElement.lang.toLowerCase().startsWith("zh");
}

function labels() {
  return isChinesePage()
    ? {
        authors: "作者",
        venue: "期刊",
        abstract: "摘要",
        methods: "方法",
        doi: "DOI",
        pdf: "PDF",
        code: "代码",
        data: "数据",
        link: "链接",
        readMore: "阅读详情"
      }
    : {
        authors: "Authors",
        venue: "Journal",
        abstract: "Abstract",
        methods: "Methods",
        doi: "DOI",
        pdf: "PDF",
        code: "Code",
        data: "Data",
        link: "Link",
        readMore: "Read more"
      };
}

function getStoredTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Ignore storage errors in private or restricted browsing modes.
  }
}

function prefersDarkTheme() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function activeTheme() {
  const selectedTheme = document.documentElement.dataset.theme;
  return selectedTheme || (prefersDarkTheme() ? "dark" : "light");
}

function updateThemeButtons() {
  const isDark = activeTheme() === "dark";
  const label = isChinesePage() ? (isDark ? "浅色" : "夜间") : isDark ? "Light" : "Dark";
  const title = isChinesePage()
    ? isDark
      ? "切换浅色模式"
      : "切换夜间模式"
    : isDark
      ? "Switch to light mode"
      : "Switch to dark mode";

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    const icon = button.querySelector("i");
    const text = button.querySelector(".theme-toggle-label");

    button.setAttribute("aria-pressed", isDark.toString());
    button.setAttribute("aria-label", title);
    button.setAttribute("title", title);

    if (icon) {
      icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    if (text) {
      text.textContent = label;
    }
  });
}

function setupThemeToggle() {
  const storedTheme = getStoredTheme();

  if (storedTheme === "dark" || storedTheme === "light") {
    document.documentElement.dataset.theme = storedTheme;
  }

  updateThemeButtons();

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = activeTheme() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      storeTheme(nextTheme);
      updateThemeButtons();
    });
  });

  const themeMedia = window.matchMedia?.("(prefers-color-scheme: dark)");
  themeMedia?.addEventListener?.("change", () => {
    if (!getStoredTheme()) {
      updateThemeButtons();
    }
  });
}

function setCurrentYear() {
  document.querySelectorAll("#current-year").forEach((node) => {
    node.textContent = new Date().getFullYear().toString();
  });
}

function setupNavigation() {
  const button = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#site-menu");

  if (!button || !menu) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen.toString());
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function openDialog(dialog, titleNode, contentNode, title, html) {
  titleNode.textContent = title;
  contentNode.innerHTML = html;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function optionalPaperLinks(paper, text) {
  const doiLink =
    paper.doi && paper.doi !== "#"
      ? `<a href="${paper.doi}" target="_blank" rel="noreferrer">${text.doi}</a>`
      : "";

  const supportingLinks = [
    ["pdf", text.pdf],
    ["code", text.code],
    ["data", text.data]
  ]
    .filter(([key]) => paper[key] && paper[key] !== "#")
    .map(([key, label]) => `<a href="${sitePath(paper[key])}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");

  return `${doiLink}${supportingLinks}`;
}

function optionalProjectLink(project, text) {
  if (!project.link || project.link === "#") {
    return `<span class="dialog-disabled-link" aria-disabled="true">${text.link}</span>`;
  }

  return `<a href="${sitePath(project.link)}" target="_blank" rel="noreferrer">${text.link}</a>`;
}

function setupDetailDialog() {
  const dialog = document.querySelector("#paper-dialog");
  const title = document.querySelector("#paper-dialog-title");
  const content = document.querySelector("#paper-dialog-content");
  const closeButton = document.querySelector(".dialog-close");

  if (!dialog || !title || !content) {
    return;
  }

  const text = labels();
  const papers = isChinesePage() ? { ...paperDetails, ...paperDetailsZh } : paperDetails;
  const projects = isChinesePage() ? { ...projectDetails, ...projectDetailsZh } : projectDetails;

  document.querySelectorAll("[data-paper]").forEach((card) => {
    card.addEventListener("click", () => {
      const paper = papers[card.dataset.paper];

      if (!paper) {
        return;
      }

      openDialog(
        dialog,
        title,
        content,
        paper.title,
        `
          <img class="dialog-hero-image paper-dialog-image" src="${sitePath(paper.image)}" alt="" />
          <div class="dialog-meta">
            <p><strong>${text.authors}:</strong> ${paper.authors}</p>
            <p><strong>${text.venue}:</strong> ${paper.venue}</p>
          </div>
          <p><strong>${text.abstract}:</strong> ${paper.abstract}</p>
          <div class="dialog-links dialog-actions" aria-label="Publication links">
            ${optionalPaperLinks(paper, text)}
            <a class="dialog-primary-link" href="${sitePath(paper.readMore)}">${text.readMore}</a>
          </div>
        `
      );
    });
  });

  document.querySelectorAll("[data-project]").forEach((card) => {
    card.addEventListener("click", () => {
      const project = projects[card.dataset.project];

      if (!project) {
        return;
      }

      openDialog(
        dialog,
        title,
        content,
        project.title,
        `
          <img class="dialog-hero-image project-dialog-image" src="${sitePath(project.image)}" alt="" />
          <p class="card-meta">${project.category}</p>
          <p>${project.summary}</p>
          <p><strong>${text.methods}:</strong> ${project.methods}</p>
          <div class="dialog-links dialog-actions" aria-label="Project links">
            ${optionalProjectLink(project, text)}
            <a class="dialog-primary-link" href="${sitePath(project.readMore)}">${text.readMore}</a>
          </div>
        `
      );
    });
  });

  closeButton?.addEventListener("click", () => {
    if (dialog.open && typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  });

  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (clickedOutside) {
      if (dialog.open && typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    }
  });
}

setCurrentYear();
setupThemeToggle();
setupNavigation();
setupDetailDialog();
