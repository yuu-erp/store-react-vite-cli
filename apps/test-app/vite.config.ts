import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@@packages': path.resolve(__dirname, '../../packages')
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name!.split('.')[1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType!)) {
            extType = 'img'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: path.resolve(__dirname, 'assets/js/[name]-[hash].js'),
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    outDir: './build'
  }
})
