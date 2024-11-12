import { build } from 'vite';

await build({
    configFile: false,
    build: {
        lib: {
            entry: "./src/seed-pages.ts",
            name: "seed-pages",
            fileName: "seed-pages",
            formats: ["es"],
        },
        emptyOutDir: false,
        rollupOptions: {
            external: ['vue', "@faker-js/faker"],
        },
    },
})

await build({
    configFile: false,
    build: {
        lib: {
            entry: "./src/fakeur/index.ts",
            name: "fakeur",
            fileName: "fakeur/index",
            formats: ["es"],
        },
        emptyOutDir: false,
        rollupOptions: {
            external: ['vue', "@faker-js/faker"],
        },
    },

});