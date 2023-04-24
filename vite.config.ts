import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from "vite-plugin-vue-type-imports";
import typescript2 from "rollup-plugin-typescript2"
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/index.ts"),
            name: "auth-ui-vue",
            // the proper extensions will be added
            fileName: (format) => `auth-ui-vue.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [vue(), VueTypeImports(), typescript2({
        check: false,
        include: ["src/components/**/*.vue", 'src/index.ts'],
        tsconfigOverride: {
            compilerOptions: {
                outDir: "dist",
                sourceMap: true,
                declaration: true,
                declarationMap: true,
            },
        },
        exclude: ["vite.config.ts"]
    })],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
