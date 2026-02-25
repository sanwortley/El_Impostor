import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'favicon-192-pwa.png', 'favicon-512.png'],
      manifest: {
        name: 'El Impostor',
        short_name: 'El Impostor',
        description: 'Juego de fiesta tipo El Impostor para jugar con amigos en un solo celular.',
        theme_color: '#121212',
        background_color: '#121212',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        lang: 'es',
        icons: [
          {
            src: '/favicon-192-pwa.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        categories: ['games', 'entertainment'],
      },
      workbox: {
        // Cache all static assets
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // Don't cache API/socket calls
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/socket\.io/],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
