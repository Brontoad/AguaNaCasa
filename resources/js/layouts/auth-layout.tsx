import { Head } from "@inertiajs/react";
import "resources/css/auth.css";

export default function AuthLayout({
    page, 
    header,
    title
}: {
    page: any,
    header: string,
    title: string
}) {
    return (
        <div className="container">
            <Head title={title}></Head>
            <div className="form">
                <center> <img src="aguanacasa_logo_blue.png" width="200px" /></center>
                <header>{header}</header>

                {page}
            </div>
        </div>
    );
}