import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    base: "/Degree_Overview.github.io",
    plugins: [react()],
  }
})
