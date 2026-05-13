import { useState } from "react";
import { usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Address } from "@agc/model";

import CreateAddressBtn from "../button/create-address";
import FindStationBtn from "../button/find-station";
import SelectAddressBtn from "../button/select-address";
import CreateAddressModal from "../modal/create-address";

export default function AddressCard({defaultAddress}: {defaultAddress?: Address}) {
    const {auth} = usePage().props;
    const [addressModal, setAddressModal] = useState<{open: boolean, addresses: Address[], userId: string}>({
        open: false,
        addresses: [],
        userId: auth.user!.id ?? ''
    });

    function fetchAddresses(): Address[] { return []; }

    return (
        <div className="address-card">
            {defaultAddress ? (
                    <div className="address-info">
                        <div className="address-icon"><FontAwesomeIcon icon={["fas", "location-dot"]} /></div>

                        <div className="address-main">
                            <div className="address-text">{defaultAddress?.location ?? "No address selected"}</div>
                            <div className="address-meta">
                                <span className="address-label"><FontAwesomeIcon icon={["fas", "tag"]} />{defaultAddress?.label ?? "N/A"}</span>
                                {defaultAddress.is_default ? <span className="default-badge">Default</span> : <></>}
                            </div>
                        </div>
                    </div>
            ) : (
                <div className="address-info">
                    <div className="address-icon"><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /></div>
                    <p>No delivery address added yet</p>
                </div>
            )}

            {defaultAddress ? (
                <div className="index-address-actions">
                    <FindStationBtn />
                    <SelectAddressBtn
                        openEditAddressModal={() =>
                            setAddressModal({
                                open: true,
                                addresses: fetchAddresses(),
                                userId: auth.user!.id,
                            })
                        }
                    />
                </div>
            ) : (
                <CreateAddressBtn
                    openCreateAddressModal={() =>
                        setAddressModal({
                            open: true,
                            addresses: fetchAddresses(),
                            userId: auth.user!.id,
                        })
                    }
                />
            )}

            {addressModal.open && (
                <CreateAddressModal
                    addresses={addressModal.addresses}
                    userId={addressModal.userId}
                    closeModal={() =>
                        setAddressModal({
                            open: false,
                            addresses: [],
                            userId: auth.user!.id,
                        })
                    }
                />
            )}
        </div>
        );
}