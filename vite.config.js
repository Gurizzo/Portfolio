import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: ruta donde se sirve en GitHub Pages (https://gurizzo.github.io/Portfolio/)
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
