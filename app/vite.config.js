import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: "autoUpdate",
    includeAssets: ['Progressive_Web_Apps_Logo.png', '192.png', '512.png', 'robots.txt'],
    workbox: {
      navigateFallback: '/index.html',

      globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,json}'],

      runtimeCaching: [
        {
          // 🔥 Cachea la API de Rick and Morty
          urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/.*/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 // 1 día
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    manifest: {
      name: 'My Awesome App',
      short_name: 'ReactPWA',
      description: 'Un increíble aplicación React con PWA',
      theme_color: "#0f172a",
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',

      screenshots: [
        {
          src: '/Img/Progressive_Web_Apps_Logo.png',
          sizes: '1280x482',
          type: 'image/png',
          form_factor: 'narrow'
        },
        {
          src: '/Img/Progressive_Web_Apps_Logo.png',
          sizes: '1280x482',
          type: 'image/png',
          form_factor: 'wide'
        }
      ],
      icons: [
        {
          src: '/Img/192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/Img/512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
  ]
})

