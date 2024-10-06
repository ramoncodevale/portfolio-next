import Fsw from '../../public/fsw-barber.png';
import Planner from '../../public/plann.er-projeto.png'
import Countries from '../../public/countries-api.png'

export const habilidades = {
  linguagens: ["HTML", "CSS", "JavaScript", "TypeScript"],
  frameworks: ["React", "Next.js", "Tailwind CSS"],
  ferramentas: ["Git", "GitHub"],
};

export const categorias = [
  { nome: "HTML", nivel: "Avançado" },
  { nome: "CSS", nivel: "Avançado" },
  { nome: "JavaScript", nivel: "Intermediário" },
  { nome: "TypeScript", nivel: "Intermediário" },
  { nome: "Tailwind CSS", nivel: "Intermediário" },
  { nome: "React", nivel: "Intermediário" },
  { nome: "Next.js", nivel: "Básico" },
  { nome: "Git", nivel: "Avançado" },
  { nome: "GitHub", nivel: "Intermediário" },
];



export const images = {
  Fsw,
  Planner,
};

export const projetos = [
  {
    nome: "Projeto FSW Barber",
    tecnologias: "Next.js, TypeScript, Tailwind CSS, Shadcn UI, Prisma",
    descricao:
      "Uma aplicação web para uma barbearia, oferecendo funcionalidades como agendamento de horários e gerenciamento de clientes. A interface é intuitiva e responsiva.",
    link1: "https://fsw-barber-bk2y.vercel.app/",
    link2: "https://github.com/ramoncodevale/fsw-barber",
    img: Fsw, 
  },
  {
    nome: "Plann.er",
    tecnologias: "React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB",
    descricao:
    "é uma aplicação web full stack desenvolvida para facilitar o planejamento de viagens, integrando funcionalidades robustas no front-end e no back-end. O foco é oferecer uma experiência eficiente e intuitiva ao usuário, desde a escolha do destino até a organização dos detalhes da viagem.",
    link1: "https://plann-er-mocha.vercel.app/", 
    link2: "https://github.com/ramoncodevale/plann.er",
    img: Planner,
  },
  {
    nome: "Countries API",
    tecnologias: "React.js, Hooks, TypeScript, Tailwind, Context API",
    descricao: 
    "Os usuários podem pesquisar por nome, filtrar por região e visualizar os dados em um formato de fácil leitura. Além disso, a interface é projetada com uma navegação intuitiva e responsiva, garantindo uma experiência agradável em dispositivos móveis e desktop. Os dados são apresentados de forma visual, utilizando gráficos e mapas interativos, tornando a exploração das informações ainda mais envolvente.",
    link1: "https://countries-api-q4cl.vercel.app/",
    link2: "https://github.com/ramoncodevale/countries-api",
    img: Countries,
  },
];

export const certificacoes = [
  {
    nome: "NLW Pocket: JavaScript – Full-Stack Intermediário, Rocketseat (2024)",
    pdf: "/certificados/certificate-fullstack.pdf", 
  },
];

// "Desenvolvimento Web Full Stack – Digital House (2022)",
// "Upload AI – Rocketseat (2023)",
// "Imersão Inteligência Artificial – Alura e Gemini (2024)",
// "Next Level Week (NLW) React – Rocketseat (2024)",
// "Picker Calendário – Rocketseat (2024)",
// "Next Level Week (NLW) React Native – Rocketseat (2024)",
// "Projeto Barbearia – Formação Dev (2024)",
// "NLW Pocket: JavaScript – Full-Stack Intermediário, Rocketseat (2024)",
// "NLW Pocket: JavaScript – Full-Stack Iniciante, Rocketseat (2024)",