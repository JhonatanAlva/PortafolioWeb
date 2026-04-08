const projects = [
  {
    title: 'Analytics Dashboard SaaS',
    description:
      'Panel de métricas en tiempo real para equipos de producto con filtros avanzados y reportes exportables.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    demo: 'https://example.com/demo-analytics',
    repo: 'https://github.com/example/analytics-dashboard'
  },
  {
    title: 'Plataforma eCommerce',
    description:
      'Frontend optimizado para conversión con checkout simplificado, búsqueda inteligente y CMS headless.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    demo: 'https://example.com/demo-store',
    repo: 'https://github.com/example/ecommerce-platform'
  },
  {
    title: 'Concepto UI: App Financiera',
    description:
      'Proyecto visual sin despliegue público, enfocado en arquitectura de diseño, microinteracciones y accesibilidad.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    demo: null,
    repo: 'https://github.com/example/fintech-ui-concept'
  }
];

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'REST / GraphQL']
  },
  {
    category: 'Herramientas',
    items: ['GitHub Actions', 'Docker', 'Figma', 'Vite', 'Jest + Testing Library']
  }
];

const timeline = [
  {
    title: 'Senior Software Developer · NovaTech',
    meta: '2023 - Actualidad',
    description:
      'Liderazgo técnico en productos B2B, optimización de rendimiento y mentoring de desarrolladores junior.'
  },
  {
    title: 'Full Stack Developer · Pixel Studio',
    meta: '2020 - 2023',
    description:
      'Desarrollo de aplicaciones web escalables para clientes de retail, salud y educación.'
  },
  {
    title: 'Ingeniería en Sistemas · Universidad Nacional',
    meta: '2015 - 2019',
    description:
      'Formación en arquitectura de software, estructuras de datos, seguridad y desarrollo web.'
  }
];

const projectsGrid = document.getElementById('projectsGrid');
const skillsGrid = document.getElementById('skillsGrid');
const timelineContainer = document.getElementById('timeline');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

function createButton(link, text, variant = 'secondary') {
  if (!link) return '';
  return `<a class="btn ${variant}" href="${link}" target="_blank" rel="noreferrer">${text}</a>`;
}

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <img src="${project.image}" alt="Vista previa del proyecto ${project.title}" loading="lazy" />
        <div class="project-content">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <div class="project-actions">
            ${createButton(project.demo, 'Ver demo', 'primary')}
            ${createButton(project.repo, 'Repositorio')}
          </div>
        </div>
      </article>`
    )
    .join('');
}

function renderSkills() {
  skillsGrid.innerHTML = skills
    .map(
      (group) => `
      <article class="skill-card">
        <h4>${group.category}</h4>
        <ul class="chips">
          ${group.items.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>`
    )
    .join('');
}

function renderTimeline() {
  timelineContainer.innerHTML = timeline
    .map(
      (item) => `
      <article class="timeline-item">
        <h4>${item.title}</h4>
        <p class="meta">${item.meta}</p>
        <p>${item.description}</p>
      </article>`
    )
    .join('');
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
}

function initializeContactForm() {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formMessage.textContent = 'Por favor completa todos los campos correctamente.';
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Nuevo mensaje de ${name}`);
    const body = encodeURIComponent(`${message}\n\nContacto: ${email}`);
    window.location.href = `mailto:laura.dev@example.com?subject=${subject}&body=${body}`;

    formMessage.textContent = 'Tu cliente de correo se abrió. ¡Gracias por escribir!';
    contactForm.reset();
  });
}

renderProjects();
renderSkills();
renderTimeline();
initializeTheme();
initializeContactForm();
