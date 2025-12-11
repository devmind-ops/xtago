import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.svg", "favicon.webp", "assets/logo.webp", "assets/favicon.webp"],
      // Use logo as source for generating proper PWA icons
      useCredentials: false,
      manifest: {
        name: "Xtago - Business Management",
        short_name: "Xtago",
        description: "Business management and accounting application",
        theme_color: "#FE8A00",
        background_color: "#151D26",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        id: "/",
        icons: [
          // Use SVG for scalable icons (no size mismatch warnings)
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any",
          },
          // Also include webp icons with actual sizes
          {
            src: "/assets/favicon.webp",
            sizes: "49x61",
            type: "image/webp",
            purpose: "any",
          },
          {
            src: "/assets/logo.webp",
            sizes: "115x58",
            type: "image/webp",
            purpose: "any",
          },
          // Maskable icons using SVG (scalable)
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable",
          },
        ],
        categories: ["business", "productivity", "finance"],
        shortcuts: [
          {
            name: "Dashboard",
            short_name: "Dashboard",
            description: "View dashboard",
            url: "/dashboard",
            icons: [{ src: "/favicon.svg", sizes: "any" }],
          },
          {
            name: "Products",
            short_name: "Products",
            description: "Manage products",
            url: "/products",
            icons: [{ src: "/favicon.svg", sizes: "any" }],
          },
          {
            name: "Accounting",
            short_name: "Accounting",
            description: "View accounting",
            url: "/accounting",
            icons: [{ src: "/favicon.svg", sizes: "any" }],
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,webp,png,svg,woff,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /\/api\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 5, // 5 minutes
              },
              networkTimeoutSeconds: 10,
            },
          },
        ],
        cleanupOutdatedCaches: true,
        clientsClaim: false,
        skipWaiting: false,
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});

