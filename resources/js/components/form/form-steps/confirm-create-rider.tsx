import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

export default function ConfirmCreateRider() {
    return (
        <div className="success-content">
            <div className="success-icon"><i className="fas fa-check"></i></div>
            <h3 className="success-title">Application Submitted!</h3>

            <p className="success-text">Your rider application is now under review.</p>
            
            <div
                style={{
                    backgroundColor: "#fff3cd",
                    borderRadius: "10px",
                    padding: "15px",
                    marginBottom: "20px",
                    textAlign: "left"
                }}
            >
                <p style={{ marginBottom: "5px" }}>
                    <i className="fas fa-clock"></i> What's next?
                </p>

                <p style={{ fontSize: "13px" }}>
                    We'll review your documents within 24-48 hours.
                    You'll receive an email and SMS once your rider
                    account is verified and approved.
                </p>
            </div>

            <Link
                as={"button"}
                href={"/login/2"}
                className="btn btn-primary"
            >
                Go to Login{" "}
                <FontAwesomeIcon icon={["fas", "sign-in-alt"]} />
            </Link>
        </div>
    );
}