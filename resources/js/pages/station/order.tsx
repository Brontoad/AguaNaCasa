import Section from "@/components/section";
import TableFilterBtn from "@/components/table/common/filter";
import { FilteredTableProvider, useTable } from "@/components/table/common/filter-context";
import OrderTable from "@/components/table/order";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Order as OrderModel } from "@agc/model";

export default function Order({orders}: {orders: OrderModel[]}) {
    const {filteredData} = useTable();
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">    
                    <Section title="Order" icon="boxes"/>
                    <FilteredTableProvider data={orders}>    
                        <TableFilterBtn 
                            canFilterByOrderStatus={true}
                            canSortByRating={true}
                            canSortByName={true}
                            canSortByAsc={true}/>
                        <OrderTable orders={filteredData as OrderModel[]} title="" />
                    </FilteredTableProvider>
                </div>
            </div> 
        </div>
    );
}

Order.layout = (page: any) => <DashboardLayout page={page} title="Orders | Agua Na Casa"></DashboardLayout>