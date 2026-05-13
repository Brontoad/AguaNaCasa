import { Rider, Station, User } from "@agc/model";

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: {
                user?: User;
                station?: Station;
                rider?: Rider;
                admin?: User;
                role: string
            };
            toast?: {
                success: string;
                message: string;
            };
            [key: string]: unknown;
        };
    }
}