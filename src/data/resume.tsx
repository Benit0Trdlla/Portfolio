import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Benito Tridella Dolce",
  initials: "BTD",
  url: "https://portfolio-pi-six-69.vercel.app/",
  location: "Rosario, SF",
  locationLink: "https://www.google.com/maps/place/rosario",
  description:
    "Desarrollador Frontend  enfocado  en crear interfaces modernas y eficientes, aprovechando mis conocimientos y mejores prácticas.",
  summary:
    "Soy un Desarrollador Frontend especializado en HTML, CSS, Bootstrap, JavaScript, React, y Next.js. Tengo experiencia trabajando con APIs RESTful y utilizando GitHub para el control de versiones. Fortalezco mis habilidades a través del aprendizaje activo y la adaptación continua. Soy una persona versátil, comprometida con el uso de tecnologías modernas y abierto a nuevos desafíos.",
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
      description:
        "Desarrollo de una aplicación web progresiva (PWA) para facilitar la preparación de las pruebas Saber 11 del ICFES, enfocada en estudiantes de áreas rurales y entornos socioeconómicamente desfavorecidos. Además partícipe en el diseño de la experiencia de usuario (UX) y la interfaz (UI). Tecnologías utilizadas: Next.js, React, Bootstrap, CSS, HTML, JavaScript.",
    },
    {
      company: "Laboratorio Consultar SRL",
      badges: [],
      href: "https://www.laboratorioconsultar.com/img/Logo-Laboratorio.png",
      location: "Presencial",
      title: "Desarrollador Fullstack",
      logoUrl: "https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-1/299993755_497814015678053_5107267870563397641_n.png?stp=dst-png_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=4pr5RPUVoMIQ7kNvgHhTHDL&_nc_ht=scontent.fros2-2.fna&oh=00_AYAr_jZ6uhZAWpxOXWD0c-s7s_iySy2XClDxjwZSzc_FUA&oe=66CD60A7",
      start: "Mayo 2023",
      end: "Julio 2023",
      description:
      "Desarrollé dos proyectos como pasante Fullstack: una aplicación en Python que trasladaba informes a Excel y el primer chatbot técnico con IA de la empresa. Con la posiblidad de poder agendar reuniones. Se desarrolló con OpenAI, LangChain, y una base de conocimientos de informes técnicos propios. Tecnologías: Python, Flask, LangChain, ChromaDB, HTML, CSS, JavaScript.",
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
      title: "Perfil de Usuario",
      href: "https://todo-teal-two.vercel.app/",
      dates: "Julio 2024 - Julio 2024",
      active: true,
      description:
        "Breve proyecto para poder practicar Maquetación Web y CSS Modules.",
      technologies: [
        "CSS Modules",
        "Next.js",
        "React",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://perfil-de-usuario-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/Perfil-de-Usuario",
          icon: <Icons.github className="size-3" />,
        },
      ],

    },
    {
      title: "ToDo",
      href: "https://todo-teal-two.vercel.app/",
      dates: "Febrero 2024 - Febrero 2024",
      active: true,
      description:
        "He diseñado y desarrollado una aplicación destinada a la gestión y almacenamiento de tareas pendientes. Esta herramienta proporciona una organización efectiva y establece objetivos claros para avanzar de manera eficiente en el desarrollo de proyectos.",
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
        "Desarrollé una aplicación que proporciona información meteorológica detallada para la ciudad consultada. La interfaz muestra datos clave, como el nombre de la ciudad, el país, la temperatura actual y una descripción del clima vigente. Además, la aplicación está integrada con Google Maps para facilitar la ubicación geográfica.",
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
    {
      title: "CRUD Challenge",
      href: "#",
      dates: "Enero 2024 - Enero 2024",
      active: true,
      description:
        "Realicé este ejercicio con el propósito de prepararme para futuras entrevistas técnicas, considerando que es uno de los desafíos recurrentes en este tipo de evaluaciones. La tarea en cuestión consiste en la implementación de un sistema CRUD para la gestión de notas, que incluye funcionalidades de guardado y un filtro para facilitar la búsqueda.",
      technologies: [
        "HTML",
        "Javascript",
        "CSS",
        "Node.js",
        "Express",
        "MySQL",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Benit0Trdlla/CRUD-Challenge",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Chatbot del Colegio Salesiano San José N° 2043",
      href: "#",
      dates: "Julio 2023 - Noviembre 2023",
      active: true,
      description:
        "El ultimo proyecto realizado en mi ultimo año de secundaria en el Colegio Salesiano San José N° 2043 fue el desarrollo de un chatbot capaz de responder a diversas consultas relacionadas con la institución. Como la historia del colegio, la administración, las modalidades de carreras técnicas de seis años y datos relevantes sobre la Bienal.",
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
        "La plataforma presenta los episodios emitidos de un podcast e integra un sistema que permite a los usuarios gestionar su lista de favoritos pudiendo agregar y eliminar capítulos. La funcionalidad de favoritos requiere que los usuarios creen una cuenta, que incluye la opción de personalizar la imagen de perfil. ",
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
        "Proyecto utilizando Arduino y conectándolo a una aplicación web desarrollada mediante HTML, CSS, JavaScript y Firebase. Para mejorar la interacción, la aplicación presenta preguntas predeterminadas de manera aleatoria y exhibe los puntajes individuales de los participantes en una pantalla LCD. Este monitoreo y control de la experiencia se realiza de forma remota a través de la interfaz web asociada al proyecto.",
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
