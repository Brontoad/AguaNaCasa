export default function Toast({message} : {message: string}) {
    return (
        <div className="toast-notification" id="toastNotification">
            <i className="fas fa-check-circle"></i> <span id="toastMessage">{message}</span>
        </div>
    )
}