import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/agua_na_casa.css';
// import { initializeTheme } from './hooks/use-appearance';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

console.log("KLSAKLSKAS");
createInertiaApp({
    resolve: async (name: string) => {
        console.log('Requested page:', name);

        const pages = import.meta.glob('./pages/**/*.tsx');

        console.log('Available pages:', Object.keys(pages));

        const path = `./pages/${name}.tsx`;

        console.log('Resolved path:', path);

        const page = pages[path];

        console.log('Matched page:', page);

        if (!page) {
            throw new Error(`Page not found: ${path}`);
        }

        return resolvePageComponent(path, pages);
    },

    setup({ el, App, props }) {
        createRoot(el).render(
            <StrictMode>
                <App {...props} />
            </StrictMode>
        );
    },
});

library.add(fas);
