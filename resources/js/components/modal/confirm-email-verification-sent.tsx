import ModalLayout from "@/layouts/modal-layout";

function closeModal() {}

function resendEmailFromModal() {}

export default function ConfirmEmailVerificationSentModal() {
    return (
        <ModalLayout
            title="Add Address"
            submitTitle="Add"
            handleClose={() => closeModal()}
        >
            <div className="modal-icon"><i className="fas fa-envelope-open-text"></i></div>
            <h3>Verify Your Email</h3><p>We've sent a verification link to:</p>
            <div className="modal-email" id="modalEmail"></div>
            <p style={{fontSize: "14px"}}>Please check your inbox and click the verification link to continue.</p>
            <div style={{marginTop: "20px"}}><button className="btn btn-primary" onClick={() => closeModal()}>I Understand</button></div>
            <div style={{marginTop: "15px"}}><span className="resend-link" onClick={() => resendEmailFromModal()}>Resend email</span></div>
        </ModalLayout>
    )
}