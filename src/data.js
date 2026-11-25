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

// Campos de cada proyecto:
//   demo: URL de la demo (web o página del Release). Vacío → el botón lleva al repo.
//   gif:  GIF de la demo; si está, PLAY abre el visor arcade dentro del portfolio.
//   apk:  descarga directa de la APK (apps Android).
//   kind: 'android' | 'web' → etiqueta de la tarjeta.
export const projects = [
  {
    stage: '1-1',
    title: 'UYPS · GPS URUGUAY',
    description: 'Navegador GPS sin conexión para Uruguay, en el teléfono y en Android Auto: rutas giro a giro con voz, sentidos de calles, prohibiciones de giro, vista 3D y búsqueda de lugares cercanos.',
    tech: ['Kotlin', 'Android Auto', 'OpenStreetMap'],
    difficulty: 5,
    color: 'green',
    kind: 'android',
    demo: 'https://github.com/Gurizzo/GPS-Uruguay/releases/latest',
    gif: 'https://raw.githubusercontent.com/Gurizzo/GPS-Uruguay/main/docs/demo.gif',
    apk: 'https://github.com/Gurizzo/GPS-Uruguay/releases/download/v1.2.0/UYPS-1.2.0.apk',
    code: 'https://github.com/Gurizzo/GPS-Uruguay',
  },
  {
    stage: '1-2',
    title: 'SUDOKU GATITOS',
    description: 'Sudoku para Android sin anuncios que se juega con 9 gatitos: 4 dificultades, tableros con solución única, vidas, notas, pistas y ronroneos.',
    tech: ['Kotlin', 'Android', 'Juego'],
    difficulty: 3,
    color: 'pink',
    kind: 'android',
    demo: 'https://github.com/Gurizzo/Sudoku-gatitos/releases/latest',
    gif: 'https://raw.githubusercontent.com/Gurizzo/Sudoku-gatitos/main/docs/demo.gif',
    apk: 'https://github.com/Gurizzo/Sudoku-gatitos/releases/download/v1.0.0/SudokuGatitos-1.0.0-release.apk',
    code: 'https://github.com/Gurizzo/Sudoku-gatitos',
    hidden: true, // repo privado: quitar esta línea cuando sea público
  },
  {
    stage: '2-1',
    title: 'REPORTE BASURA',
    description: 'App Android para reportar basura fuera del contenedor: saca una foto, guarda la dirección y coordenadas GPS y la envía por WhatsApp. APK de ~60 KB, sin librerías.',
    tech: ['Kotlin', 'Android', 'GPS'],
    difficulty: 4,
    color: 'yellow',
    kind: 'android',
    demo: 'https://github.com/Gurizzo/Reporte-basura/releases/latest',
    gif: 'https://raw.githubusercontent.com/Gurizzo/Reporte-basura/main/docs/demo.gif',
    apk: 'https://github.com/Gurizzo/Reporte-basura/releases/download/v1.1-demo/reporte-basura-demo-1.1.apk',
    code: 'https://github.com/Gurizzo/Reporte-basura',
  },
  {
    stage: '2-2',
    title: 'REALITY',
    description: 'Sitio web para un instituto de inglés, responsive con Bootstrap.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    difficulty: 2,
    color: 'cyan',
    kind: 'web',
    demo: 'https://gurizzo.github.io/Reality/',
    code: 'https://github.com/Gurizzo/Reality',
  },
  {
    stage: '3-1',
    title: 'QUITA-NODOS 3000',
    description: 'App de escritorio que elimina nodos de todos los XML de una carpeta usando reglas XPath.',
    tech: ['C#', 'XML', 'XPath'],
    difficulty: 3,
    color: 'cyan',
    demo: '',
    code: 'https://github.com/Gurizzo/Quita-nodos-3000',
  },
  {
    stage: '3-2',
    title: 'AHORRAR PAPEL',
    description: 'Une automáticamente los PDFs de una carpeta de Drive en un documento por mes, organizado por año.',
    tech: ['C#', 'PDF', 'Google Drive'],
    difficulty: 3,
    color: 'pink',
    demo: '',
    code: 'https://github.com/Gurizzo/Ahorrar-papel-paganza',
  },
  {
    stage: '4-1',
    title: 'PORTLOG V2',
    description: 'Proyecto obligatorio de la ORT: aplicación web con persistencia en base de datos mediante Entity Framework.',
    tech: ['ASP.NET', 'C#', 'Entity Framework'],
    difficulty: 3,
    color: 'yellow',
    demo: '',
    code: 'https://github.com/Gurizzo/PortLogV2',
  },
  {
    stage: '4-2',
    title: 'WEATHER APP',
    description: 'App del clima hecha para practicar React.',
    tech: ['React', 'JavaScript', 'CSS'],
    difficulty: 2,
    color: 'green',
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
