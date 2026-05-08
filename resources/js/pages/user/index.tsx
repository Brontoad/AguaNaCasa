import DashboardLayout from "@/layouts/dashboard-layout";

import { Address, Order, Subscription } from "@agc/model";

import AddressCard from "@/components/card/address";
import Section from "@/components/section";
import OrderTable from "@/components/table/order";
import SubscriptionCard from "@/components/card/subscription";
import { useState } from "react";
import ViewSubscriptionModal from "@/components/modal/view-subscription";

import "../../../css/dashboard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface UserIndexProps {default_address: Address, subscriptions: Subscription[], recent_orders: Order[]}

export default function Index({default_address, subscriptions, recent_orders}: UserIndexProps) {
    const [viewSubscriptionModal, setViewSubscriptionModal] = useState<{open: boolean, subscription?: Subscription}>({open: false, subscription: undefined});

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <AddressCard defaultAddress={default_address}/>
                    
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "24px"
                    }}>     
                        <Section icon="clock" title="Recent Orders" />
                        <button className="edit-btn">View All <FontAwesomeIcon icon={["fas", "arrow-right"]} /></button>
                    </div>
                    <OrderTable orders={recent_orders} title="Recent" partial={true}/>
                    
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "24px"
                    }}> 
                        <Section icon="calendar-check" title="Active Subscriptions" />
                        <button className="edit-btn">View All <FontAwesomeIcon icon={["fas", "arrow-right"]} /></button>
                    </div>   
                    {subscriptions.map((subscription, idx) => (
                        <SubscriptionCard 
                            key={`active-subscription-${idx}`}
                            subscription={subscription}
                            viewSubscription={() => setViewSubscriptionModal({
                                open: true,
                                subscription: subscription
                            })}/>))}
                </div>
            </div>

            {viewSubscriptionModal.open && viewSubscriptionModal.subscription &&
                <ViewSubscriptionModal 
                    subscription={viewSubscriptionModal.subscription}
                    closeModal={() => setViewSubscriptionModal({
                        open: false,
                        subscription: undefined
                    })}/>}
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Home | Agua Na Casa"></DashboardLayout>