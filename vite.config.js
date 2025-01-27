import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/fast-furious-project",
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
   },
})