/**
 * About
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
import DashboardLayout from "@/layouts/dashboard-layout";
import "resources/css/about.css";

export default function About() {
    return (
        <div className="page-content" style={{minHeight: "60vh", padding: "120px 0 60px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="about-title">About Us</h1>
                        <div className="about-card">
                            <div className="about-row left">
                                <div className="logo-col">
                                    <img src="aguanacasa_logo_blue.png" id="AguaLogo1" alt="Agua na Casa Logo" />
                                </div>
                                <div className="text-col">
                                    <p className="description-text">
                                        AguaNaCasa is an innovative online platform that streamlines the delivery of mineral water. We facilitate seamless connections between consumers and water refilling stations, providing immediate access to high-quality mineral water. With adaptable ordering choices and a strong dedication to convenience, AguaNaCasa's goal is to make clean water easily accessible, thereby improving the lives of both individuals and businesses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-row left">
                                <div className="label-col">
                                    <h2 className="section-label">MISSION</h2>
                                </div>
                                <div className="text-col">
                                    <p className="description-text">
                                        "To enrich the lives of our customers by offering a seamless platform for accessing safe and refreshing mineral water. Our commitment lies in providing convenience, trustworthiness, and exceptional service, ensuring that clean water is readily available to every household and business."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-row left">
                                <div className="label-col">
                                    <h2 className="section-label">VISION</h2>
                                </div>
                                <div className="text-col">
                                    <p className="description-text">
                                        "Aspire to lead the transformation of water delivery, AguaNaCasa envisions a future where obtaining high quality mineral water is effortless and sustainable, making it an integral part of household necessities. We aim to expand our influence, empower local water refilling stations, and cultivate a community where clean water is easily accessible to all, contributing to healthier and more prosperous living."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

About.layout = (page: any) => <DashboardLayout page={page} title="About | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.