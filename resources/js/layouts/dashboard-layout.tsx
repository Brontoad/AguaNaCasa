import Navbar from "./dashboard/navbar";

export default function DashboardLayout() {
    return (
        <div className="flex">
            <a href="index.html"><img src="aguanacasa_logo_white.png" className="h-60 w-60" id="agua-na-casa-logo-white"></img></a>
            <Navbar></Navbar>
        </div>
    )
}