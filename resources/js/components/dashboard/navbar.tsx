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
export default function Navbar() {
    const {user} = usePage().props;
    
    return (
        <nav className="main-nav">
            <Link className="logo" href={"/"}><img src="aguanacasa_logo_white.png" alt="Agua na Casa" /></Link>

            <ul className="nav" id="navbar">
                <li><Link as={"button"} href={"/"}>Home</Link></li>
                <li><Link as={"button"} href={"/about"}>About</Link></li>
                <li><Link as={"button"} href={"/station"}>Stations</Link></li>
                
                <li className="dropdown" id="services-dropdown">
                    <a>Services <i className="fas fa-chevron-down" style={{fontSize: "12px"}}></i></a>
                    <div className="dropdown-menu" id="services-dropdown-menu">
                        <Link href={"/order"}><i className="fas fa-bolt"></i> Instant Delivery</Link>
                        <Link href={"/subscription"}><i className="fas fa-calendar-alt"></i> Subscription</Link>
                    </div>
                </li>
                
                <li><Link as={"button"} href={"/product"}>Products</Link></li> 
                <li><Link as={"button"} href={"/user"}>Users</Link></li> 

                <li><Link as={"button"} href={"/contact"}>Contact</Link></li> 
                
                {/* Order Now */}
                <li><Link as={"button"} className={"order-button"} href={"/station"}>Order Now <i className="fas fa-truck"></i></Link></li>

                {/* Cart */}
                <li><Link as={"button"} className={"cart-icon"} href={"/cart"}>
                    <img src="cart.png" alt="Cart"/>
                    <span className="cart-badge">0</span></Link>
                </li>

                {/* Sign In/Log Out */}
                <li id="signInLi"><Link as={"button"} className={"signin-button"} href={"/sign_in"}>
                    <i className="fa fa-sign-in-alt"></i> Sign In</Link>
                </li>
                
                <li id="profileLi" style={{display: "none"}}>
                    <div className="profile-button" id="profileButton">
                        <Link as={"button"} className={"signin-button"} href={"/sign_in"}>
                            <img src="account-25.png" alt="Profile" className="profile-icon"/>
                            <span>Profile</span>
                            <i className="fas fa-chevron-down" style={{fontSize: "12px", marginLeft: "5px"}}></i>
                        </Link>

                        <div className="profile-dropdown" id="profileDropdown">
                            <Link as={"button"} href={"/setting"} className="account"><i className="fas fa-user-circle"></i> Settings</Link>
                            <Link as={"button"} href={"/logout"} className="logout"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                        </div>
                    </div>
                </li>
            </ul>

            <a className="menu-trigger">
                <span><i className="fa fa-bars"></i></span>
            </a>
        </nav>
    );
} 