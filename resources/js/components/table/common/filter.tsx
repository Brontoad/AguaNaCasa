import { BARANGAYS, ORDER_STATUS, STATION_STATUS } from "@/pages/config";
import TableSearchBar from "./search-bar";
import { Model, Product } from "@agc/model";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTable } from "./filter-context";

interface TableFilterProps {
    canFilterByProduct?: boolean,
    canFilterByStationStatus?: boolean,
    canFilterByOrderStatus?: boolean,
    canFilterByBarangay?: boolean
    canSortByRating?: boolean,
    canSortByName?: boolean,
    canSortByAsc?: boolean
}

export default function TableFilter({
    canFilterByProduct=false,
    canFilterByStationStatus= false,
    canFilterByOrderStatus= false,
    canFilterByBarangay= false,
    canSortByRating=false,
    canSortByName=false,
    canSortByAsc=false
} : TableFilterProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const {
        setFilterByProduct,
        setFilterByStationStatus,
        setFilterByOrderStatus,
        setFilterByBarangay,
        setSortByRating,
        setSortByName,
        setSortByAsc
    } = useTable();

    function fetchProducts() {
        let fetchedProducts: Product[] = [];

        setProducts(fetchedProducts);
    }

    useEffect(() => {fetchProducts()}, []);

    return (
        <div className="filter-bar">
            <TableSearchBar></TableSearchBar>
            {canFilterByProduct && <select className="product-filter" id="productFilter" onChange={(e) => setFilterByProduct(e.target.value)}>
                    <option value="all">All Products</option>
                    {products.map((product, idx) => (<option value={product.id} key={`filter-product-${idx}`}>{product.name}</option>))}
                </select>}
            {canFilterByStationStatus && <select className="filter-select" id="statusFilter" onChange={(e) => setFilterByStationStatus(e.target.value)}>
                    <option value="all">All Status</option>
                    {Object.values(STATION_STATUS).map((stationStatus, idx) => (
                        <option value={stationStatus} key={`filter-station-status-${idx}`} style={{textTransform: "capitalize"}}>
                            {stationStatus.replace(/_/g, ' ')}
                        </option>
                    ))}
                </select>}
            {canFilterByOrderStatus && <select className="filter-select" id="statusFilter" onChange={(e) => setFilterByOrderStatus(e.target.value)}>
                    <option value="all">All Order Status</option>
                    {Object.values(ORDER_STATUS).map((orderStatus, idx) => (
                        <option value={orderStatus} key={`filter-order-status-${idx}`} style={{textTransform: "capitalize"}}>
                            {orderStatus.replace(/_/g, ' ')}
                        </option>
                    ))}
                </select>}
            {canFilterByBarangay && <select className="barangay-filter" id="barangayFilter" onChange={(e) => setFilterByBarangay(e.target.value)}>
                    <option value="all">All Barangays</option>
                    {BARANGAYS.map((barangay, idx) => (<option value={barangay} key={`filter-barangay-${idx}`}>{barangay}</option>))}
                </select>}
            {canSortByRating || canSortByName && <select className="filter-select" id="sortFilter" onChange={(e) => {
                setSortByRating(e.target.value === "rating");
                setSortByName(e.target.value === "name");
            }}>
                    {canSortByRating && <option value="rating">Sort by: Rating</option>}
                    {canSortByName && <option value="name">Sort by: Name</option>}
                </select>}
            {canSortByAsc && <select className="filter-select" defaultValue={"asc"} id="sortFilter" onChange={(e) => setSortByAsc(e.target.value === "asc")}>
                <option value="asc">Sort by: ASC</option>
                <option value="desc">Sort by: DESC</option>
            </select>}
        </div>
    );
}
