import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      VITE_APP_TMDB_TOKEN: process.env.VITE_APP_TMDB_TOKEN,
    },
  };
});