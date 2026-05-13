/**
 * User
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  April 13, 2026
 * Last Tested at:  N/A
 */
import UserSearchFilter from "@/components/admin/table/search_filter/user";
import UserTable from "@/components/admin/table/user";
import Section from "@/components/section";
import TableFilter from "@/components/table/common/filter";
import { FilteredTableProvider, useTable } from "@/components/table/common/filter-context";
import DashboardLayout from "@/layouts/dashboard-layout";
import { User as UserModel } from "@agc/model";

import "../../../css/admin/user.css";

export default function User({users}: {users: UserModel[]}) {
    const {filteredData} = useTable();
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">    
                    <Section title="User" icon="user"/>
                    <FilteredTableProvider data={users}>    
                        <TableFilter
                            canSortByRating={true}
                            canSortByName={true}
                            canSortByAsc={true}/>
                        <UserTable users={filteredData as UserModel[]} />
                    </FilteredTableProvider>
                </div>
            </div> 
        </div>
    );
}

User.layout = (page: any) => <DashboardLayout page={page} title="Users | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.