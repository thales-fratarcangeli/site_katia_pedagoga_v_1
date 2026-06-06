import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/site_katia_pedagoga_v_1/',
  plugins: [react(), tailwindcss()],
})
