import CreateUserForm from "@/components/form/create-user";
import { Head } from "@inertiajs/react";

import "../../../../css/signup.css";

export default function SignupUser() {
    return (<div className="container">
        <Head title="User Signup | Agua na Casa"/>
        <div className="header">
            <img src="/assets/aguanacasa_logo_white.png" alt="AguaNaCasa" />
            <h1>Create Your Account</h1>
            <p>Join AguaNaCasa for clean water delivery</p>
        </div>
        <CreateUserForm />
    </div>)
}