// ✏️ Edita este archivo con tu información real.

export const player = {
  name: 'GUSTAVO RIZZO',
  tag: 'P1',
  role: 'Back End Developer',
  level: new Date().getFullYear() - 2020, // años como developer (desde oct. 2020)
  location: 'Montevideo, Uruguay',
  bio: 'Back End Developer en Equifax y Analista Programador por la Universidad ORT Uruguay. Trabajo con C#/.NET y SQL, hago frontends en React, apps Android en Kotlin, y estoy certificado en IA por Google.',
  avatar: '👾',
  email: 'gustavodanielrizzocolman@gmail.com',
  socials: [
    { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/grizzouy/' },
    { label: 'GITHUB', url: 'https://github.com/Gurizzo' },
  ],
}

// Valores de 0 a 100 estimados a partir de tu experiencia y de tus repos de GitHub
// (cantidad de código, proyectos y qué tan recientes son). note = la evidencia.
export const stats = [
  { name: 'C# / .NET', value: 92, color: 'cyan', note: '10 repos · Equifax · Gosocket' },
  { name: 'SQL', value: 85, color: 'green', note: 'SQL Server · PostgreSQL · T-SQL' },
  { name: 'JAVASCRIPT / REACT', value: 78, color: 'yellow', note: '10 repos · React + Vite' },
  { name: 'KOTLIN / ANDROID', value: 75, color: 'pink', note: '3 apps publicadas en 2026' },
  { name: 'HTML / CSS', value: 75, color: 'cyan', note: '12 repos' },
  { name: 'JAVA / SPRING BOOT', value: 60, color: 'green', note: '4 repos' },
  { name: 'IA GENERATIVA', value: 60, color: 'pink', note: 'Google AI Professional' },
  { name: 'PYTHON', value: 45, color: 'yellow', note: 'Coursera · scripts de mapas en GPS-Uruguay' },
]

export const powerUps = [
  'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Swagger', 'React Router', 'Vite',
  'Android Auto', 'MapLibre', 'Spring Boot', 'GitHub Actions', 'Git', 'GeneXus',
]

// Certificaciones (de LinkedIn). url opcional: enlace a la credencial.
export const trophies = [
  {
    icon: '🤖',
    title: 'GOOGLE AI PROFESSIONAL',
    issuer: 'Google · Coursera',
    date: 'JUL 2026',
    color: 'yellow',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/FPCVA0F4T0RN',
  },
  {
    icon: '✨',
    title: 'GOOGLE AI ESSENTIALS',
    issuer: 'Google · Coursera',
    date: 'ABR 2026',
    color: 'cyan',
    url: 'https://www.coursera.org/account/accomplishments/specialization/NJAX1SP9XPUI',
  },
  { icon: '🐍', title: 'PYTHON DATA STRUCTURES', issuer: 'Coursera', date: 'SEP 2020', color: 'green', url: 'https://www.coursera.org/account/accomplishments/certificate/9E95YKGSGRH5' },
  { icon: '🐍', title: 'PROGRAMMING FOR EVERYBODY (PYTHON)', issuer: 'Coursera', date: 'AGO 2020', color: 'green', url: 'https://www.coursera.org/account/accomplishments/certificate/STN5JHLKHUE9' },
  { icon: '🎓', title: 'ANALISTA GENEXUS FOR STUDENTS V15', issuer: 'GeneXus', date: 'DIC 2017', color: 'pink' },
]

// Campos de cada proyecto:
//   demo: URL de la demo (web o página del Release). Vacío → el botón lleva al repo.
//   gif:  GIF de la demo; si está, PLAY abre el visor arcade dentro del portfolio.
//   apk:  descarga directa de la APK (apps Android).
//   kind: 'android' | 'web' → etiqueta de la tarjeta.
export const projects = [
  {
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
  },
  {
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
    title: 'QUITA-NODOS 3000',
    description: 'App de escritorio que elimina nodos de todos los XML de una carpeta usando reglas XPath.',
    tech: ['C#', 'XML', 'XPath'],
    difficulty: 3,
    color: 'cyan',
    demo: '',
    code: 'https://github.com/Gurizzo/Quita-nodos-3000',
  },
  {
    title: 'AHORRAR PAPEL',
    description: 'Une automáticamente los PDFs de una carpeta de Drive en un documento por mes, organizado por año.',
    tech: ['C#', 'PDF', 'Google Drive'],
    difficulty: 3,
    color: 'pink',
    demo: '',
    code: 'https://github.com/Gurizzo/Ahorrar-papel-paganza',
  },
  {
    title: 'PORTLOG V2',
    description: 'Proyecto obligatorio de la ORT: aplicación web con persistencia en base de datos mediante Entity Framework.',
    tech: ['ASP.NET', 'C#', 'Entity Framework'],
    difficulty: 3,
    color: 'yellow',
    demo: '',
    code: 'https://github.com/Gurizzo/PortLogV2',
  },
  {
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
