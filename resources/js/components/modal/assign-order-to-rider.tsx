import axios from "axios";
import { Rider } from "@agc/model";
import FormModalLayout from "@/layouts/form-modal-layout";

import "../../../css/order/assign-order-to-rider.css";
import { useEffect, useState } from "react";

interface AssignOrderToRiderModalProps {orderId: string, confirmOrder(orderId: string, riderId: string): void, closeModal(): void}

export default function AssignOrderToRiderModal({orderId, confirmOrder, closeModal}: AssignOrderToRiderModalProps) {
    const [selectedRider, setSelectedRider] = useState<Rider | undefined>();
    const [riders, setRiders] = useState<Rider[]>([]);
    
    function submit() {
        if (!selectedRider) {
            alert("Please select a rider");
            return;
        }

        confirmOrder(orderId, selectedRider.id);
        closeModal();
    }   

    async function fetchRiders() {
    try {
        const response = await axios.get("/rider/all");
        setRiders(response.data.riders);
    } catch (error) {
        console.error("Error fetching riders", error);
    }
}

useEffect(() => {
    fetchRiders();
}, []);

    return (
        <FormModalLayout
            method="put"
            link={`/order/confirm/${orderId}`}
            title="Assign Rider"
            submit={() => submit()}
            submitTitle="Confirm Order"
            handleClose={() => closeModal()}
        >
            <div className="rider-list">
                {riders.length === 0 && (<div className="empty-riders">No available riders</div>)}
                {riders.map((rider, idx) => (
                    <div
                        key={`rider-${idx}`}
                        className={`rider-card ${selectedRider?.id === rider.id? "selected-rider": ""}`}
                        onClick={() => setSelectedRider(rider)}
                    >
                        <div className="rider-avatar">{rider.plate_number}</div>
                        <div className="rider-info">
                            <h4>{rider.vehicle}</h4>
                            <p>{rider.contact_number}</p>
                        </div>
                        <div className="rider-select-indicator">{selectedRider?.id === rider.id && "Selected"}</div>
                    </div>
                ))}
            </div>
        </FormModalLayout>
    );
}