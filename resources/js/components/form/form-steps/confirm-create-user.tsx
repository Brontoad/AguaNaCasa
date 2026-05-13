import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserCredentials } from "../create-user";
import { Link } from "@inertiajs/react";

export default function ConfirmCreateUser({userCredentials}: {userCredentials: UserCredentials}) {
    return (
      <div className="success-content">
          <div className="success-icon"><FontAwesomeIcon icon={["fas", "check"]} /></div>
          <h3 className="success-title">Welcome to AguaNaCasa!</h3>
          <p className="success-text">Your account has been successfully created.</p>
          
          <div className="info-card">
            <div className="info-item">
              <FontAwesomeIcon icon={["fas", "user"]} />
              <span id="displayName">Username: {`${userCredentials.username}`}</span>
              <span id="displayName">Full Name: {`${userCredentials.first_name} ${userCredentials.middle_initial}. ${userCredentials.last_name}`}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
              <span id="displayAddress">{userCredentials.address.location}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
              <span id="displayEmail">{userCredentials.email}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={["fas", "phone"]} />
              <span id="displayPhone">{userCredentials.contact_number}</span>
            </div>
          </div>

          <Link as={"button"} className="btn btn-primary" href={"/login/user"}>Continue <FontAwesomeIcon icon={["fas", "sign-in-alt"]} /></Link>
        </div>
    );
}