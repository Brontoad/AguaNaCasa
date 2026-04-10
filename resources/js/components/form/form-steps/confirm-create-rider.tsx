function goToLogin() {}

export default function ConfirmCreateRider() {
    return (
        <div className="success-content">
            <div className="success-icon"><i className="fas fa-check"></i></div>
            <h3 className="success-title">Application Submitted!</h3>
            <p className="success-text">Your rider application is now under review.</p>
            
            <div style={{
                backgroundColor: "#fff3cd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                textAlign: "left"}}>
                <p style={{backgroundColor: "#856404", marginBottom: "5px"}}><i className="fas fa-clock"></i> What's next?</p>
                <p style={{backgroundColor: "#666", fontSize: "13px"}}>
                    We'll review your documents within 24-48 hours. You'll receive an email and SMS once your account is verified.
                </p>
            </div>

            <button className="btn btn-primary" onClick={() => goToLogin()}>Go to Login <i className="fas fa-sign-in-alt"></i></button>
        </div>
    );
}