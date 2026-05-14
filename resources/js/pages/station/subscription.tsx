/**
 * Subscription
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 13, 2026
 * Last Edited at:  April 11, 2026
 * Last Tested at:  N/A
 */
import SubscriptionCard from "@/components/card/subscription";
import ViewSubscriptionModal from "@/components/modal/view-subscription";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";

import { Subscription as SubscriptionModel } from "@agc/model";
import { useState } from "react";

import "../../../css/dashboard.css";

export default function Subscription({subscriptions} : {subscriptions: SubscriptionModel[]}) {
    const [viewSubscriptionModal, setViewSubscriptionModal] = useState<{open: boolean, subscription?: SubscriptionModel}>({open: false, subscription: undefined});
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">                    
                    <Section title="Subscriptions" icon="truck-droplet" />
                        {subscriptions.map((subscription, idx) => 
                            <SubscriptionCard key={`subscription-card-${idx}`} 
                                subscription={subscription}
                                viewSubscription={() => setViewSubscriptionModal({
                                open: true,
                                subscription: subscription
                            })}/>
                        )}
                </div>
                {viewSubscriptionModal.open && viewSubscriptionModal.subscription &&
                <ViewSubscriptionModal 
                    subscription={viewSubscriptionModal.subscription}
                    closeModal={() => setViewSubscriptionModal({
                        open: false,
                        subscription: undefined
                    })}/>}
            </div>
        </div>
    );
}

Subscription.layout = (page: any) => <DashboardLayout page={page} title="Subscription | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.