import ModalLayout from "@/layouts/modal-layout";
import { Station } from "@agc/model";

function closeModal() {

}

export default function ViewStationModal({station} : {station: Station}) {
    <ModalLayout
        title="View Station"
        handleClose={() => closeModal()}
    >
        <div className="info-grid">
            <div className="info-card">
                <h3>Contact Info</h3>
                <div>
                    <p><i className="fas fa-phone"></i>{station.contact_number}</p>
                    <p><i className="fas fa-envelope"></i>{station.email}</p>
                </div>
            </div>
            <div className="info-card">
                <h3><i className="fas fa-star"></i> Ratings</h3>
                <div>
                    <span className="big-rating">{station.rating.toFixed(1)}<i className="fas fa-star"></i></span>
                    <span>{station.reviews} reviews</span>
                </div>
            </div>
        </div>
    </ModalLayout>
}