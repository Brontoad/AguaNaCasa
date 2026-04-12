import { Address } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileAddressCard({address, isDefault, openUpdateAddressModal, openDeleteAddressModal} : 
    {address: Address, isDefault: boolean, openUpdateAddressModal(): void, openDeleteAddressModal(): void}) {
    return (
        <div className={`address-card ${isDefault ? 'default' : ''}`}>
            <div className="address-label">
                <h4>{address.label}</h4>
                {isDefault ?? <span className="default-badge">Default</span>}
            </div>
            <div className="address-details">
                {address.city}
            </div>
            <div className="address-actions">
                <button onClick={() => openUpdateAddressModal()}><FontAwesomeIcon icon={["fas", "edit"]} /> Edit</button>
                <button className="delete" onClick={() => openDeleteAddressModal()}><FontAwesomeIcon icon={["fas", "trash"]} /> Delete</button>
            </div>
        </div>
    );
}