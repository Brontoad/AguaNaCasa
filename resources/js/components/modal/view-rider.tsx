import ModalLayout from "@/layouts/modal-layout";
import { Rider } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { router } from "@inertiajs/react";

import "../../../css/modal.css";
import "../../../css/order/view-order.css";
export default function ViewRiderModal({rider, closeModal} : {rider: Rider, closeModal(): void}) {
    function approveRider() { router.put(`/rider/approve`, {rider_id: rider.id}, {onSuccess: () => closeModal()}); }
    function suspendRider() { router.put(`/rider/suspend`, {rider_id: rider.id, is_suspended: !rider.is_suspended}, {onSuccess: () => closeModal()}); }

    return (<ModalLayout
        title="View Rider"
        handleClose={() => closeModal()}
        actionButtons={[
            !rider.is_approved && <button key="approve-rider" className="save-btn" onClick={approveRider}>Approve Rider</button>,
            <button key="suspend-rider" className="cancel-btn" onClick={suspendRider}>{rider.is_suspended ? `Reinstate Rider` : `Suspend Rider`}</button>
        ]}
    >
        <div className="order-info-grid">
            <div className="order-info-item"><label><FontAwesomeIcon icon={["fas", "numpad"]}/>Plate Number</label><p>{rider.plate_number}</p></div>
            <div className="order-info-item"><label><FontAwesomeIcon icon={["fas", "car"]}/>Vehicle</label><p>{rider.vehicle}</p></div>
            <div className="order-info-item"><label><FontAwesomeIcon icon={["fas", "phone"]}/>Contact Number</label><p>{rider.contact_number}</p></div>
            {rider.is_suspended && <div className="order-info-item full-width"><p style={{color: "red"}}>Suspended</p></div>}
            {!rider.is_approved && <div className="order-info-item full-width"><p style={{color: "red"}}>Unverified</p></div>}
        </div>
    </ModalLayout>);
}