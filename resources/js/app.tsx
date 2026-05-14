import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/agua_na_casa.css';
// import { initializeTheme } from './hooks/use-appearance';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

createInertiaApp({
    resolve: (name: string) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            (import.meta as any).glob('./pages/**/*.{tsx,ts}'),
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <StrictMode>
                <App {...props} />
            </StrictMode>
        );
    },
});

library.add(fas);
