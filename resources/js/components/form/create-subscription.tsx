import FormModalLayout from "@/layouts/form-modal-layout";
import ModalLayout from "@/layouts/modal-layout";
import { WEEKDAYS } from "@/pages/config";
import { Address, User } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";

interface CreateSubscriptionFormData {
    deliveryDays: string[],
    estimatedDeliveryTime: string,
    userId: string,
    stationId: string,
    addressId: string,
    deliveryFee: number
}

function createSubscription() {

}

function closeModal() {

}

export default function CreateSubscriptionForm({default_address}: {default_address: Address}) {
    const {auth} = usePage().props;
    if (!auth.user) throw Error("User not authorized");
    const user: User = auth.user;
    return (
        <FormModalLayout
            title="Add Subscription"
            submit={createSubscription}
            submitTitle={"Skalksa"}
            handleClose={() => closeModal()}
            link="/subscription"
            method="post"
        >
            <div className="form-section">
                <h3 className="section-title"><FontAwesomeIcon icon={["fas", "map-marker-alt"]}/> Delivery Address</h3>
                <div className="address-card">
                    <div className="address-header">
                        <h4><FontAwesomeIcon icon={["fas", "location-dot"]}/>{default_address.label}</h4>
                        <button className="edit-address-btn"><FontAwesomeIcon icon={["fas", "edit"]}/> Change</button>
                    </div>
                    <div className="address-content"><FontAwesomeIcon icon={["fas", "location-dot"]}/>{default_address.location}</div>
                </div>
            </div>

            <div className="form-section">
                <h3 className="section-title"><FontAwesomeIcon icon={["fas", "calendar-week"]}/> Delivery Schedule</h3>
                <div className="form-group">
                    <label>Select Delivery Days</label>
                    <div className="frequency-buttons" id="dayButtons">
                        {WEEKDAYS.map((day, idx) => 
                            (<button className="day-btn" data-day={day} key={`subscription-delivery-day-${idx}`}>{day}</button>))}
                    </div>
                </div>
                <div className="form-group">
                    <label>Select Estimated Time to Order</label>
                    <input type="time" className="start-date" id="startDate" />
                </div>
            </div>

            <div className="summary-card">
                <h4 style={{marginBottom: "15px"}}><FontAwesomeIcon icon={["fas", "receipt"]}/> Subscription Summary</h4>
                <div className="summary-row">
                    <span>Products Total (per delivery)</span>
                    <span id="perDeliveryTotal">₱0</span>
                </div>
                <div className="summary-row">
                    <span>Delivery Fee</span>
                    <span id="deliveryFee">₱0</span>
                </div>
                <div className="summary-row total">
                    <span>Total Subscription Cost</span>
                    <span id="subscriptionTotal">₱0</span>
                </div>
            </div>
        </FormModalLayout>
    );
}