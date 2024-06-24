import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './apps/_template/vitest.config.ts',
  './packages/_template/vitest.config.ts',
  './packages/array/vitest.config.ts',
  './vitest.base.config.ts',
]);
