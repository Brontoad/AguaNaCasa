import DashboardLayout from "@/layouts/dashboard-layout";

import { Address, Order, Subscription } from "@agc/model";

import AddressCard from "@/components/card/address";
import Section from "@/components/section";
import OrderTable from "@/components/table/order";
import SubscriptionCard from "@/components/card/subscription";

interface UserIndexProps {
    default_address: Address,
    subscriptions: Subscription[],
    recent_orders: Order[]
}

export default function Index({default_address, subscriptions, recent_orders}: UserIndexProps) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <AddressCard defaultAddress={default_address}/>
                    
                    <Section icon="clock" title="Recent Orders" />
                    <OrderTable orders={recent_orders} title="Recent" partial={true}/>
                    
                    <Section icon="calendar-check" title="Active Subscriptions" />
                    {subscriptions.map((subscription, idx) => (
                        <SubscriptionCard 
                            key={`active-subscription-${idx}}`}
                            subscription={subscription}/>))}
                </div>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Agua Na Casa"></DashboardLayout>