/**
 * Rider Management
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  March 14, 2026
 * Last Tested at:  N/A
 */
import RiderTable from "@/components/admin/table/rider";
import RiderSearchFilter from "@/components/admin/table/search_filter/rider";
import Section from "@/components/section";
import TableFilter from "@/components/table/common/filter";
import { FilteredTableProvider, useTable } from "@/components/table/common/filter-context";
import OrderTable from "@/components/table/order";
import { Rider as RiderModel } from "@agc/model";

export default function Rider({riders}: {riders: RiderModel[]}) {
    const {filteredData} = useTable();
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">    
                    <Section title="Order" icon="boxes"/>
                    <FilteredTableProvider data={riders}>    
                        <TableFilter
                            canSortByRating={true}
                            canSortByName={true}
                            canSortByAsc={true}/>
                        <RiderTable riders={filteredData as RiderModel[]} />
                    </FilteredTableProvider>
                </div>
            </div> 
        </div>
    );
}

// Agua Na Casa(c), 2026.