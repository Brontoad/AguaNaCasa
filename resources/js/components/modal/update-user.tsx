import FormModalLayout from "@/layouts/form-modal-layout";
import { User } from "@agc/model";

function updateUser() {}
export default function UpdateUserModal({user, closeModal}: {user: User, closeModal(): void}) {
    return (
        <FormModalLayout
            title="Edit User"
            submit={() => updateUser()}
            submitTitle="Edit"
            handleClose={() => closeModal()}
            link="/user"
            method="put">
            <input type="hidden" name="user_id" defaultValue={user.id} />
            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="first_name" value={user.first_name} />
            </div>
            <div className="form-group">
                <label>Middle Initial</label>
                <input type="text" name="middle_initial" value={user.middle_initial} />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="last_name" value={user.last_name} />
            </div>
        </FormModalLayout>
    );
}