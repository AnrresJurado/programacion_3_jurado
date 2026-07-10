// vite.config.ts
import path from "path" // 🟢 Añade este import
import { defineConfig } from 'vite'
import react       from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  /* 🟢 Añade la resolución de alias aquí */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})