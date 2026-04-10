import TableFilterBtn from "@/components/table/common/filter";
import { FilteredTableProvider, useTable } from "@/components/table/common/filter-context";
import OrderTable from "@/components/table/order";
import { Order as OrderModel } from "@agc/model";

export default function Order({orders}: {orders: OrderModel[]}) {
    const {filteredData} = useTable();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">    
                    <FilteredTableProvider data={orders}>    
                        <TableFilterBtn />
                        <OrderTable orders={filteredData as OrderModel[]} title="" />
                    </FilteredTableProvider>
                </div>
            </div> 
        </div>
    );
}