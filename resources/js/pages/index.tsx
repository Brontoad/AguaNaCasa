import DashboardLayout from "@/layouts/dashboard-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import "resources/css/index.css";

function renderSlideshow(): React.ReactNode[] {
    let slideShow: React.ReactNode[] = []
    for (let index = 0; index < 5; index++) {
        slideShow.push(<img src={`slide_picture_${index + 1}.png`} alt={`Slide ${index + 1}`} />);
    }
    return slideShow;
}

export default function Index() {
    return (
        <div>
            <div className="main-banner" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content">
                                        <h2>Clean Water Delivered to Your Home</h2>
                                        <p>Agua na Casa brings pure, safe drinking water right to your doorstep. Choose from our selection of trusted water refilling stations and enjoy fast, reliable delivery service.</p>
                                        
                                        <div className="button-container">
                                            <div className="white-button"><Link href="#services">Our Services <FontAwesomeIcon icon={["fas", "tint"]} /></Link></div>
                                            <div className="white-button"><Link href="#directory">Find Stations <FontAwesomeIcon icon={["fas", "map-marked-alt"]} /></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-image"><img src="landing_logo.png" alt="Agua na Casa" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            <div id="services" className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-heading">
                                <h4>Amazing <em>Services &amp; Features</em> for you</h4>
                                <p>We provide the best water delivery service with features designed for your convenience and satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item first-service">
                                <div className="icon"></div>
                                <h4>Safe Drinking Water</h4>
                                <p>Certified clean and safe drinking water from trusted refilling stations.</p>
                                <div className="text-button">
                                    <Link href="#">Read More <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item second-service">
                                <div className="icon"></div>
                                <h4>Wide Selection</h4>
                                <p>Choose from multiple water refilling stations near your location.</p>
                                <div className="text-button">
                                    <Link href="#">Read More <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item third-service">
                                <div className="icon"></div>
                                <h4>Fast Delivery</h4>
                                <p>Lightning-fast delivery right to your doorstep when you need it.</p>
                                <div className="text-button">
                                    <Link href="#">Read More <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="service-item fourth-service">
                                <div className="icon"></div>
                                <h4>Easy Access Locations</h4>
                                <p>Find the nearest water station with our easy-to-use location finder.</p>
                                <div className="text-button">
                                    <Link href="#">Read More <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-slideshow-container">
                            <div><img src="landing_logo.png" id="AguaLogo" alt="Agua na Casa Logo" /></div>
                            <div>
                                <div className="slideshow-container">
                                    <div className="slider-wrapper">{renderSlideshow()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Agua Na Casa"></DashboardLayout>