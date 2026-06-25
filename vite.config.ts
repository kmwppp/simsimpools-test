import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // react-helmet-async 는 CommonJS 라 SSR 번들에 포함시켜야 ESM 임포트 오류가 나지 않음
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    outDir: 'dist',
    // manualChunks 는 클라이언트 번들에만 적용 (SSR 빌드에서는 react 가 external 처리되어 충돌)
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
            },
          },
        },
  },
}))
