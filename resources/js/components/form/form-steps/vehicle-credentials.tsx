const VEHICLE_TYPES = [
    "Motorcycle",
    "Scooter",
    "Bicycle",
    "Car"
];

export default function VehicleCredentialsForm({updateFormStep} : {updateFormStep: (step: number) => void}) {
    return (
        <form id="vehicleForm">
            <div className="form-group">
                <label><i className="fas fa-motorcycle"></i> Vehicle Type</label>
                <div className="input-wrapper"><i className="fas fa-motorcycle"></i>
                    <select id="vehicleType" required>
                        <option value="" disabled selected>Select vehicle type</option>
                        {VEHICLE_TYPES.map((type, idx) => (
                            <option value={type} key={`select-vehicle-type-${idx}`}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label><i className="fas fa-tag"></i> Plate Number</label>
                <div className="input-wrapper">
                    <i className="fas fa-tag"></i><input type="text" id="plateNumber" placeholder="Enter plate number (e.g., ABC-1234)" required />
                </div>
            </div>

            <div className="form-group">
                <label><i className="fas fa-car"></i> Vehicle Model</label>
                <div className="input-wrapper">
                    <i className="fas fa-car"></i><input type="text" id="vehicleModel" placeholder="e.g., Honda Beat 2020" required />
                </div>
            </div>

            <div className="form-group">
                <label><i className="fas fa-id-card"></i> License Number</label>
                <div className="input-wrapper">
                    <i className="fas fa-id-card"></i><input type="text" id="licenseNumber" placeholder="Enter driver's license number" required />
                </div>
            </div>

            <div className="button-group">
                <button type="button" className="btn btn-secondary" onClick={() => updateFormStep(1)}><i className="fas fa-arrow-left"></i> Back</button>
                <button type="button" className="btn btn-primary" onClick={() => updateFormStep(3)}>Continue <i className="fas fa-arrow-right"></i></button>
            </div>
        </form>
    );
}