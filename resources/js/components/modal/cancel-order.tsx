import FormModalLayout from "@/layouts/form-modal-layout";

import "../../../css/order/assign-order-to-rider.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CancelOrderModalProps {orderId: string, cancelOrder(reason: string): void, closeModal(): void}

export default function CancelOrderModal({orderId, cancelOrder, closeModal}: CancelOrderModalProps) {
    const [reason, setReason] = useState("");

    function submit() {
        const trimmedReason = reason.trim();
        if (trimmedReason.length === 0) {alert("Please input a reason."); return;}
        cancelOrder(trimmedReason);
        closeModal();
    }

    return (
        <FormModalLayout
            method="put"
            link={`/order/cancel/${orderId}`}
            title="Cancel Order"
            submit={() => submit()}
            submitTitle="Confirm Cancellation"
            handleClose={() => closeModal()}
        >
            <div className="form-group">
                <label><FontAwesomeIcon icon={["fas", "file-alt"]} /> Cancellation Reason</label>

                <div className="input-wrapper">
                    <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Enter the reason for cancellation" rows={4} required/>
                </div>
            </div>
        </FormModalLayout>
    );
}