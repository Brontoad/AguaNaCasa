import { Head } from "@inertiajs/react";

import "../../../../css/signup.css";
import CreateStationForm from "@/components/form/create-station";

export default function SignupRider() {
    return (<div className="container">
        <Head title="Station Signup | Agua na Casa"/>
        <div className="header">
            <img src="/assets/aguanacasa_logo_white.png" alt="AguaNaCasa" />
            <h1>Register Your Water Station</h1>
            <p>Partner with AguaNaCasa and grow your business</p>
        </div>
        <CreateStationForm />
    </div>)
}