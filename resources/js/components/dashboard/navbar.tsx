import { ACCOUNT_ROLE } from "@/pages/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SharedPageProps } from "@inertiajs/core";
import { InertiaConfig } from "@inertiajs/core";
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
interface NavbarTab {name: string, link: string, notAllowedTypes: string[]}


export default function Navbar() {
    const {auth} = usePage<SharedPageProps>().props;

    const navbarTabs: NavbarTab[] = [
        {name: "Home", link: "/", notAllowedTypes: []},
        {name: "Stations", link: "/station", notAllowedTypes: [ACCOUNT_ROLE.GUEST, ACCOUNT_ROLE.STATION, ACCOUNT_ROLE.RIDER]},
        {name: "Riders", link: "/rider", notAllowedTypes: [ACCOUNT_ROLE.GUEST, ACCOUNT_ROLE.STATION, ACCOUNT_ROLE.RIDER]},
        {name: "Orders", link: "/order", notAllowedTypes: [ACCOUNT_ROLE.GUEST, ACCOUNT_ROLE.ADMIN]},
        {name: "Subscriptions", link: "/subscription", notAllowedTypes: [ACCOUNT_ROLE.GUEST, ACCOUNT_ROLE.RIDER, ACCOUNT_ROLE.ADMIN]},
        {name: "Sales", link: "/sale", notAllowedTypes: [ACCOUNT_ROLE.GUEST, ACCOUNT_ROLE.CUSTOMER, ACCOUNT_ROLE.RIDER]},
        {name: "Products", link: "/product", notAllowedTypes: [ACCOUNT_ROLE.GUEST, ACCOUNT_ROLE.CUSTOMER, ACCOUNT_ROLE.RIDER]},
        {name: "Users", link: "/user", notAllowedTypes: [ACCOUNT_ROLE.GUEST,ACCOUNT_ROLE.CUSTOMER, ACCOUNT_ROLE.STATION, ACCOUNT_ROLE.RIDER]},
        {name: "Contact", link: "/contact", notAllowedTypes: []},
        {name: "About", link: "/about", notAllowedTypes: []},
    ];

    function prefix() {
        switch (auth.role) {
            case ACCOUNT_ROLE.CUSTOMER: return "/user";
            case ACCOUNT_ROLE.STATION: return "/station";
            case ACCOUNT_ROLE.RIDER: return "/rider";
            case ACCOUNT_ROLE.ADMIN: return "/admin";
            default: return "";
        }
    }
    
    return (
        <nav className="main-nav">
            <Link className="logo" href={"/"}><img src="/assets/aguanacasa_logo_white.png" alt="Agua na Casa" /></Link>

            <ul className="nav">
                {navbarTabs.map((navbarTab, idx) => {
                    if (navbarTab.notAllowedTypes.includes(auth.role && auth.role.length > 0 ? auth.role : ACCOUNT_ROLE.GUEST)) return null;
                    const isPublic = navbarTab.link === "/" || navbarTab.link === "/about" || navbarTab.link === "/contact_us";
                    const href = isPublic ? navbarTab.link : `${prefix()}${navbarTab.link}`;
                    return (<li key={idx}><Link href={href}>{navbarTab.name}</Link></li>);
                })}
                
                {/* Order Now */}
                {/* {auth.role === ACCOUNT_ROLE.CUSTOMER && 
                    (<li><Link className={"order-button"} href={"/user/station"}>Order Now <FontAwesomeIcon icon={["fas", "truck"]} /></Link></li>)} */}

                {/* Sign In/Log Out */}
                <li id="signInLi">
                    {auth.role.length <= 0 ? <Link className={"signin-button"} href={"/login/user"}><FontAwesomeIcon icon={["fas", "sign-in-alt"]} /> Sign In</Link>
                        : auth.role === ACCOUNT_ROLE.ADMIN ? <Link className={"signin-button"} href={"/logout"}><FontAwesomeIcon icon={["fas", "sign-out-alt"]} /> Logout</Link> 
                            :<div className="profile-button"><Link className={"signin-button"} href={`${prefix()}/profile`}>
                                <img src="/assets/account-25.png" alt="Profile" className="profile-icon"/>
                                <span>Profile</span>
                            </Link>
                        </div>}
                </li>
            </ul>

            <a className="menu-trigger"><span><FontAwesomeIcon icon={["fas", "bars"]} /></span></a>
        </nav>
    );
} 