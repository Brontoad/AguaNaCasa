import { Head } from "@inertiajs/react";

import "../../../../css/signup.css";
import CreateRiderForm from "@/components/form/create-rider";

export default function SignupRider() {
    return (<div className="container">
        <Head title="Rider Signup | Agua na Casa"/>
        <div className="header">
            <img src="/assets/aguanacasa_logo_white.png" alt="AguaNaCasa" />
            <h1>Create Your Account</h1>
            <p>Join AguaNaCasa for clean water delivery</p>
        </div>
        <CreateRiderForm />
    </div>)
}