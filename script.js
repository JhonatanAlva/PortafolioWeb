const projects = [
  {
    title: "ERP Ferretería",
    description: "Sistema completo de inventario, ventas y control de productos.",
    image: "images/erp-ferreteria.png",
    repo: "https://github.com/JhonatanAlva"
  },
  {
    title: "ERP Purificadora",
    description: "Gestión de pedidos, clientes y distribución de agua.",
    image: "images/erp-purificadora.png",
    repo: "https://github.com/JhonatanAlva"
  },
  {
    title: "MiSaldo",
    description: "Control de gastos personales con gráficas y análisis financiero.",
    image: "images/misaldo.png",
    repo: "https://github.com/JhonatanAlva"
  },
  {
    title: "Sistema de Tickets",
    description: "Gestión de soporte técnico con tablero Kanban.",
    image: "images/tickets.png",
    repo: "https://github.com/JhonatanAlva"
  }
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "JWT"]
  },
  {
    category: "Base de Datos",
    items: ["MySQL", "Sequelize"]
  }
];

const timeline = [
  {
    title: "Desarrollador Full Stack",
    meta: "2024 - Actualidad",
    description: "Desarrollo de sistemas ERP y aplicaciones web completas."
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const skillsGrid = document.getElementById("skillsGrid");
const timelineContainer = document.getElementById("timeline");

function renderProjects() {
  projectsGrid.innerHTML = projects.map(p => `
    <div class="card">
      <img src="${p.image}" style="width:100%; border-radius:10px;">
      <h4>${p.title}</h4>
      <p>${p.description}</p>
      <a href="${p.repo}" target="_blank">Ver código</a>
    </div>
  `).join("");
}

function renderSkills() {
  skillsGrid.innerHTML = skills.map(s => `
    <div>
      <h4>${s.category}</h4>
      <p>${s.items.join(", ")}</p>
    </div>
  `).join("");
}

function renderTimeline() {
  timelineContainer.innerHTML = timeline.map(t => `
    <div>
      <h4>${t.title}</h4>
      <p>${t.meta}</p>
      <p>${t.description}</p>
    </div>
  `).join("");
}

renderProjects();
renderSkills();
renderTimeline();
