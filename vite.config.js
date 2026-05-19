import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/SMH-Hospital"
  // server: {
  //   allowedHosts: true // Ye har tarah ke tunnel host ko allow kar dega
  // }
})
