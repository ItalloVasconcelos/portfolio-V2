export const personalInfo = {
  name: "Itallo Savio",
  title: "Frontend Developer",
  description: `Building scalable, tested and secure front-ends — for the real world.`,
  
  currentRole: {
    position: "Software Engineer",
    company: "Versatus HPC",
    description: `Currently working as a Software Engineer at Versatus HPC for 3 years, where I evolved 
      from a junior developer on the BananaCloud project to a key piece in the development of Kosen Energy (ACL). 
      In this project, I had the unique opportunity to lead the Design front, creating prototypes and 
      the visual identity of the system, and then actively participate in its implementation with React.`
  },

  contact: {
    email: "itallo.prog@gmail.com",
    location: "Brazil"
  },

  social: {
    github: "https://github.com/ItalloVasconcelos",
    linkedin: "https://www.linkedin.com/in/itallo-savio/?locale=en_US",
    twitter: "https://twitter.com/itallo_savio",
    website: "https://itallosaviodev.com"
  }
};

export const experience = [
  {
    id: 1,
    period: "AUG 2022 — PRESENT",
    title: "Software Engineer",
    company: "Versatus HPC",
    description: `Leading development of Kosen Energy (ACL), an energy commercialization system. 
      Conducted MVP development with React, SCSS and TypeScript, using a robust REST API architecture. 
      Led the design team with Figma for agile prototyping and applied Test-Driven Development with Jest.`,
    technologies: ["React", "TypeScript", "SCSS", "Jest", "Figma", "REST API", "Git", "SCRUM"],
    achievements: [
      "Led design team and created system prototypes",
      "Applied TDD with Jest ensuring code quality",
      "Implemented SOLID principles and microservices architecture",
      "Coordinated deliveries using SCRUM methodology"
    ]
  },
  {
    id: 2,
    period: "AUG 2022 — MAR 2023",
    title: "Junior Frontend Developer",
    company: "Versatus HPC - BananaCloud",
    description: `Developed cloud provider management platform interface using React, SCSS and TypeScript. 
      Integrated Keycloak for secure access control and user authentication. Structured architecture 
      based on REST API and documented components in Storybook.`,
    technologies: ["React", "TypeScript", "SCSS", "Keycloak", "Storybook", "REST API"],
    achievements: [
      "Created intuitive interface for cloud services management",
      "Integrated secure authentication with Keycloak",
      "Documented components improving team communication",
      "Established scalable and maintainable architecture"
    ]
  },
  {
    id: 3,
    period: "JUN 2021 — AUG 2022",
    title: "Junior Frontend Developer",
    company: "Federal Institute of Ceará (IFCE)",
    description: `Developed a Single Page Application (SPA) for communication between students and campus 
      using React and TypeScript. Implemented responsive styling with Bootstrap and Styled-components, 
      managed global state with Context-API and Redux.`,
    technologies: ["React", "TypeScript", "Bootstrap", "Styled-components", "Redux", "Git"],
    achievements: [
      "Built complete intranet system still in use today",
      "Implemented responsive design for multiple devices",
      "Applied SCRUM methodology for project management",
      "Documented APIs with Swagger for team integration"
    ]
  },
  {
    id: 4,
    period: "AUG 2022 — FEB 2023",
    title: "Freelance Frontend Developer",
    company: "Freelance",
    description: `Converted existing lottery website from PHP to React SPA using Ionic framework. 
      Integrated multi-factor authentication (MFA) for user login and registration. Worked with 
      PHP backend services for data handling and improved user experience.`,
    technologies: ["React", "Ionic", "PHP", "Figma", "MFA"],
    achievements: [
      "Successfully migrated legacy system to modern SPA",
      "Enhanced security with multi-factor authentication",
      "Improved user experience and interface design",
      "Optimized performance and smooth backend integration"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Kosen Energy (ACL)",
    description: `Energy commercialization system for the Free Contracting Environment (ACL). 
      Led both design and development, creating prototypes in Figma and implementing with React, 
      TypeScript and SCSS. Applied TDD methodology and microservices architecture.`,
    image: "/project1.jpg",
    technologies: ["React", "TypeScript", "SCSS", "Figma", "Jest", "REST API"],
    links: {
      live: "https://kosen.energy",
      github: "https://github.com/ItalloVasconcelos/kosen-energy"
    },
    featured: true
  },
  {
    id: 2,
    title: "BananaCloud Platform",
    description: `Cloud provider management platform with intuitive interface for cloud services 
      management. Integrated Keycloak authentication and documented components with Storybook. 
      Built with scalable REST API architecture.`,
    image: "/project2.jpg", 
    technologies: ["React", "TypeScript", "SCSS", "Keycloak", "Storybook"],
    links: {
      live: "https://bananacloud.com",
      github: "https://github.com/ItalloVasconcelos/bananacloud"
    },
    featured: true
  },
  {
    id: 3,
    title: "IFCE Intranet System",
    description: `Single Page Application for communication between students and campus. 
      Built with React and TypeScript, featuring responsive design, global state management 
      with Redux, and comprehensive API documentation.`,
    image: "/project3.jpg",
    technologies: ["React", "TypeScript", "Bootstrap", "Redux", "Swagger"],
    links: {
      github: "https://github.com/ItalloVasconcelos/ifce-intranet"
    },
    featured: false
  },
  {
    id: 4,
    title: "Lottery Platform Migration",
    description: `Complete migration of lottery website from PHP to modern React SPA using Ionic. 
      Enhanced security with multi-factor authentication and improved user experience with 
      modern interface design.`,
    image: "/project4.jpg",
    technologies: ["React", "Ionic", "PHP", "MFA", "Figma"],
    links: {
      github: "https://github.com/ItalloVasconcelos/lottery-platform"
    },
    featured: false
  },
  {
    id: 5,
    title: "Orthomovi Website Redesign",
    description: `Complete restructuring of design and frontend for Orthomovi website. 
      Created modern, responsive interface focused on user experience and conversion 
      optimization. Generated significant impact on business results.`,
    image: "/project5.jpg",
    technologies: ["React", "Next.js", "Styled-components", "Figma"],
    links: {
      live: "https://orthomovi.com.br"
    },
    featured: false
  }
];

export const skills = {
  frontend: [
    "React",
    "TypeScript", 
    "JavaScript (ES6+)",
    "Next.js",
    "Redux Toolkit",
    "SCSS/SASS",
    "Styled-components",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Ionic"
  ],
  backend: [
    "Node.js",
    "GraphQL",
    "REST APIs",
    "Hasura",
    "PostgreSQL",
    "PHP",
    "Keycloak",
    "Microservices",
    "BFF Architecture"
  ],
  tools: [
    "Figma",
    "Git & GitLab",
    "Jest & Cypress",
    "Storybook",
    "Swagger",
    "Jira & SCRUM",
    "CI/CD",
    "Bitbucket",
    "Insomnia",
    "WordPress"
  ]
}; 