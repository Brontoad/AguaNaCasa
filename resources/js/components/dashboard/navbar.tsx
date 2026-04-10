import { ACCOUNT_ROLE } from "@/pages/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePage } from "@inertiajs/react"

/**
 * User, Rider, Station, Admin
 * 
 * Logo
 * Home
 * About
 * Stations
 *  = user: find nearest station, order, subscribe
 *  = rider: view stations with orders from
 *  = admin: station management
 * Orders
 *  = user: create order, view orders, manage orders
 *  = station: view order, manage orders
 *  = rider: track order, manage order
 *  = admin: order monitoring
 * Subscriptions:
 *  = user: view subscriptions, unsubscribe
 *  = station: view subscribers, manage subscriptions
 *  = rider: track subscription, create order from subscription
 *  = admin: subscription monitoring
 * Product
 *  = station: edit product
 *  = admin: product management
 * Users
 *  = admin: user management
 * Profile:
 *  Manage Addresses
 *  
 */
interface NavbarTab {
    name: string,
    link: string,
    notAllowedTypes: string[]
}

const navbarTabs: NavbarTab[] = [
    {name: "Home", link: "/", notAllowedTypes: []},
    {name: "About", link: "/about", notAllowedTypes: []},
    {name: "Stations", link: "/station", notAllowedTypes: [ACCOUNT_ROLE.STATION]},
    {name: "Orders", link: "/order", notAllowedTypes: []},
    {name: "Subscriptions", link: "/subscription", notAllowedTypes: []},
    {name: "Products", link: "/product", notAllowedTypes: [ACCOUNT_ROLE.CUSTOMER, ACCOUNT_ROLE.STATION]},
    {name: "Users", link: "/user", notAllowedTypes: [ACCOUNT_ROLE.CUSTOMER, ACCOUNT_ROLE.RIDER, ACCOUNT_ROLE.RIDER]},
    {name: "Contact", link: "/contact", notAllowedTypes: []},
]

export default function Navbar() {
    const {user} = usePage().props;
    
    return (
        <nav className="main-nav">
            <Link className="logo" href={"/"}><img src="aguanacasa_logo_white.png" alt="Agua na Casa" /></Link>

            <ul className="nav">
                {navbarTabs.map((navbarTab, idx) => (
                    (!navbarTab.notAllowedTypes.includes(user.role) && 
                        <li key={idx}><Link as={"button"} href={navbarTab.link}>{navbarTab.name}</Link></li>)
                ))}
                
                {/* Order Now */}
                {user.role === ACCOUNT_ROLE.CUSTOMER && 
                    (<li><Link as={"button"} className={"order-button"} href={"/station"}>Order Now <FontAwesomeIcon icon={["fas", "truck"]} /></Link></li>)}

                {/* Sign In/Log Out */}
                <li>
                    {!user ? <Link as={"button"} className={"signin-button"} href={"/sign_in"}>
                        <FontAwesomeIcon icon={["fas", "sign-in-alt"]} /> Sign In</Link>
                        : <div className="profile-button">
                            <Link as={"button"} className={"signin-button"} href={"/profile"}>
                                <img src="account-25.png" alt="Profile" className="profile-icon"/>
                                <span>Profile</span>
                                <FontAwesomeIcon icon={["fas", "chevron-down"]} style={{fontSize: "12px", marginLeft: "5px"}}/>
                            </Link>
                        </div>}
                </li>
            </ul>

            <a className="menu-trigger"><span><FontAwesomeIcon icon={["fas", "bars"]} /></span></a>
        </nav>
    );
} 