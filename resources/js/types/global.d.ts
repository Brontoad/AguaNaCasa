declare module '@agc/model' {
    interface Model {
        id: string,
        created_at: string,
        updated_at: string
    }

    export interface User extends Model {
        username: string,
        first_name: string,
        middle_initial: string,
        last_name: string,
        role: string,
        email: string,
        contact_number: string,
        addresses: Address[]
    }

    export interface Address extends Model {
        label: string,
        suburb: string,
        postal_code: string,
        county: string,
        city: string,
        country: string,
    }

    export interface Station extends Model {
        name: string,
        contact_number: string,
        email: string,
        rating: number,
        reviews: number,
        address: Address,
        status: string,
        products: Product[]
    }

    export interface Subscription extends Model {
        estimated_time_of_delivery: string,
        delivery_days: string[],
        orders: Order[],
        station: Station
    }

    export interface Rider extends Model {
        name: string,
        plate_number: string,
        contact_number: string,
        vehicle: string,
        license: string
        station: Station
    }

    export interface Order extends Model {
        station: Station,
        rating: integer,
        status: string,
        total: number,
        subscription: Subscription?,
        order_items: OrderItem[],
        order_histories: OrderHistory[]
    }

    export interface OrderItem extends Model {product: Product, quantity: number}

    export interface OrderHistory extends Model {description: string}

    export interface Product extends Model {name: string, price: number, is_available: boolean}
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