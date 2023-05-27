// vite.config.ts
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({
    plugins: [
        react(),
        VitePWA({
              registerType: 'prompt',  

                workbox: {
                    globPatterns: ["**/*"],
                },
                // add this to cache all the
                // static assets in the public folder
                includeAssets: [
                    "**/*",
                ],
                manifest: {
                "theme_color": "#f69435",
                "background_color": "#f69435",
                "display": "standalone",     
                "scope": "/", 
                "start_url": "/",
                "description": "testing vite pwa",
                "name": "Senior Citizen Information System",
                "icons": [
                  {
                    "src": "./logo-white.png",
                    "short_name": "SCIS",
                        "sizes": "512x512",
                        "type": "image/png"
                    },
                ],
            },
        }),
    ],
});