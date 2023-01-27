import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': 'src/',
    },
  },
  test: {
    globals: true,
    setupFiles: ['src/__tests__/setup'],
    environment: 'jsdom',
  },
});
