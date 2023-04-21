import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mkcert()],
  server: {
    port: 3000,
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem')
    },
  },
});
