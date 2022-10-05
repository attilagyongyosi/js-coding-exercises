import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            provider: 'c8' // or 'c8'
        },
    },
});
