import FormModalLayout from "@/layouts/form-modal-layout";
import ModalLayout from "@/layouts/modal-layout";
import { BARANGAYS } from "@/pages/config";
import { Address } from "@agc/model";
import { createPortal } from "react-dom";
import LocationPicker from "../location-picker";
import { useState } from "react";
export interface CreateAddressModalProps {addresses: Address[], userId: string, closeModal(): void}

function createAddress() {}

export default function CreateAddressModal({addresses, userId, closeModal} : CreateAddressModalProps) {
    const [selectedLocation, setSelectedLocation] = useState<{
        label: string;
        x: number;
        y: number;
        location: string;
    } | null>(null);

    return createPortal(
        <FormModalLayout
            title="Add Address"
            submit={() => createAddress()}
            submitTitle="Add"
            handleClose={() => closeModal()}
            link="/address"
            method="post"
        >
            <input name="user_id" defaultValue={userId} hidden />

            <div className="form-group"><LocationPicker onAddressSelect={(addr) => setSelectedLocation(addr)}/></div>

            <input name="x" value={selectedLocation?.x ?? ''} hidden readOnly/>
            <input name="y" value={selectedLocation?.y ?? ''} hidden readOnly/>
            <input name="location" value={selectedLocation?.location ?? ''} hidden readOnly/>

            <div className="form-group">
                <label>Address Label</label>
                <input type="text" name="label" placeholder="e.g., Home, Work"/>
            </div>

            <div className="form-group"><label><input type="checkbox" name="is_default" />Set as default address</label></div>
        </FormModalLayout>,
        document.body
    )
}