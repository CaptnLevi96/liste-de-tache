import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Nécessaire pour accéder au serveur depuis l'extérieur
    open: true, // Ouvre automatiquement le navigateur au démarrage
  },
})
