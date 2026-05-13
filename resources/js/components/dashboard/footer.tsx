/**
 * Dashboard Footer
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 13, 2026
 * Last Edited at:  March 13, 2026
 * Last Tested at:  N/A
 */
import "../../../css/footer.css";
export default function Footer() {
    return (
        <footer id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>Contact Us</h4>
                            <p>Zamboanga City, Philippines</p>
                            <p><a href="tel:+63123456789">+63 123 456 789</a></p>
                            <p><a href="mailto:aguanacasa@gmail.com">aguanacasa@gmail.com</a></p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>About Us</h4>
                            <div className="footer-lists">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="About.html">About</a></li>
                                    <li><a href="stations.html">Stations</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>Useful Links</h4>
                            <div className="footer-lists">
                                <ul>
                                    <li><a href="#">Find Stations</a></li>
                                    <li><a href="#">Delivery Areas</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                                <ul>
                                    <li><a href="careers.html">Careers</a></li>
                                    <li><a href="#">Partnerships</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="footer-widget">
                            <h4>About Agua na Casa</h4>
                            <div className="logo">
                                <img src="/assets/aguanacasa_logo_white.png" alt="Agua na Casa"/>
                            </div>
                            <p>Bringing clean, safe drinking water to every Filipino home with fast and reliable delivery service.</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            <p>
                                Copyright © 2026 Agua na Casa. All Rights Reserved. 
                                <br />Design: <a href="#">Agua na Casa Team</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}