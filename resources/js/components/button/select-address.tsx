import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectAddressBtn({openEditAddressModal} : {openEditAddressModal(): void}) {
    return (
        <button className="btn-edit-address address-action-btn" onClick={() => openEditAddressModal()}>
            <FontAwesomeIcon icon={["fas", "edit"]} /> Edit
        </button>
    );
}