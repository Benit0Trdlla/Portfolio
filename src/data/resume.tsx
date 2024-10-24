import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Benito Tridella Dolce - Portfolio",
  initials: "BTD",
  url: "https://portfolio-pi-six-69.vercel.app/",
  location: "Rosario, SF",
  locationLink: "https://www.google.com/maps/place/rosario",
  description:
    "Desarrollador Frontend enfocado en crear interfaces modernas, eficientes y de alto rendimiento, utilizando mi conocimiento y mejores prácticas.",
  summary:
    "Con experiencia en HTML5, CSS3, JavaScript, React, Styled Components, Bootstrap y Next.js. Competente en el desarrollo y consumo de APIs RESTful. Experiencia en el uso de Git para el control de versiones. Buscando siempre soluciones eficientes y escalables, sin temor a adaptarse a nuevos entornos o herramientas.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "HTML",
    "CSS",
    "Bootstrap",
    "API RESTful",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Benit0Trdlla",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/benitotridelladolce/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "benitotridelladolce@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Caribe Enseña",
      href: "https://caribeensena.org/",
      badges: [],
      location: "Remote",
      title: "Desarrollador Frontend",
      logoUrl: "https://caribeensena.org/media/ea95eb4d8a32e4352ed2403a067facf8.png",
      start: "Marzo 2024",
      end: "Actualidad",
      description: "Desde junio de 2024, desarrollo el proyecto 'Caribe Enseña Learning', plataforma e-learning:\n- Ofrece cursos, talleres y diplomados enfocados en las necesidades educativas de la región.\n- Accesible desde dispositivos móviles y computadoras.\n- Objetivo, potenciar el aprendizaje en entornos formales y no formales.\n\nEntre marzo y junio de 2024, desarrollé una aplicación web progresiva (PWA) llamada ‘Proyecto Genius’:\n- Facilita la preparación de las pruebas Saber 11 del ICFES.\n- Dirigida a estudiantes de áreas rurales y con desventajas socioeconómicas.\n- Participé en el diseño de la experiencia de usuario (UX) y la interfaz (UI).\n\nTecnologías utilizadas en ambos proyectos: Next.js, React, Bootstrap, CSS, HTML, JavaScript."
    },
    {
      company: "Laboratorio Consultar SRL",
      badges: [],
      href: "https://www.laboratorioconsultar.com/img/Logo-Laboratorio.png",
      location: "Presencial",
      title: "Desarrollador Fullstack",
      logoUrl: "https://www.laboratorioconsultar.com/img/favicon.ico",
      start: "Mayo 2023",
      end: "Julio 2023",
      description:
        "Desarrollé dos proyectos como pasante Fullstack: una aplicación en Python que trasladaba informes a Excel y el primer chatbot técnico con IA de la empresa. Con la posiblidad de poder agendar reuniones. Se desarrolló con OpenAI, LangChain, y una base de conocimientos de informes técnicos propios.\n\nTecnologías: Python, Flask, LangChain, ChromaDB, HTML, CSS, JavaScript.",
    },
  ],
  education: [
    {
      school: "Colegio Salesiano San José N° 2043",
      href: "https://sanjoserosario.com.ar/",
      degree: "Técnico en Informática Profesional y Personal",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFG9YmG5wbIjg/company-logo_200_200/company-logo_200_200/0/1703599931458/colegio_salesiano_san_jos_rosario_logo?e=1732147200&v=beta&t=twxUEwvZI6Kc5hBCP5sD91McZBCw2fBNTb7FqGMNZ8A",
      start: "2018",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "Asistente Educativo - Vercel AI SDK",
      href: "",
      dates: "Septiembre 2024 - Octubre 2024",
      active: true,
      description:
        "Asistente educativo con IA, diseñado para apoyar a estudiantes en diversas materias escolares. Responde preguntas, proporciona explicaciones claras y ofrece ejemplos personalizados. Una funcionalidad clave del asistente es la capacidad de subir imágenes para facilitar la comprensión de temas complejos.",
      technologies: [
        "Next.js",
        "React",
        "CSS",
        "Ui Verse",
        "Vercel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Educational-Assistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Genera y Gestiona Tus Contraseñas",
      href: "https://genera-y-gestiona-tus-contrasenas-gray.vercel.app/",
      dates: "Septiembre 2024 - Septiembre 2024",
      active: true,
      description:
        "Genera y gestiona tus contraseñas de forma segura. Puedes crearlas automáticamente o personalizarlas con una palabra específica, con longitudes entre 8 y 16 caracteres. Guarda, copia, utiliza y elimina contraseñas fácilmente con una interfaz intuitiva.",
      technologies: [
        "React",
        "CSS",
        "Ui Verse",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://genera-y-gestiona-tus-contrasenas-gray.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Passwords",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    // {
    //   title: "Mi Versión de Linktree",
    //   href: "https://my-linktree-pink.vercel.app/",
    //   dates: "Septiembre 2024 - Septiembre 2024",
    //   active: true,
    //   description:
    //     "Desarrollé mi propia alternativa a Linktree, centrándome en crear una plataforma sencilla y eficaz para gestionar múltiples enlaces. El proyecto incluye funciones personalizables que permiten a los usuarios organizar y compartir sus enlaces de forma clara y atractiva.",
    //   technologies: [
    //     "React",
    //     "CSS",
    //     "Ui Verse",
    //     "Vite",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://my-linktree-pink.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Benit0Trdlla/My-Linktree",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    // },
    {
      title: "Clon Web AFIP",
      href: "https://clon-afip.vercel.app/",
      dates: "Agosto 2024 - Agosto 2024",
      active: true,
      description:
        "Este proyecto consistió en clonar el sitio web de la AFIP, la institución tributaria de Argentina, con el objetivo de practicar y mejorar mis habilidades en React, React Router y Bootstrap. Me aseguré de que tanto el diseño como las funcionalidades fueran lo más fieles posibles al sitio original.",
      technologies: [
        "React",
        "React Router",
        "CSS",
        "Bootstrap",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://clon-afip.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Clon-AFIP",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    // {
    //   title: "Perfil de Usuario",
    //   href: "https://todo-teal-two.vercel.app/",
    //   dates: "Julio 2024 - Julio 2024",
    //   active: true,
    //   description:
    //     "Proyecto enfocado en la práctica y mejora de habilidades en maquetación web y el uso de CSS Modules. El objetivo principal fue crear una estructura bien organizada y responsive, asegurando que cada componente mantuviera un estilo encapsulado y fácil de mantener.",
    //   technologies: [
    //     "CSS Modules",
    //     "Next.js",
    //     "React",
    //     "Vercel",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://perfil-de-usuario-two.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Benit0Trdlla/Perfil-de-Usuario",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    // },
    {
      title: "ToDo",
      href: "https://todo-teal-two.vercel.app/",
      dates: "Febrero 2024 - Febrero 2024",
      active: true,
      description:
        "Aplicación destinada a la gestión y almacenamiento de tareas pendientes. Esta herramienta proporciona una organización efectiva y establece objetivos claros para avanzar de manera eficiente en el desarrollo y gestión de proyectos.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Vite",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-teal-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Todo",
          icon: <Icons.github className="size-3" />,
        },
      ],

    },
    {
      title: "WeatherApp",
      href: "#",
      dates: "Febrero 2023 - Febrero 2024",
      active: true,
      description:
        "Aplicación que proporciona información meteorológica detallada para la ciudad consultada. La interfaz muestra datos clave, como el nombre de la ciudad, el país, la temperatura actual y una descripción del clima vigente. Además, la aplicación está integrada con Google Maps para facilitar la ubicación geográfica.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Vite",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://weather-app-beige-eight-68.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/WeatherApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    // {
    //   title: "CRUD Challenge",
    //   href: "#",
    //   dates: "Enero 2024 - Enero 2024",
    //   active: true,
    //   description:
    //     "Challenge diseñado para practicar tecnologías backend y el manejo de bases de datos relacionales. El desafío consistió en desarrollar un sistema CRUD para la gestión de notas, incorporando funcionalidades de almacenamiento y un filtro para facilitar la búsqueda de las notas guardadas.",
    //   technologies: [
    //     "HTML",
    //     "Javascript",
    //     "CSS",
    //     "Node.js",
    //     "Express",
    //     "MySQL",
    //     "Prisma",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/Benit0Trdlla/CRUD-Challenge",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    // },
    {
      title: "Chatbot del Colegio Salesiano San José N° 2043",
      href: "#",
      dates: "Julio 2023 - Noviembre 2023",
      active: true,
      description:
        "En mi último año de secundaria desarrollé un chatbot para responder diversas consultas relacionadas con la institución, como la historia del colegio, su administración, las modalidades de carreras técnicas de seis años y detalles sobre la Bienal (Exposición Educativa).",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Node.js",
        "Express",
        "Bootstrap",
        "Open AI",
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Chatbot2043",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Laburar Podcast Web Page",
      href: "#",
      dates: "Agosto 2023 - Noviembre 2023",
      active: true,
      description:
        "El sitio web presenta los episodios emitidos de un podcast y ofrece a los usuarios la capacidad de gestionar una lista de favoritos, permitiendo agregar o eliminar capítulos. La funcionalidad de favoritos requiere que los usuarios creen una cuenta, que incluye la opción de personalizar la imagen de perfil.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Node.js",
        "Express",
        "MySQL",
        "Bootstrap",
        "EJS (motor de plantillas)",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/NicolasSaldana/Podcast-NodeJS",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Detector de Mentiras",
      href: "#",
      dates: "Abril 2022 - Diciembre 2022",
      active: true,
      description:
        "Proyecto de Arduino integrado con una aplicación web. La aplicación presenta preguntas predeterminadas de manera aleatoria y exhibe los puntajes individuales de los participantes en una pantalla LCD 16x16.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Arduino",
        "Firebase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Arduino",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
