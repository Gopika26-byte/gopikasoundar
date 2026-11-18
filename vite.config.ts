import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Published at https://gopika26-byte.github.io/gopikasoundar/
const pagesBase = '/gopikasoundar/'

export default defineConfig(({ command }) => {
  const publishing = command === 'build' || process.env.npm_lifecycle_event === 'preview'
  return {
    base: publishing ? pagesBase : '/',
    plugins: [react(), tailwindcss()],
  }
})
