import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api':'http://localhost:3000' // append /api in req and forward to  backend server and remove this 
    } // this proxy makes that server think url reuests from /3000 only and solve cors 

  },
  plugins: [react()],
})
