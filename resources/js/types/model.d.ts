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
        addresses: Address[],
        default_address?: Address
    }

    export interface Address extends Model {
        label: string,
        x: number,
        y: number,
        location: string,
        is_default: boolean
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

    export interface UserStation extends Station {
        distance: number,
        is_subscribed: boolean
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
        client: User,
        rider: Rider,
        rating: integer,
        status: string,
        total: number,
        is_subscription: boolean,
        delivery_fee: number,
        subscription: Subscription?,
        order_items: OrderItem[],
        order_histories: OrderHistory[]
    }

    export interface OrderItem extends Model {product: Product, product_name: string, price: number, quantity: number}

    export interface OrderHistory extends Model {description: string}

    export interface Product extends Model {name: string, price: number, is_available: boolean}
}