import FormModalLayout from "@/layouts/form-modal-layout";
import { Station } from "@agc/model";

function updateStation() {}
export default function UpdateStationModal({station, closeModal}: {station: Station, closeModal(): void}) {
    return (
        <FormModalLayout
            title="Edit Station"
            submit={() => updateStation()}
            submitTitle="Edit"
            handleClose={() => closeModal()}
            link="/station"
            method="put">
            <input type="hidden" name="station_id" defaultValue={station.id} />
            <div className="form-group">
                <label>Station Name</label>
                <input type="text" value={station.name} />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" value={station.name} />
            </div>
        </FormModalLayout>
    );
}