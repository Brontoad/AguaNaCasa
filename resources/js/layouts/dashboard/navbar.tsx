export default function Navbar() {
    return (
        <ul className="navbar">
            <li className="nav-item"><a href="home.html">Home</a></li>
            <li className="nav-item"><a href="logs.html">Logs</a></li>
            {/* One-Time Delivery, Subscription */}
            <li className="nav-item"><a href="logs.html">Services</a></li>
            {/* Opportunities, Partnership */}
            <li className="nav-item"><a href="logs.html">Career</a></li>
            <li className="nav-item"><a href="users.html">Users</a></li>
            <li className="nav-item"><a href="store.html">Store</a></li>
            <li className="nav-item"><a href="store.html">My Account</a></li>
            <li className="nav-item"><a href="index.html">Sign In</a></li>
            <li className="nav-item"><a href="index.html">Logout</a></li>
        </ul>
    )
}