import StationCard from "@/components/card/station";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Product, Station as StationModel, UserStation } from "@agc/model";
import "../../../css/dashboard.css";
import "../../../css/station/card.css";
import { useState } from "react";
import  CreateOrderModal from "@/components/modal/create-order";
import { router } from "@inertiajs/react";
import CreateSubscriptionModal from "@/components/modal/create-subscription";

export default function Station({stations, products} : {stations: UserStation[], products: Product[]}) {
    const [createOrderModal, setCreateOrderModal] = useState<{open: boolean, station: UserStation | undefined, products: Product[]}>({open: false, station: undefined, products: []});
    const [createSubscriptionModal, setCreateSubscriptionModal] = useState<{open: boolean, station: StationModel | undefined}>({open: false, station: undefined});

    function openCreateOrderModal(station: UserStation) {
        setCreateOrderModal({open: true, station, products: []});

        router.get("/user/station", { station_id: station.id }, {
            preserveState: true, preserveScroll: true,
            only: ["products"],
            onSuccess: (page: any) => { setCreateOrderModal(prev => ({ ...prev, products: page.props.products })); }
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Section title="Stations" icon="store"/>
                    <div className="station-cards-grid">
                        {stations.map((station, idx) => (<StationCard key={`station-card-${idx}`} station={station} 
                            createOrder={(station) => openCreateOrderModal(station)} 
                            subscribe={(station) => setCreateSubscriptionModal({open: true, station: station})}
                        />))}
                    </div>
                </div>
            </div>

            {createOrderModal.open && createOrderModal.station && <CreateOrderModal 
                station={createOrderModal.station} products={createOrderModal.products} 
                closeModal={() => setCreateOrderModal({open: false, station: undefined, products: []})}/>}
            {createSubscriptionModal.open && createSubscriptionModal.station && <CreateSubscriptionModal 
                station={createSubscriptionModal.station}
                closeModal={() => setCreateSubscriptionModal({open: false, station: undefined})}/>}
        </div>
    );
}

Station.layout = (page: any) => <DashboardLayout page={page} title="Station | Agua Na Casa"></DashboardLayout>