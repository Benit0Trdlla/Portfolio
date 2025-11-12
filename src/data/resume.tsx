import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Benito Tridella Dolce - Desarrollador Frontend & Web | Portfolio",
  initials: "BTD",
  url: "https://benito-tridella-dolce.vercel.app/",
  location: "Rosario, SF",
  locationLink: "https://www.google.com/maps/place/rosario",
  description:
    "Desarrollador Frontend & Web enfocado en crear interfaces modernas, eficientes y de alto rendimiento, utilizando mi conocimiento y mejores prácticas.",
  summary:
    "Técnico Informático y Desarrollador Frontend con experiencia en HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Styled Components, Tailwind CSS, Bootstrap. Conocimientos sólidos en el desarrollo e integración de APIs REST, y utilizo Git para el control de versiones. Siempre abierto a aprender y adaptarme a nuevas tecnologías y entornos de desarrollo.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js (App Router, Server/Client Components, Dynamic Routing)",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Styled Components",
    "Bootstrap",
    "Tailwind CSS",
    "API REST",
    // "NPM",
    "Git",
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
      logoUrl: "https://caribeensena.org/_assets/media/ea95eb4d8a32e4352ed2403a067facf8.png",
      start: "Marzo 2024",
      end: "Actualidad",
      description: "● Lideré el desarrollo técnico de la plataforma e-learning 'Caribe Enseña Learning', asegurando una navegación accesible y responsive en múltiples dispositivos.\n\n● Construí la aplicación web progresiva 'Proyecto Genius', con funcionalidad offline para ampliar el acceso educativo en zonas con baja conectividad.\n\n● Implementé y optimicé la UX/UI de las plataformas, reduciendo significativamente los tiempos de carga y aumentando la retención de usuarios. \n\n● Gestioné entregas en plazos ajustados, coordinando mejoras y correcciones de forma ágil, brindando soporte técnico constante."
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
        "● Desarrollé el primer chatbot con inteligencia artificial de la empresa, integrando la API de OpenAI con documentación interna para dotarlo de conocimiento personalizado. Esta solución permitió automatizar respuestas a consultas frecuentes y reducir los tiempos de atención al cliente.\n\n● Implementé un sistema de agenda automatizado dentro del chatbot, disminuyendo la carga administrativa y optimizando la gestión de reuniones.\n\n● Creé una aplicación para la exportación automática de facturas a Excel, eliminando errores manuales y aumentando la eficiencia operativa del equipo.",
    },
  ],
  education: [
    {
      school: "Colegio Salesiano San José N° 2043",
      href: "https://sanjoserosario.com.ar/",
      degree: "Técnico Informático",
      logoUrl: "https://sanjoserosario.com.ar/wp-content/uploads/2025/02/cropped-favicon-180x180.png",
      start: "2018",
      end: "2023",
    }
  ],
  projects: [
        {
      title: "CutMach",
      href: "",
      dates: "Octubre 2025 - Actualidad",
      active: true,
      description:
        "CutMatch tu ayuda a encontrar el mejor corte de pelo según la forma de tu cara.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Radix UI",
        "Lucide React",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://seat-map-builder-mu.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/CutMatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Seat Map Builder",
      href: "",
      dates: "Septiembre 2025 - Septiembre 2025",
      active: true,
      description:
        "Editor visual para dibujar un mapa de asientos, con creación y edición de filas y asientos, etiquetado rápido, y opciones de exportación e importación en formato JSON.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Radix UI",
        "Lucide React",
      ],
      links: [
        {
          type: "Website",
          href: "https://seat-map-builder-mu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/SeatMapBuilder",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Know Your Regex",
      href: "",
      dates: "Julio 2025 - Octubre 2025",
      active: true,
      description:
        "¿Necesitas utilizar una regex y no sabes cómo escribirla? ¿O tienes una expresión regular (regex) y quieres saber qué es lo que hace? ¡No te preocupes! Con la ayuda de Know Your Regex tus dudas se resolverán. La herramienta te muestra en detalle la regex que usaste o utilizarás y te ayudará a entender su funcionamiento. ¡Conocé tu regex ahora!",
      technologies: [
        "Google Gemini API",
        "Next.js",
        "React",
        "Tailwind",
        "Radix UI",
        "Lucide React",
        "Motion",
        "Sonner",
        "nuqs",
      ],
      links: [
        {
          type: "Website",
          href: "https://know-your-regex.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Know-Your-Regex",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Recetario Web (Gestión de Recetas)",
      href: "",
      dates: "Enero 2025 - Enero 2025",
      active: true,
      description:
        "Aplicación web diseñada para gestionar y compartir recetas de cocina de forma simple y accesible. Permite a los usuarios crear, consultar, editar, eliminar y compartir recetas desde una interfaz moderna, responsive e intuitiva. La plataforma está pensada para organizar fácilmente recetas personales y fomentar el intercambio culinario entre usuarios.",
      technologies: [
        "Next.js",
        "Next Auth",
        "React",
        "React Hook Form",
        "Prisma",
        "MySQL",
        "Bootstrap",
        "Cloudinary",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Recetas",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Asistente Educativo - Vercel AI SDK",
      href: "",
      dates: "Septiembre 2024 - Octubre 2024",
      active: true,
      description:
        "Asistente educativo impulsado por IA, creado para acompañar a estudiantes en su aprendizaje diario. Responde preguntas, explica conceptos de forma clara y brinda ejemplos adaptados a cada necesidad. Además, permite subir imágenes para analizar y comprender mejor temas complejos.",
      technologies: [
        "Google Gemini API",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Ui Verse",
        "Motion",
        "Sonner",
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
        "Crea y gestiona tus contraseñas de forma segura y sencilla. Generá contraseñas automáticas o personalizalas con palabras clave, entre 8 y 16 caracteres. Guardalas, copialas, usalas y eliminá lo que no necesites, todo desde una interfaz simple e intuitiva.",
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
    // {
    //   title: "Clon Web AFIP",
    //   href: "https://clon-afip.vercel.app/",
    //   dates: "Agosto 2024 - Agosto 2024",
    //   active: true,
    //   description:
    //     "Este proyecto consistió en clonar el sitio web de la AFIP, la institución tributaria de Argentina, con el objetivo de practicar y mejorar mis habilidades en React, React Router y Bootstrap. Me aseguré de que tanto el diseño como las funcionalidades fueran lo más fieles posibles al sitio original.",
    //   technologies: [
    //     "React",
    //     "React Router",
    //     "CSS",
    //     "Bootstrap",
    //     "Vite",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://clon-afip.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Benit0Trdlla/Clon-AFIP",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    // },
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
    // {
    //   title: "ToDo",
    //   href: "https://todo-teal-two.vercel.app/",
    //   dates: "Febrero 2024 - Febrero 2024",
    //   active: true,
    //   description:
    //     "Aplicación para organizar, priorizar y avanzar en tus tareas con claridad. Diseñada para gestionar y almacenar tareas pendientes, esta herramienta te ayuda a estructurar tu trabajo, establecer objetivos claros y avanzar de forma eficiente en la ejecución de proyectos.",
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "React",
    //     "Vite",
    //     "Vercel",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://todo-teal-two.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Benit0Trdlla/Todo",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],

    // },
    {
      title: "WeatherApp",
      href: "#",
      dates: "Febrero 2023 - Febrero 2024",
      active: true,
      description:
        "Consulta el clima de cualquier ciudad con datos precisos y visuales. La aplicación muestra información meteorológica detallada, incluyendo ciudad, país, temperatura actual y descripción del clima. Además, cuenta con integración con Google Maps para ubicar geográficamente cada consulta de forma rápida e intuitiva.",
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
        "En mi último año de secundaria, creé un chatbot capaz de responder consultas frecuentes sobre el colegio: su historia, autoridades, modalidades de las carreras técnicas (6 años) y detalles de la Bienal, una exposición educativa destacada. Este proyecto buscó mejorar la comunicación institucional y ofrecer respuestas inmediatas a estudiantes y visitantes.",
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
        "Sitio web de un podcast con gestión de favoritos y perfil personalizado. La plataforma muestra los episodios publicados y permite a los usuarios crear una cuenta para marcar capítulos como favoritos. Cada usuario puede agregar o quitar episodios de su lista personal y personalizar su perfil, incluyendo la imagen de avatar.",
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
        "Proyecto de Arduino conectado con una aplicación web para mostrar puntajes en tiempo real. La aplicación web conectada presenta preguntas predeterminadas de forma aleatoria. A medida que los participantes responden, sus puntajes individuales se muestran en una pantalla LCD 16x2, generando una experiencia dinámica.",
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
