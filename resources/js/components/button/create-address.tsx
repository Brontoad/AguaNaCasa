import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateAddressBtn({openCreateAddressModal} : {openCreateAddressModal(): void}) {
    return (
        <button className="create-address-btn" onClick={() => openCreateAddressModal()}>
            <FontAwesomeIcon icon={["fas", "plus-circle"]} style={{backgroundColor: "#19A7CE"}}/> Add Address
        </button>
    );
}