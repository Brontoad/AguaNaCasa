/**
 * Subscription
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 13, 2026
 * Last Edited at:  April 6, 2026
 * Last Tested at:  N/A
 */
import SubscriptionCard from "@/components/card/subscription";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";

import { Subscription as SubscriptionModel } from "@agc/model";

import "resources/css/subscription.css";

export default function Subscription({subscriptions} : {subscriptions: SubscriptionModel[]}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">                    
                    <Section title="Subscriptions" icon="truck-droplet" />
                    <div id="subscribe-page" className="page">
                        {subscriptions.map((subscription, idx) => 
                            <SubscriptionCard key={`subscription-card-${idx}`} subscription={subscription}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Subscription.layout = (page: any) => <DashboardLayout page={page} title="Subscription | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.