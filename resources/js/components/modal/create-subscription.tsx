import FormModalLayout from "@/layouts/form-modal-layout";
import { WEEKDAYS } from "@/pages/config";
import { Station, User } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, usePage } from "@inertiajs/react";

export default function CreateSubscriptionModal({station, closeModal}: {station: Station, closeModal(): void}) {
    const {auth} = usePage().props;
    if (!auth.user) {throw new Error("User is not authenticated");}
    const user: User = auth.user;

    const {data, setData, post, processing} = useForm({
        user_id: user.id,
        station_id: station.id,
        address_id: user.default_address?.id ?? "",
        days: [] as string[],
        time: ""
    });

    function toggleDay(day: string) {
        setData("days",
            data.days.includes(day)
                ? data.days.filter(d => d !== day)
                : [...data.days, day]
        );
    }

    function createSubscription(e: any) {
        e.preventDefault();
        post("/subscription");
    }

    return (
        <FormModalLayout
            title="Add Subscription"
            submit={createSubscription}
            submitTitle={processing ? "Adding..." : "Add"}
            handleClose={() => closeModal()}
            link="/subscription"
            method="post"
        >
        <div className="form-section">
            <h3 className="section-title"><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> Delivery Address</h3>
            <div className="address-card">
                <div className="address-header">
                    <h4><FontAwesomeIcon icon={["fas", "location-dot"]} />{user.default_address?.label ?? "N/A"}</h4>
                    <button className="edit-address-btn"><FontAwesomeIcon icon={["fas", "location-dot"]} /> Change</button>
                </div>
                <div className="address-content">{user.default_address?.location ?? "N/A"}</div>
            </div>
        </div>

        <div className="form-section">
            <h3 className="section-title"><FontAwesomeIcon icon={["fas", "calendar-week"]} /> Delivery Schedule</h3>
            <div className="form-group">
                <label>Select Delivery Days</label>
                <div className="frequency-buttons" id="dayButtons">
                    {WEEKDAYS.map((day, idx) => (
                        <button type="button" className={`day-btn ${data.days.includes(day) ? "active" : ""}`} 
                            onClick={() => toggleDay(day)} key={`subscription-delivery-day-${idx}`}>{day}</button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>Select Estimated Time to Order</label>
                <input type="time"  className="start-date" value={data.time} onChange={(e) => setData("time", e.target.value)} />
            </div>
        </div>
        </FormModalLayout>
    );
}