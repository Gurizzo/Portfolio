// ✏️ Edita este archivo con tu información real.

export const player = {
  name: 'GUSTAVO RIZZO',
  tag: 'P1',
  role: 'Back End Developer',
  level: new Date().getFullYear() - 2020, // años como developer (desde oct. 2020)
  location: 'Montevideo, Uruguay',
  bio: 'Back End Developer en Equifax. Analista Programador por la Universidad ORT Uruguay, con experiencia full-stack construyendo soluciones con C#, SQL Server y React.',
  avatar: '👾',
  email: 'gustavodanielrizzocolman@gmail.com',
  socials: [
    { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/grizzouy/' },
    { label: 'GITHUB', url: 'https://github.com/Gurizzo' },
  ],
}

// Valores de 0 a 100: autoevaluación, ajústalos a tu gusto.
export const stats = [
  { name: 'C#', value: 90, color: 'cyan' },
  { name: 'SQL SERVER', value: 85, color: 'green' },
  { name: 'REACT.JS', value: 75, color: 'pink' },
  { name: 'HTML', value: 80, color: 'yellow' },
  { name: 'CSS', value: 70, color: 'cyan' },
]

export const powerUps = ['ASP.NET', 'Entity Framework', 'Kotlin', 'Android', 'GeneXus', 'Microsoft Excel', 'Microsoft Word', 'PowerPoint', 'Dreamweaver', 'Reparación de PC']

// demo: URL de la app publicada (opcional). Si está vacío, el botón lleva al repo.
export const projects = [
  {
    stage: '1-1',
    title: 'REPORTE BASURA',
    description: 'App Android para reportar basura fuera del contenedor: saca una foto, guarda la dirección y coordenadas GPS y la envía por WhatsApp.',
    tech: ['Kotlin', 'Android', 'GPS'],
    difficulty: 4,
    color: 'green',
    demo: '',
    code: 'https://github.com/Gurizzo/Reporte-basura',
  },
  {
    stage: '1-2',
    title: 'QUITA-NODOS 3000',
    description: 'App de escritorio que elimina nodos de todos los XML de una carpeta usando reglas XPath.',
    tech: ['C#', 'XML', 'XPath'],
    difficulty: 3,
    color: 'cyan',
    demo: '',
    code: 'https://github.com/Gurizzo/Quita-nodos-3000',
  },
  {
    stage: '2-1',
    title: 'AHORRAR PAPEL',
    description: 'Une automáticamente los PDFs de una carpeta de Drive en un documento por mes, organizado por año.',
    tech: ['C#', 'PDF', 'Google Drive'],
    difficulty: 3,
    color: 'pink',
    demo: '',
    code: 'https://github.com/Gurizzo/Ahorrar-papel-paganza',
  },
  {
    stage: '2-2',
    title: 'PORTLOG V2',
    description: 'Proyecto obligatorio de la ORT: aplicación web con persistencia en base de datos mediante Entity Framework.',
    tech: ['ASP.NET', 'C#', 'Entity Framework'],
    difficulty: 3,
    color: 'yellow',
    demo: '',
    code: 'https://github.com/Gurizzo/PortLogV2',
  },
  {
    stage: '3-1',
    title: 'WEATHER APP',
    description: 'App del clima hecha para practicar React.',
    tech: ['React', 'JavaScript', 'CSS'],
    difficulty: 2,
    color: 'cyan',
    demo: '',
    code: 'https://github.com/Gurizzo/Weather_App',
  },
]

export const highScores = [
  { rank: '1ST', score: '2022 – HOY', name: 'EQUIFAX', role: 'Back End Developer' },
  { rank: '2ND', score: '2020 – 2022', name: 'GOSOCKET', role: 'Full-stack Developer' },
  { rank: '3RD', score: '2018 – 2022', name: 'UNIVERSIDAD ORT', role: 'Analista Programador' },
  { rank: '4TH', score: '2017', name: 'GENEXUS', role: 'Analista GeneXus for Students' },
]
