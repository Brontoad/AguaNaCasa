/**
 * Subscription
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
import "resources/css/subscription.css";

export default function Subscription() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div id="subscribe-page" className="page active">
                        <div className="subscription-wrapper">
                            <h1>Subscriptions</h1>
                            <div className="cards">

                                <div className="card">
                                    <div className="card-header"><h2>EVERY 3 DAYS</h2></div>
                                    <div className="card-body">
                                        <div className="field">
                                            <label>Starting Date</label>
                                            <input type="date" id="date3" />
                                        </div>
                                        <div className="field">
                                            <label>No. of Months</label>
                                            <input type="number" id="months3" min="1" placeholder="e.g. 3" /* oninput="calcPrice('3day')" */ />
                                        </div>
                                        <div className="field">
                                            <label>Type</label>
                                            <select id="type3" /* onchange="calcPrice('3day')" */>
                                                <option value="">Select Type</option>
                                                <option value="5">Mineral (₱15)</option>
                                                <option value="3">Distilled (₱30)</option>
                                                <option value="5">Alkaline (₱25)</option>
                                                <option value="3">Purified (₱30)</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>QTY</label>
                                            <input type="number" id="qty3" min="1" placeholder="0" /* oninput="calcPrice('3day')" */ />
                                        </div>
                                        <div className="field">
                                            <label>My Location</label>
                                            <select id="loc3">
                                                <option value="">Select Location</option>
                                                <option>Guiwan</option>
                                                <option>Tetuan</option>
                                                <option>Sta. Barbara</option>
                                                <option>Tugbungan</option>
                                                <option>Divisoria</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Total Price</label>
                                            <div className="price-wrap">
                                                <span className="peso">₱</span>
                                                <input type="text" id="price3" readOnly={true} placeholder="0.00" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn-subscribe" /* onclick="openModal('Every 3 Days')" */>Subscribe Now</button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header"><h2>EVERY 5 DAYS</h2></div>
                                    <div className="card-body">
                                        <div className="field">
                                            <label>Starting Date</label>
                                            <input type="date" id="date5" />
                                        </div>
                                        <div className="field">
                                            <label>No. of Months</label>
                                            <input type="number" id="months5" min="1" placeholder="e.g. 3" /* oninput="calcPrice('5day')" */ />
                                        </div>
                                        <div className="field">
                                            <label>Type</label>
                                            <select id="type5" /* onchange="calcPrice('5day')" */>
                                                <option value="">Select Type</option>
                                                <option value="5">Mineral (₱15)</option>
                                                <option value="3">Distilled (₱30)</option>
                                                <option value="5">Alkaline (₱25)</option>
                                                <option value="3">Purified (₱30)</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>QTY</label>
                                            <input type="number" id="qty5" min="1" placeholder="0" /* oninput="calcPrice('5day')" */ />
                                        </div>
                                        <div className="field">
                                            <label>My Location</label>
                                            <select id="loc5">
                                                <option value="">Select Location</option>
                                                <option>Guiwan</option>
                                                <option>Tetuan</option>
                                                <option>Sta. Barbara</option>
                                                <option>Tugbungan</option>
                                                <option>Divisoria</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Total Price</label>
                                            <div className="price-wrap">
                                                <span className="peso">₱</span>
                                                <input type="text" id="price5" readOnly={true} placeholder="0.00" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn-subscribe" /* onclick="openModal('Every 5 Days')" */>Subscribe Now</button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header"><h2>WEEKLY</h2></div>
                                    <div className="card-body">
                                        <div className="field">
                                            <label>Starting Date</label>
                                            <input type="date" id="dateW" />
                                        </div>
                                        <div className="field">
                                            <label>No. of Months</label>
                                            <input type="number" id="monthsW" min="1" placeholder="e.g. 3" /* oninput="calcPrice('weekly')" */ />
                                        </div>
                                        <div className="field">
                                            <label>Type</label>
                                            <select id="typeW" /* onchange="calcPrice('weekly')" */>
                                                <option value="">Select Type</option>
                                                <option value="5">Mineral (₱15)</option>
                                                <option value="3">Distilled (₱30)</option>
                                                <option value="5">Alkaline (₱25)</option>
                                                <option value="3">Purified (₱30)</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>QTY</label>
                                            <input type="number" id="qtyW" min="1" placeholder="0" /* oninput="calcPrice('weekly')" */ />
                                        </div>
                                        <div className="field">
                                            <label>My Location</label>
                                            <select id="locW">
                                                <option value="">Select Location</option>
                                                <option>Guiwan</option>
                                                <option>Tetuan</option>
                                                <option>Sta. Barbara</option>
                                                <option>Tugbungan</option>
                                                <option>Divisoria</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <label>Total Price</label>
                                            <div className="price-wrap">
                                                <span className="peso">₱</span>
                                                <input type="text" id="priceW" readOnly={true} placeholder="0.00" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn-subscribe" /* onclick="openModal('Weekly')" */>Subscribe Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="instant-page" className="page">
                        <div className="instant-wrapper">
                            <h2>Instant Order</h2>
                            <div className="card" style={{width: "100%", maxWidth: "480px", margin: "0 auto"}}>
                                <div className="card-header"><h2>ORDER NOW</h2></div>
                                <div className="card-body">
                                    <div className="field">
                                        <label>Type</label>
                                        <select id="itypeI">
                                            <option value="">Select Type</option>
                                            <option value="5">Mineral (₱15)</option>
                                            <option value="3">Distilled (₱30)</option>
                                            <option value="5">Alkaline (₱25)</option>
                                            <option value="3">Purified (₱30)</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label>QTY</label>
                                        <input type="number" id="iqtyI" min="1" placeholder="0" /* oninput="calcInstant()" */ />
                                    </div>
                                    <div className="field">
                                        <label>My Location</label>
                                        <select id="ilocI">
                                            <option value="">Select Location</option>
                                            <option>Guiwan</option>
                                            <option>Tetuan</option>
                                            <option>Sta. Barbara</option>
                                            <option>Tugbungan</option>
                                            <option>Divisoria</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label>Total Price</label>
                                        <div className="price-wrap">
                                            <span className="peso">₱</span>
                                            <input type="text" id="ipriceI" readOnly={true} placeholder="0.00" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn-subscribe" /* onclick="openModal('Instant Order')" */>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Subscription.layout = (page: any) => <DashboardLayout page={page} title="Subscription | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.