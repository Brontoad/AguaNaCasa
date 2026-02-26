import { Head } from "@inertiajs/react";

/**
 * Admin Login
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Tested at:  N/A
 */
export default function AdminLogin() {
    return (
        <>
            <Head title="Admin Login | Agua Na Casa"></Head>
            <div className="login-form-container">
                <div>
                    <center> <img src="aguanacasa_logo_blue.png" width="200px"></img></center>
                    <header>Admin Login</header>
                    <form id="admin-login-form">
                        <input type="text" id="email" placeholder="Email"></input>
                        <input type="password" id="password" placeholder="Password"></input>
                        <input type="button" className="button" value="Login"></input>
                    </form>
                </div>
            </div>
        </>
    );
}

// Agua Na Casa(c), 2026.