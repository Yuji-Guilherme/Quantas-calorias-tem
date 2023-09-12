import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }, {find: 'process', replacement: 'import.meta'}]
    },
    plugins: [react()],
    define: {
        'process.env.VITE_REACT_API_URL': JSON.stringify(process.env.VITE_REACT_API_URL),
    }
  })
};
