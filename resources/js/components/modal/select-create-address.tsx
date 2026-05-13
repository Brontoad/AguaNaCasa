import FormModalLayout from "@/layouts/form-modal-layout";
import ModalLayout from "@/layouts/modal-layout";
import { BARANGAYS } from "@/pages/config";
import { Address } from "@agc/model";

export interface SelectCreateAddressModalProps {addresses: Address[], userId: string, closeModal(): void}

function createAddress() {

}

export default function SelectCreateAddressModal({addresses, userId, closeModal} : SelectCreateAddressModalProps) {
    return (
        <FormModalLayout
            title="Add Address"
            submit={() => createAddress()}
            submitTitle="Add"
            handleClose={() => closeModal()}
            link="/address"
            method="post"
        >
            <input name="user_id" defaultValue={userId} hidden />

            <div className="location-search">
                <label>Search Location</label>
                <input type="text" id="locationSearch" placeholder="Enter address or landmark..."/>
            </div>
                
            <div className="map-container">
                <div id="map" className="map-placeholder">
                    <i className="fas fa-map-marked-alt"></i>
                    <p>Google Maps will load here</p>
                    <small>Enter your API key to enable maps</small>
                </div>
            </div>
            
            <div className="form-group">
                <label>Address Label</label>
                <input type="text" name="label" placeholder="e.g., Home, Work" />
            </div>
            
            <div className="form-group">
                <label>Barangay</label>
                <select id="addressBarangay">
                    {BARANGAYS.map((barangay, idx) => (
                        <option key={`barangay-${idx}`}>{barangay}</option>
                    ))}
                </select>
            </div>
            
            <div className="form-group">
                <label>Street Address</label>
                <textarea id="streetAddress" rows={2} placeholder="Enter complete address"></textarea>
            </div>
            
            <div className="form-group">
                <label><input type="checkbox" name="is_default" /> Set as default address</label>
            </div>
        </FormModalLayout>
    )
}