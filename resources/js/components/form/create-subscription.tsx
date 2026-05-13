import ModalLayout from "@/layouts/modal-layout";
import { WEEKDAYS } from "@/pages/config";
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

export default function CreateSubscriptionForm() {
    const {user} = usePage().props;

    return (
        <ModalLayout
            title="Add Subscription"
            submit={() => createSubscription()}
            submitTitle="Add"
            handleClose={() => closeModal()}
        >
            <div className="form-section">
                <h3 className="section-title"><i className="fas fa-map-marker-alt"></i> Delivery Address</h3>
                <div className="address-card">
                    <div className="address-header">
                        <h4><i className="fas fa-location-dot"></i>{user.default_address.label}</h4>
                        <button className="edit-address-btn"><i className="fas fa-edit"></i> Change</button>
                    </div>
                    <div className="address-content" id="addressDisplay">
                        <i className="fas fa-location-dot"></i>{user.default_address}
                    </div>
                </div>
            </div>

            <div className="form-section">
                <h3 className="section-title"><i className="fas fa-calendar-week"></i> Delivery Schedule</h3>
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
                <h4 style={{marginBottom: "15px"}}><i className="fas fa-receipt"></i> Subscription Summary</h4>
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
        </ModalLayout>
    );
}