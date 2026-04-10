import { Form, useForm } from "@inertiajs/react";
import { ModalLayoutProps } from "./modal-layout";
import { useEffect } from "react";
import { login } from "@/routes";
import { RouteDefinition } from "@/wayfinder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormModalLayoutProps extends ModalLayoutProps {
    link: string
    method: "post" | "put",
    submit?: any,
    submitTitle?: string
}

export default function FormModalLayout({
    link,
    method = "post",
    children,
    title,
    submit = undefined,
    submitTitle,
    handleClose,
    actionButtons = []
}: FormModalLayoutProps) {
    return (
        <form action={link} method={method}>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>{title}</h3>
                        <button className="close-modal" onClick={handleClose}><FontAwesomeIcon icon={["fas", "times"]} /></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-actions">
                        {actionButtons}
                        {submit && submitTitle &&
                            <button className="save-btn" onClick={submit}>{submitTitle}</button>}
                        <button className="cancel-btn" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </form>
    );
}