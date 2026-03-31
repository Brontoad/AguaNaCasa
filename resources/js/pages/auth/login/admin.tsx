import AuthLayout from "@/layouts/auth-layout";
import { Head } from "@inertiajs/react";

/**
 * Admin Login
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  March 14, 2026
 * Last Tested at:  N/A
 */
export default function Admin() {
    return (
        <form id="admin-login-form">
            <input type="text" id="email" placeholder="Email"></input>
            <input type="password" id="password" placeholder="Password"></input>
            <input type="button" className="button" value="Login"></input>
        </form>
    );
}

Admin.layout = (page: any) => <AuthLayout title="Admin Login | Agua Na Casa" page={page} header="Login"></AuthLayout>

// Agua Na Casa(c), 2026.