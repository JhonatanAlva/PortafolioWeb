// =========================
// IDIOMA (PRIMERO SIEMPRE)
// =========================
let currentLang = "es";

// =========================
// DATA PROYECTOS
// =========================
const projects = [
  {
    title: "SaldoGt",
    category: "finance",
    demo: "https://www.misaldo.lat",
    images: [
      "assets/images/projects/misaldo/misaldo1.png",
      "assets/images/projects/misaldo/misaldo2.png",
      "assets/images/projects/misaldo/misaldo3.png",
      "assets/images/projects/misaldo/misaldo4.png",
      "assets/images/projects/misaldo/misaldo5.png",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    description: {
      es: [
        "Sistema de gestión financiera personal.",
        "Control de ingresos, gastos y ahorro con dashboards dinámicos.",
        "Generación de reportes en tiempo real.",
        "Arquitectura basada en API REST.",
      ],
      en: [
        "Personal finance management system.",
        "Income, expenses and savings tracking with dynamic dashboards.",
        "Real-time financial reports.",
        "REST API-based architecture.",
      ],
    },
  },
  {
    title: "ERP Ferretería",
    category: "erp",
    images: [
      "assets/images/projects/erp_ferreteria/ferreteria1.png",
      "assets/images/projects/erp_ferreteria/ferreteria2.png",
      "assets/images/projects/erp_ferreteria/ferreteria3.png",
      "assets/images/projects/erp_ferreteria/ferreteria4.png",
      "assets/images/projects/erp_ferreteria/ferreteria5.png",
      "assets/images/projects/erp_ferreteria/ferreteria6.png",
      "assets/images/projects/erp_ferreteria/ferreteria7.png",
      "assets/images/projects/erp_ferreteria/ferreteria8.png",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "JWT", "Docker"],
    description: {
      es: [
        "Sistema ERP completo para ferretería.",
        "Gestión de inventario, empleados y operaciones.",
        "Integración con múltiples módulos.",
        "Arquitectura escalable.",
      ],
      en: [
        "Complete ERP system for hardware store.",
        "Inventory, employees and operations management.",
        "Multi-module integration.",
        "Scalable architecture.",
      ],
    },
  },
  {
    title: "ERP Purificadora",
    category: "erp",
    images: [
      "assets/images/projects/erp_puficadora/purificadora3.png",
      "assets/images/projects/erp_puficadora/purificadora1.png",
      "assets/images/projects/erp_puficadora/purificadora2.png",
    ],
    tech: ["Node.js", "PostgreSQL", "React", "JWT", "Docker"],
    description: {
      es: [
        "Sistema ERP para purificadora.",
        "Control de operaciones y gestión interna.",
        "Base de datos optimizada.",
      ],
      en: [
        "ERP system for water purification business.",
        "Operations control and internal management.",
        "Optimized database.",
      ],
    },
  },
  {
    title: "Sistema de Tickets (Kanban)",
    category: "otros",
    images: [
      "assets/images/projects/tickets/tickets1.png",
      "assets/images/projects/tickets/tickets2.png",
    ],
    tech: ["React", "Node.js", "Express", "MySQL"],
    description: {
      es: [
        "Sistema de gestión de tickets tipo Kanban.",
        "Organización por estados (Backlog, To Do, In Progress, Done).",
        "Implementación de drag & drop (react-beautiful-dnd).",
        "Filtros avanzados por prioridad, estado y búsqueda.",
        "Backend con autenticación JWT y API REST.",
      ],
      en: [
        "Kanban-style ticket management system.",
        "Task organization by status (Backlog, To Do, In Progress, Done).",
        "Drag & drop implementation (react-beautiful-dnd).",
        "Advanced filters by priority, status and search.",
        "Backend with JWT authentication and REST API.",
      ],
    },
  },
  {
    title: "Sistema de Preguntas y Respuestas",
    category: "otros",
    images: [
      "assets/images/projects/qa/qa1.png",
      "assets/images/projects/qa/qa2.png",
    ],
    tech: ["Node.js", "React", "MySQL"],
    description: {
      es: [
        "Aplicación tipo foro con CRUD completo.",
        "Gestión de usuarios y autenticación.",
        "Almacenamiento y manejo de preguntas y respuestas.",
        "Arquitectura basada en base de datos relacional.",
      ],
      en: [
        "Forum-style application with full CRUD.",
        "User management and authentication.",
        "Storage and handling of questions and answers.",
        "Relational database-based architecture.",
      ],
    },
  },
];

// =========================
// CONTENEDOR
// =========================
const container = document.getElementById("projectsContainer");

// =========================
// RENDER PROYECTOS
// =========================
function renderProjects(list) {
  container.innerHTML = "";

  list.forEach((p) => {
    const desc = p.description[currentLang];

    container.innerHTML += `
      <div class="group bg-gray-800 rounded-2xl overflow-hidden 
      hover:scale-[1.03] transition duration-500 cursor-pointer
      border border-gray-700 hover:border-orange-500/40 flex flex-col">

        <!-- IMAGE -->
        <div class="overflow-hidden">
          <img src="${p.images[0]}" alt="Captura del proyecto ${p.title}"
            class="w-full h-56 object-cover
            group-hover:scale-110 transition duration-700">
        </div>

        <!-- CONTENT -->
        <div class="p-5 flex flex-col flex-1">

          <h3 class="font-bold text-xl mb-3 text-white">
            ${p.title}
          </h3>

          <!-- DESCRIPCIÓN -->
          <ul class="text-sm text-gray-400 space-y-1 mb-4">
            ${desc.map((d) => `<li>• ${d}</li>`).join("")}
          </ul>

          <!-- TECH -->
          <div class="flex flex-wrap gap-2 mt-auto">
            ${p.tech
              .map(
                (t) => `
              <span class="
                bg-gradient-to-r from-orange-500/20 to-orange-500/10
                text-orange-400 border border-orange-500/30
                px-3 py-1 text-xs rounded-full
              ">
                ${t}
              </span>
            `,
              )
              .join("")}
          </div>

                    <!-- BUTTONS -->
          <div class="mt-5 flex gap-3">

            <!-- VER PROYECTO -->
            <button 
              onclick='openGallery(${JSON.stringify(p.images)}, ${JSON.stringify(p.title)})'
              class="bg-orange-500 px-5 py-2 rounded-lg 
              hover:bg-orange-600 transition w-full font-medium"
            >
              ${currentLang === "es" ? "Ver Proyecto" : "View Project"}
            </button>

            <!-- VER DEMO -->
            ${
              p.demo
                ? `
              <a 
                href="${p.demo}" 
                target="_blank"
                class="bg-gray-700 px-5 py-2 rounded-lg 
                hover:bg-gray-600 transition w-full font-medium text-center"
              >
                ${currentLang === "es" ? "Ver Demo" : "Live Demo"}
              </a>
            `
                : ""
            }

          </div>

        </div>
      </div>
    `;
  });
}

// =========================
// INICIALIZAR
// =========================
renderProjects(projects);

// =========================
// FILTRO
// =========================
function filterProjects(type) {
  document.querySelectorAll("#filterButtons button").forEach((btn) => {
    const isActive = btn.dataset.filter === type;
    btn.classList.toggle("bg-orange-500", isActive);
    btn.classList.toggle("bg-gray-700", !isActive);
  });

  if (type === "all") return renderProjects(projects);
  renderProjects(projects.filter((p) => p.category === type));
}

// =========================
// MODAL GALERÍA
// =========================
function openGallery(images, title = "Proyecto") {
  const modal = document.getElementById("modal");

  modal.innerHTML = `
    <div class="relative w-[90%] max-w-6xl bg-[#020617] rounded-2xl p-6 shadow-2xl">

      <button onclick="closeModal()"
        class="absolute top-4 right-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600">
        ✕
      </button>

      <div class="flex items-center gap-4">

        <button onclick="prevSlide()"
          class="text-white text-3xl px-3 hover:text-orange-400">
          ‹
        </button>

        <div class="flex-1">
          <img id="sliderImage"
            src="${images[0]}" alt="${title} - imagen 1 de ${images.length}"
            class="w-full h-[500px] object-contain rounded-xl">
        </div>

        <button onclick="nextSlide()"
          class="text-white text-3xl px-3 hover:text-orange-400">
          ›
        </button>

      </div>

      <div class="flex gap-3 mt-6 justify-center flex-wrap">
        ${images
          .map(
            (img, i) => `
          <img src="${img}" alt="${title} - miniatura ${i + 1}"
            onclick="goToSlide(${i})"
            class="w-24 h-16 object-cover rounded cursor-pointer hover:scale-110 transition">
        `,
          )
          .join("")}
      </div>

    </div>
  `;

  modal.classList.remove("hidden");

  window.currentImages = images;
  window.currentIndex = 0;
  window.currentGalleryTitle = title;

  modal.onclick = (e) => {
    if (e.target.id === "modal") closeModal();
  };
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateSlider();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

function updateSlider() {
  const sliderImage = document.getElementById("sliderImage");
  sliderImage.src = currentImages[currentIndex];
  sliderImage.alt = `${window.currentGalleryTitle} - imagen ${currentIndex + 1} de ${currentImages.length}`;
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

// =========================
// TRADUCCIÓN GENERAL
// =========================
const translations = {
  es: {
    navAbout: "Sobre mí",
    navProjects: "Proyectos",

    aboutTitle: "Sobre mí",
    about1:
      "Estudiante avanzado de Ingeniería en Sistemas con experiencia en desarrollo Full Stack utilizando React, Node.js y MySQL.",
    about2:
      "He desarrollado sistemas completos como ERP empresariales, sistemas de gestión de tickets tipo Kanban y plataformas financieras con dashboards dinámicos y análisis de datos.",
    about3:
      "Experiencia en desarrollo de APIs REST seguras con autenticación JWT, arquitecturas escalables y soluciones orientadas a negocio.",
    about4:
      "También cuento con experiencia en soporte técnico, resolución de problemas y capacitación de usuarios en entornos empresariales.",
    stackTitle: "STACK PRINCIPAL",
    navContact: "Contacto",
    btnProjects: "Ver proyectos",
    btnContact: "Contactar",

    projectsTitle: "Proyectos",
    contactTitle1: "Hablemos",
    contactTitle2: " juntos",
    contactSubtitle:
      "¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades.",
    social: "Redes Sociales",
    available: "● Disponible",
    availableDesc: "Disponible para proyectos freelance y trabajo full-time.",
    formTitle: "Envíame un mensaje",
    sendBtn: "Enviar mensaje",
    formError: "Por favor completa todos los campos antes de enviar.",

    name: "Tu nombre",
    email: "Tu email",
    subject: "Asunto",
    message: "Mensaje",
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",

    aboutTitle: "About Me",
    about1:
      "Advanced Systems Engineering student with Full Stack experience using React, Node.js and MySQL.",
    about2:
      "I have developed complete systems such as enterprise ERPs, Kanban ticket systems, and financial platforms with dynamic dashboards and data analysis.",
    about3:
      "Experience developing secure REST APIs with JWT authentication, scalable architectures, and business-oriented solutions.",
    about4:
      "I also have experience in technical support, troubleshooting, and user training in enterprise environments.",
    stackTitle: "MAIN STACK",
    btnProjects: "View projects",
    btnContact: "Contact",

    projectsTitle: "Projects",

    contactTitle1: "Let's",
    contactTitle2: " talk",
    contactSubtitle:
      "Do you have a project in mind? I'm available for new opportunities.",
    social: "Social Media",
    available: "● Available",
    availableDesc: "Available for freelance projects and full-time positions.",
    formTitle: "Send me a message",
    sendBtn: "Send message",
    formError: "Please fill in all fields before sending.",

    name: "Your name",
    email: "Your email",
    subject: "Subject",
    message: "Message",
  },
};

function toggleLang() {
  currentLang = currentLang === "es" ? "en" : "es";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });

  renderProjects(projects);
}

// =========================
// SCROLL SUAVE
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// =========================
// ENVIAR WHATSAPP
// =========================
function sendWhatsApp() {
  const fields = [
    document.getElementById("formName"),
    document.getElementById("formEmail"),
    document.getElementById("formSubject"),
    document.getElementById("formMessage"),
  ];

  const errorEl = document.getElementById("formError");
  let hasEmpty = false;

  fields.forEach((field) => {
    const isEmpty = field.value.trim() === "";
    field.classList.toggle("border-red-500", isEmpty);
    if (isEmpty) hasEmpty = true;
  });

  if (hasEmpty) {
    errorEl.classList.remove("hidden");
    return;
  }

  errorEl.classList.add("hidden");

  const [name, email, subject, message] = fields.map((f) => f.value.trim());
  const text = `Hola, soy ${name}%0AEmail: ${email}%0AAsunto: ${subject}%0AMensaje: ${message}`;

  window.open(`https://wa.me/50255328760?text=${text}`, "_blank");
}
