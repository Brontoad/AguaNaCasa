import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { Container, createRoot } from 'react-dom/client';
import '../css/agua_na_casa.css';
// import { initializeTheme } from './hooks/use-appearance';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

createInertiaApp({
    resolve: (name: string) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.{tsx,ts}'),
        ),
    setup({ el, App, props }: {el: Container, App: any, props: any}) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

library.add(fas);
