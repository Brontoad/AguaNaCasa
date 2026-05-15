import ModalLayout from "@/layouts/modal-layout";
import { Station } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { router } from "@inertiajs/react";

import "../../../css/modal.css";
import "../../../css/order/view-order.css";
export default function ViewStationModal({station, closeModal} : {station: Station, closeModal(): void}) {
    function approveStation() { router.put(`/station/approve`, {station_id: station.id}, {onSuccess: () => closeModal()}); }
    function createSystemFee() { router.post(`/system_fee`, {station_id: station.id}, {onSuccess: () => closeModal()}); }
    function suspendStation() { router.put(`/station/suspend`, {station_id: station.id, is_suspended: !station.is_suspended}, {onSuccess: () => closeModal()}); }

    return (<ModalLayout
        title="View Station"
        handleClose={() => closeModal()}
        actionButtons={[
            !station.is_approved ? <button key="approve-station" className="save-btn" onClick={approveStation}>Approve Station</button>
                : <button key="create-system-fee-station" className="save-btn" onClick={createSystemFee}>Add System Fee</button>,
            <button key="suspend-rider" className="cancel-btn" onClick={suspendStation}>{station.is_suspended ? `Reinstate Rider` : `Suspend Rider`}</button>
        ]}
    >
        <div className="order-info-grid">
            <div className="order-info-item"><label><FontAwesomeIcon icon={["fas", "store"]}/>Name</label><p>{station.name}</p></div>
            <div className="order-info-item"><label><FontAwesomeIcon icon={["fas", "phone"]}/>Contact Number</label><p>{station.contact_number}</p></div>
            <div className="order-info-item"><label><FontAwesomeIcon icon={["fas", "envelope"]}/>Email</label><p>{station.email}</p></div>
            {station.is_suspended && <div className="order-info-item full-width"><p style={{color: "red"}}>Suspended</p></div>}
            {!station.is_approved && <div className="order-info-item full-width"><p style={{color: "red"}}>Unverified</p></div>}
        </div>
    </ModalLayout>);
}