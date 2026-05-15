import DashboardLayout from "@/layouts/dashboard-layout";

import { User as UserModel } from "@agc/model";

import Section from "@/components/section";

import "../../../css/dashboard.css";

import UserTable from "@/components/admin/table/user";

export default function User({users}: {users: UserModel[]}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}><Section icon="user" title="Users" /></div>   
                    <UserTable users={users}/>
                </div>
            </div>
        </div>
    );
}

User.layout = (page: any) => <DashboardLayout page={page} title="User | Agua Na Casa"></DashboardLayout>