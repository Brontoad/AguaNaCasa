/**
 * Station Management
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
import StationSearchFilter from "@/components/admin/table/search_filter/station";
import StationTable from "@/components/admin/table/station";
import Section from "@/components/section";
import TableFilter from "@/components/table/common/filter";
import { FilteredTableProvider, useTable } from "@/components/table/common/filter-context";
import { Station as StationModel } from "@agc/model";

export default function Station({stations}: {stations: StationModel[]}) {
    const {filteredData} = useTable();
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">    
                    <Section title="Station" icon="store"/>
                    <FilteredTableProvider data={stations}>    
                        <TableFilter
                            canSortByRating={true}
                            canSortByName={true}
                            canSortByAsc={true}/>
                        <StationTable stations={filteredData as StationModel[]} />
                    </FilteredTableProvider>
                </div>
            </div> 
        </div>
    );
}