import { ACCOUNT_ROLE } from "@/pages/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function LoginStation() {
    const [useEmail, setUseEmail] = useState(true);

    return (
        <div className="login form">
            <center><img src="/assets/aguanacasa_logo_blue.png" width="180px"/></center>
            <header>Station Login</header>

            <div className="login-toggle">
                <div className={`toggle-option ${useEmail ? 'active' : ''}`} onClick={() => setUseEmail(true)}> <FontAwesomeIcon icon={["fas", "envelope"]} /> Email</div>
                <div className={`toggle-option ${!useEmail ? 'active' : ''}`} onClick={() => setUseEmail(false)}> <FontAwesomeIcon icon={["fas", "phone-alt"]} /> Mobile</div>
            </div>

            <form action={"/login/station"}>
                <input name="use_email" defaultValue={useEmail ? 1 : 0} hidden/>
                <input name="role" defaultValue={ACCOUNT_ROLE.STATION} hidden/>
                <div className="login-field-wrapper">
                    {useEmail ? <input type="email" name="email" placeholder="Enter your email" />
                            : <input type="tel" name="contact_number" placeholder="Enter your phone number" />}
                </div>
                <input type="password" id="password" placeholder="Enter your password" />
                <Link href="/login" as={"button"} className="button">Login</Link>
            </form>
        </div>
    );
}