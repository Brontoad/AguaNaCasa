import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ModalLayoutProps {
    children: any,
    title: string,
    handleClose(): void,
    actionButtons?: React.ReactNode[]
}

export default function ModalLayout({
    children,
    title,
    handleClose,
    actionButtons = []
}: ModalLayoutProps) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="close-modal" onClick={handleClose}><FontAwesomeIcon icon={["fas", "times"]} /></button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-actions">
                    {actionButtons}
                    <button className="cancel-btn" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}