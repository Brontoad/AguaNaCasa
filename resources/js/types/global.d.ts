export interface User {
    name: string
}

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            user: User;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}