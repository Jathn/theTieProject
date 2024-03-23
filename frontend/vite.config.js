import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import legacy from '@vitejs/plugin-legacy';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/theTieProject/',
});
