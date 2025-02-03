import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        minify: process.env.APP_ENV === "production" ? "esbuild" : false,
        cssMinify: process.env.APP_ENV === "production",
    },
    plugins: [
        tailwindcss(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});