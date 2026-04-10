import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectAddressBtn({openEditAddressModal} : {openEditAddressModal(): void}) {
    return (
        <button className="btn-edit-address" onClick={() => openEditAddressModal()}>
            <FontAwesomeIcon icon={["fas", "edit"]} /> Edit
        </button>
    );
}