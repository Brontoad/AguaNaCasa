import FormModalLayout from "@/layouts/form-modal-layout";
import { Address } from "@agc/model";
import { createPortal } from "react-dom";
import LocationPicker, { LeafletAddress } from "../location-picker";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export interface CreateAddressModalProps {
    addresses: Address[],
    userId: string,
    closeModal(): void
}

export default function CreateAddressModal({addresses, userId, closeModal}: CreateAddressModalProps) {
    const [selectedLocation, setSelectedLocation] = useState<LeafletAddress | null>(null);

    const { data, setData, post, processing } = useForm({
        user_id: userId,
        x: 0.0,
        y: 0.0,
        location: "",
        label: "",
        is_default: false
    });

    function createAddress(e: any) {
        e.preventDefault();

        if (!selectedLocation) {
            alert("Please select a location.");
            return;
        }

        setData({
            ...data,
            x: selectedLocation.x,
            y: selectedLocation.y,
            location: selectedLocation.location
        });

        post("/address");
    }

    return createPortal(
        <FormModalLayout
            title="Add Address"
            submit={createAddress}
            submitTitle={processing ? "Adding..." : "Add"}
            handleClose={() => closeModal()}
            link="/address"
            method="post"
        >
            <input name="user_id" value={data.user_id} hidden readOnly />

            <div className="form-group">
                <LocationPicker onAddressSelect={(addr) => {
                    setSelectedLocation(addr);
                    setData({
                        ...data,
                        x: addr.x,
                        y: addr.y,
                        location: addr.location
                    });
                }}/>
            </div>

            {selectedLocation && (
                <div style={{ fontSize: "12px", color: "#555", fontStyle: "italic", marginBottom: "10px"}}>
                    Selected: {selectedLocation.location}
                </div>
            )}

            <input name="x" value={data.x} hidden readOnly />
            <input name="y" value={data.y} hidden readOnly />
            <input name="location" value={data.location} hidden readOnly />

            <div className="form-group">
                <label>Address Label</label>
                <input
                    type="text"
                    value={data.label}
                    onChange={(e) => setData("label", e.target.value)}
                    placeholder="e.g. Home, Work"
                    required
                />
            </div>

            <div className="form-group">
                <label style={{ display: "flex", alignItems: "center", gap: "10px"}}>
                    <input
                        type="checkbox"
                        checked={data.is_default}
                        onChange={(e) => setData("is_default", e.target.checked)}
                    />
                    Set as default address
                </label>
            </div>
        </FormModalLayout>,
        document.body
    );
}