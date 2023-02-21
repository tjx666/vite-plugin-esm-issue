import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

import vitePluginHttp2Proxy from 'vite-plugin-http2-proxy';

export default defineConfig(async ({ mode }) => {
    return {
        plugins: [vue(),
            vitePluginHttp2Proxy({
                '/api/': {
                    target: 'https://xxxx/yyyy',
                },
            }),
        ]
    }
});
