import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

import { baseVitestConfig } from '../../vitest.base.config';

export default defineConfig({
  ...baseVitestConfig,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/.{idea,git,cache,output,temp}/**', './tests/**'],
  },
  resolve: {
    alias: {
      '@susu/headless-commerce': path.resolve(__dirname),
    },
  },
});
