import { Model, Order, Station, User } from "@agc/model";
import { createContext, useContext, useEffect, useState } from "react";

interface TableFilter {
    searchQuery?: string,
    filterByProduct?: string,
    filterByStationStatus?: string,
    filterByOrderStatus?: string,
    filterByBarangay?: string,
    sortByRating?: boolean,
    sortByName?: boolean,
    sortByAsc?: boolean
}

interface TableFilterContextType {
    filteredData: Model[],
    tableFilter: TableFilter,
    setSearchQuery: (query: string) => void,
    setFilterByProduct: (id: string) => void,
    setFilterByStationStatus: (status: string) => void,
    setFilterByOrderStatus: (status: string) => void,
    setFilterByBarangay: (barangay: string) => void,
    setSortByRating: (rating: boolean) => void,
    setSortByName: (name: boolean) => void,
    setSortByAsc: (asc: boolean) => void,
}

const TableFilterContext = createContext<TableFilterContextType>({
    filteredData: [],
    tableFilter: {
        searchQuery: "",
        filterByProduct: "",
        filterByStationStatus: "",
        filterByOrderStatus: "",
        filterByBarangay: "",
        sortByRating: false,
        sortByName: false,
        sortByAsc: false
    },
    setSearchQuery: (query: string) => {},
    setFilterByProduct: (id: string) => {},
    setFilterByStationStatus: (status: string) => {},
    setFilterByOrderStatus: (status: string) => {},
    setFilterByBarangay: (barangay: string) => {},
    setSortByRating: (sortByRating: boolean) => {},
    setSortByName: (sortByName: boolean) => {},
    setSortByAsc: (sortByAsc: boolean) => {}
});

export function FilteredTableProvider({children, data} : {children: React.ReactNode, data: Model[]}) {
    const [filteredData, setFilteredData] = useState<Model[]>([]);

    const [searchQuery, setSearchQuery] = useState("");
    const [filterByProduct, setFilterByProduct] = useState("");
    const [filterByStationStatus, setFilterByStationStatus] = useState("");
    const [filterByOrderStatus, setFilterByOrderStatus] = useState("");
    const [filterByBarangay, setFilterByBarangay] = useState("");
    const [sortByRating, setSortByRating] = useState(false);
    const [sortByName, setSortByName] = useState(false);
    const [sortByAsc, setSortByAsc] = useState(false);

    function filterData () {
        let newFilteredData: Model[] = [];

        newFilteredData = data.filter((model) => {
            let inSearch = model.id.includes(searchQuery);
            let hasProduct = true;
            let hasStationStatus = true;
            let hasOrderStatus = true;
            let hasBarangay = true;

            if (filterByProduct.length > 0 && (model as Station).products !== undefined) {
                hasProduct = (model as Station).products.some((product) => product.id === filterByProduct);
            }

            if (filterByStationStatus.length > 0 && (model as Station).status !== undefined) {
                hasStationStatus = (model as Station).status === filterByStationStatus;
            }

            if (filterByOrderStatus.length > 0 && (model as Order).status !== undefined) {
                hasOrderStatus = (model as Order).status === filterByOrderStatus;
            }

            if (filterByBarangay.length > 0) {
                if ((model as Station).address !== undefined) {hasBarangay = (model as Station).address.county === filterByBarangay}
                else if ((model as User).addresses !== undefined) {hasBarangay = (model as User).addresses.some((address) => address.county === filterByBarangay)}
            }

            return inSearch && hasProduct && hasStationStatus && hasOrderStatus && hasBarangay;
        }).sort((modelA, modelB) => {
            if (sortByRating) {
                return sortByAsc ? 
                    (modelA as Station).rating - (modelB as Station).rating
                    || (modelA as Order).rating - (modelB as Order).rating
                    : (modelB as Station).rating - (modelA as Station).rating
                    || (modelB as Order).rating - (modelA as Order).rating
            }

            if (sortByName) {return sortByAsc 
                ? (modelA as Station).rating - (modelB as Station).rating 
                : (modelB as Station).rating - (modelA as Station).rating
            }
            return 0;
        });

        setFilteredData(newFilteredData);
    }

    useEffect(() => filterData(), []);
    
    return (
        <TableFilterContext.Provider value={{
            filteredData: filteredData,
            tableFilter: {
                searchQuery: searchQuery,
                filterByProduct: filterByProduct,
                filterByStationStatus: filterByStationStatus,
                filterByOrderStatus: filterByOrderStatus,
                filterByBarangay: filterByBarangay,
                sortByRating: sortByRating,
                sortByName: sortByName,
                sortByAsc: sortByAsc
            },
            setSearchQuery: setSearchQuery,
            setFilterByProduct: setFilterByProduct,
            setFilterByStationStatus: setFilterByStationStatus,
            setFilterByOrderStatus: setFilterByOrderStatus,
            setFilterByBarangay: setFilterByBarangay,
            setSortByRating: setSortByRating,
            setSortByName: setSortByName,
            setSortByAsc: setSortByAsc
        }}>{children}</TableFilterContext.Provider>
    )
}

export function useTable() {return useContext(TableFilterContext)}