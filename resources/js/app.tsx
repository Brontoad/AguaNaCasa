import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React, { StrictMode } from 'react';
import { Container, createRoot } from 'react-dom/client';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeTheme } from './hooks/use-appearance';

const appName = (import.meta as any).env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title: string) => (title ? `${title} - ${appName}` : appName),
    resolve: (name: string) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            (import.meta as any).glob('./pages/**/*.tsx'),
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

// This will set light / dark mode on load...
initializeTheme();
