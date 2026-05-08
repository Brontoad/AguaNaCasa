import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateAddressBtn({openCreateAddressModal} : {openCreateAddressModal(): void}) {
    return (
        <button className="create-address-btn address-action-btn" onClick={() => openCreateAddressModal()}>
            <FontAwesomeIcon icon={["fas", "plus-circle"]}/> Add Address
        </button>
    );
}