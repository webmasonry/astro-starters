import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cssDebugger from "@webmasonry/astro-css-debugger";
import { defineConfig } from "astro/config";
import icons from "astro-icons";

export default defineConfig({
  integrations: [cssDebugger(), icons(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
