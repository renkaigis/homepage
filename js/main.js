const paperDetails = {
  "second-dimension-outliers": {
    title: "Second-dimension outliers for spatial prediction",
    authors: "Kai Ren, Yongze Song<sup>*</sup>, Qiang Yu<sup>*</sup>",
    venue: "International Journal of Geographical Information Science, 2025",
    image: "image/paper/2025-ijgis-sdo-m.jpg",
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
    authors:
      "Kai Ren, Yongze Song<sup>*</sup>, Linchao Li, Francesco Mancini, Zhuoyao Xiao, Xueyuan Zhang, Rui Qu, Qiang Yu<sup>*</sup>",
    venue: "GIScience & Remote Sensing, 2025",
    image: "image/paper/2025-grs-gozh-wheat-m.jpg",
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
    authors: "Xinyue Yang, Yongze Song<sup>*</sup>, Cheolhee Yoo, Kai Ren, Peng Wu",
    venue: "Sustainable Cities and Society, 2025",
    image: "image/paper/2025-scs-urban-heat-island-footprint-m.jpg",
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
  //   image: "image/paper/2025-ijgis-sdo-m.jpg",
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
    authors:
      "Longshan Yang, Peng Luo<sup>*</sup>, Zehua Zhang, Yongze Song<sup>*</sup>, Kai Ren, Ce Zhang, Joseph Awange, Peter M. Atkinson, Liqiu Meng",
    venue: "International Journal of Applied Earth Observation and Geoinformation, 2024",
    image: "image/paper/2024-jag-aerosol-unmixing-m.jpg",
    abstract:
      "This co-authored paper proposes a spatio-temporal unmixing model with heterogeneity for identifying remotely sensed MODIS aerosols, exemplified by the case of Africa.",
    doi: "https://doi.org/10.1016/j.jag.2024.104068",
    pdf: "#",
    code: "#",
    data: "#",
    readMore: "details/papers/aerosol-unmixing/"
  },
  "oasisation-ecology": {
    title: "Ecological influence of oasisation on peripheral regions",
    authors:
      "Xueyuan Zhang, Yongze Song, Ashraf Dewan, Zecheng Guo, Xiaoyan Cao, Qiang Bie, Yaowen Xie<sup>*</sup>, Xu Ma, Kai Ren, Haoyan Zhang, Guilin Xi, Lei He",
    venue: "International Journal of Applied Earth Observation and Geoinformation, 2024",
    image: "image/paper/2024-jag-oasisation-ecology-m.jpg",
    abstract:
      "This co-authored paper studies the ecological influence of oasisation on peripheral regions using applied Earth observation and geospatial analysis.",
    doi: "https://doi.org/10.1016/j.jag.2024.104004",
    pdf: "#",
    code: "#",
    data: "#",
    readMore: "details/papers/oasisation-ecology/"
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
  "dayou-zuowei": {
    title: "大油作为: Oily Sludge Remediation Expert",
    category: "Environmental Remediation",
    image: "image/project/2022-project-oil-m.jpg",
    link: "https://you.renkaigis.cn/",
    summary:
      "An environmental project focused on oily sludge remediation, combining hot-washing equipment, biosurfactants, microbial agents, and ecological restoration services.",
    methods:
      "Component analysis, tailored remediation planning, hot-washing treatment, biosurfactant-assisted oil recovery, microbial degradation, and project website development.",
    readMore: "#"
  },
  "smart-agriculture": {
    title: "Shaanxi Smart Agricultural Decision-Making System and Big Data Analysis Platform",
    category: "Smart Agriculture",
    image: "image/project/2021-project-smart-agriculture-m.jpg",
    link: "#",
    summary:
      "A big-data platform for dryland agricultural systems and smart orchard decision support, developed under the Sanqin Innovation Team of Smart Agriculture.",
    methods:
      "Agricultural climate data collection, crop growth data collection, GIS analysis, smart agriculture decision support, and field validation.",
    readMore: "#"
  },
  "xinjiang-cotton": {
    title: "Xinjiang Cotton Decision Management Support System",
    category: "Agricultural GIS",
    image: "image/project/2020-project-xinjiang-cotton-m.png",
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
    image: "image/project/2017-project-dianchi-cyanobacteria-m.jpg",
    link: "#",
    summary:
      "A remote sensing monitoring and early-warning project for cyanobacteria bloom drift in Dianchi Lake, integrating FVCOM, ArcGIS Engine, Fortran, C#, and VTK.",
    methods:
      "Remote sensing retrieval, hydrodynamic numerical simulation, particle drift modeling, grid visualization, and GIS software development.",
    readMore: "#"
  },
  "dianchi-chla": {
    title: "Visualization of Chl-a Concentration in Dianchi Lake",
    category: "Lake Water Quality Visualization",
    image: "image/project/2017-project-dianchi-chla-m.jpg",
    link: "#",
    summary:
      "A visualization module for chlorophyll-a concentration in Dianchi Lake, built on discrete lake grids and hydrodynamic conditions.",
    methods:
      "Discrete grid modeling, wind and inflow/outflow condition integration, Chl-a concentration simulation, and VTK-based visual representation.",
    readMore: "#"
  },
  "dianchi-flow": {
    title: "Visualization of Flow Field in Dianchi Lake",
    category: "Lake Flow Field Visualization",
    image: "image/project/2017-project-dianchi-flow-m.jpg",
    link: "#",
    summary:
      "A flow-field visualization module for Dianchi Lake that converts numerical flow results into vector arrow graphics.",
    methods:
      "Hydrodynamic model calculation, vector field rendering, arrow radius and length encoding, and visual representation of flow direction and velocity.",
    readMore: "#"
  },
  "underground-space": {
    title: "3D Modeling and Analysis System of Underground Space",
    category: "Software Copyright",
    image: "image/project/2017-project-underground-space-m.jpg",
    link: "#",
    summary:
      "A system for modeling and analyzing urban underground 3D space, including borehole, vector, and raster data management.",
    methods:
      "3D modeling, mesh generation, borehole query, linear transformation, excavation analysis, model segmentation, and GIS software development.",
    readMore: "#"
  },
  "groundwater-vulnerability": {
    title: "Groundwater Vulnerability Assessment in Pizhou City",
    category: "Environmental GIS",
    image: "image/project/2017-project-pizhou-groundwater-m.jpg",
    link: "#",
    summary:
      "A groundwater vulnerability assessment project for Pizhou City using geological, meteorological, and physical geography data.",
    methods:
      "ArcGIS analysis, C# development, DRASTIC-based fuzzy evaluation, expert weighting, groundwater vulnerability mapping.",
    readMore: "#"
  }
};

const projectDetailsZh = {
  "dayou-zuowei": {
    ...projectDetails["dayou-zuowei"],
    title: "大油作为：含油污泥修复专家",
    category: "生态修复",
    summary: "以团队自主研发产品为核心，面向石油开发企业提供含油污泥生态修复技术服务。",
    methods: "成分分析、修复方案制定、热洗设备、生物表面活性剂、生物菌剂、生态修复与项目网站开发维护。"
  },
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
  },
  "dianchi-chla": {
    ...projectDetails["dianchi-chla"],
    title: "滇池 Chl-a 浓度可视化",
    category: "湖泊水质可视化",
    summary: "基于离散点网格、风速风向和出入湖径流等条件，对滇池 Chl-a 浓度进行模拟和可视化。",
    methods: "离散网格建模、动力条件耦合、Chl-a 浓度计算、VTK 可视化表达。"
  },
  "dianchi-flow": {
    ...projectDetails["dianchi-flow"],
    title: "滇池流场可视化",
    category: "湖泊流场可视化",
    summary: "将滇池流场数值计算结果以矢量箭头方式表达，用于展示网格点水流方向和流速大小。",
    methods: "水动力模型计算、矢量场渲染、箭头半径与长度编码、流向流速可视化。"
  },
  "underground-space": {
    ...projectDetails["underground-space"],
    title: "地下空间三维建模与分析系统",
    category: "软件著作权",
    summary: "面向城市地下三维空间的建模与分析系统，支持钻孔、矢量和栅格数据管理。",
    methods: "三维建模、网格剖分、钻孔查询、线性变换、挖方分析、模型切块与 GIS 软件开发。"
  },
  "groundwater-vulnerability": {
    ...projectDetails["groundwater-vulnerability"],
    title: "邳州市地下水脆弱性评价",
    category: "环境 GIS",
    summary: "基于地质、气象和自然地理数据，对江苏省邳州市地下水脆弱性进行评价与制图。",
    methods: "ArcGIS 分析、C# 开发、DRASTIC 模糊评价、专家赋权与地下水脆弱性制图。"
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

function setupPaperAssetSizing() {
  const applyAssetClass = (image) => {
    const card = image.closest(".paper-asset-card");
    if (!card || !image.naturalWidth || !image.naturalHeight) {
      return;
    }

    card.classList.remove("is-portrait", "is-squareish", "is-narrow-landscape");
    const ratio = image.naturalWidth / image.naturalHeight;

    if (ratio < 0.95) {
      card.classList.add("is-portrait");
    } else if (ratio < 1.35) {
      card.classList.add("is-squareish");
    } else if (ratio < 1.6) {
      card.classList.add("is-narrow-landscape");
    }
  };

  document.querySelectorAll(".paper-asset-image").forEach((image) => {
    if (image.complete) {
      applyAssetClass(image);
    } else {
      image.addEventListener("load", () => applyAssetClass(image), { once: true });
    }
  });
}

function normalizeReversedOrderedLists() {
  document.querySelectorAll("ol[reversed]").forEach((list) => {
    const count = Array.from(list.children).filter((child) => child.tagName === "LI").length;

    if (count > 0) {
      list.start = count;
    }
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
    return "";
  }

  return `<a href="${sitePath(project.link)}" target="_blank" rel="noreferrer">${text.link}</a>`;
}

function optionalProjectReadMore(project, text) {
  if (!project.readMore || project.readMore === "#") {
    return "";
  }

  return `<a class="dialog-primary-link" href="${sitePath(project.readMore)}">${text.readMore}</a>`;
}

function optionalProjectActions(project, text) {
  const actions = `${optionalProjectLink(project, text)}${optionalProjectReadMore(project, text)}`;

  if (!actions) {
    return "";
  }

  return `<div class="dialog-links dialog-actions" aria-label="Project links">${actions}</div>`;
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
          ${optionalProjectActions(project, text)}
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

function setupGalleryLightbox() {
  const dialog = document.querySelector("#gallery-lightbox");
  const image = document.querySelector("#gallery-lightbox-image");
  const caption = document.querySelector("#gallery-lightbox-caption");
  const closeButton = document.querySelector(".gallery-lightbox-close");
  const cards = document.querySelectorAll(".gallery-card[data-gallery-src]");
  const awardLinks = document.querySelectorAll(".award-preview-link[data-preview-src]");

  if (!dialog || !image || !caption || (!cards.length && !awardLinks.length)) {
    return;
  }

  const closeLightbox = () => {
    if (dialog.open && typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  };

  const openLightbox = (card) => {
    const src = card.dataset.gallerySrc;
    const alt = card.dataset.galleryAlt || "";
    const figcaption = card.querySelector("figcaption");

    if (!src) {
      return;
    }

    image.src = sitePath(src);
    image.alt = alt;
    caption.innerHTML = figcaption ? figcaption.innerHTML : "";

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(card);
      }
    });
  });

  awardLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const src = link.dataset.previewSrc;
      const alt = link.dataset.previewAlt || "";
      if (!src) {
        return;
      }

      image.src = sitePath(src);
      image.alt = alt;
      caption.innerHTML = `<span>${link.innerHTML}</span>`;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });
  });

  closeButton?.addEventListener("click", closeLightbox);

  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (clickedOutside) {
      closeLightbox();
    }
  });

  dialog.addEventListener("close", () => {
    image.removeAttribute("src");
    image.removeAttribute("alt");
    caption.innerHTML = "";
  });
}

normalizeReversedOrderedLists();
setCurrentYear();
setupThemeToggle();
setupNavigation();
setupDetailDialog();
setupGalleryLightbox();
setupPaperAssetSizing();
