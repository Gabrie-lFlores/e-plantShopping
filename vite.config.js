import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Gabrie-lFlores/e-plantShopping.git",
  plugins: [react()],
})
