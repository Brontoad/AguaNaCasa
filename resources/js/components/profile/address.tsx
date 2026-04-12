import { Address } from "@agc/model";
import ProfileAddressCard from "../card/profile-address";
import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import CreateAddressModal from "../modal/create-address";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileAddress() {
    const {user} = usePage().props;
    const [addresses, setAddresses] = useState<Address[]>([]);

    const [createAddressModal, setCreateAddressModal] = useState<{open: boolean, userId: string}>({open: true, userId: ""})
    const [updateAddressModal, setUpdateAddressModal] = useState<{open: boolean, address?: Address}>({open: true, address: undefined})
    const [deleteAddressModal, setDeleteAddressModal] = useState<{open: boolean, address?: Address}>({open: true, address: undefined})

    function fetchAddresses(): Address[] {
        let fetchedAddresses: Address[] = [];
        return fetchedAddresses;
    }

    useEffect(() => setAddresses(fetchAddresses()), [])

    return (
        <div className="tab-pane">
            <div className="info-card">
                <div className="card-header">
                    <h3><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> Saved Addresses</h3>
                    <button className="edit-btn" onClick={() => setCreateAddressModal({open: true, userId: user.id})}>
                        <FontAwesomeIcon icon={["fas", "plus"]} /> Add New
                    </button>
                </div>
                
                <div className="addresses-grid">
                    {addresses.map((address, idx) => (
                        <ProfileAddressCard 
                            address={address}
                            isDefault={true}
                            openUpdateAddressModal={() => setUpdateAddressModal({
                                open: true,
                                address: address
                            })}
                            openDeleteAddressModal={() => setDeleteAddressModal({
                                open: true,
                                address: address
                            })}
                            key={`profile-address-card-${idx}`}
                    />))}
                    
                    <div className="add-address-card" onClick={() => setCreateAddressModal({open: true, userId: user.id})}>
                        <FontAwesomeIcon icon={["fas", "plus-circle"]} /><span>Add New Address</span>
                    </div>
                </div>
            </div>

            {createAddressModal.open && <CreateAddressModal userId={user.id} closeModal={() => setCreateAddressModal({open: true, userId: ""})}/>}
            {updateAddressModal.open && <CreateAddressModal userId={user.id} closeModal={() => setCreateAddressModal({open: true, userId: ""})}/>}
            {deleteAddressModal.open && <CreateAddressModal userId={user.id} closeModal={() => setCreateAddressModal({open: true, userId: ""})}/>}
        </div>
    );
}