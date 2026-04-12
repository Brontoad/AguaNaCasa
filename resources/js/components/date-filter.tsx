import { useState } from "react"

function filterIncome(filter: string) {}
function applyCustomDateRangeFilter() {}

export default function DateFilter() {
    const [isCustomDateFilter, setIsCustomDateFilter] = useState(false);
    const [customDateRange, setCustomDateRange] = useState<{startDate: string, endDate: string}>({startDate: "", endDate: ""});

    return (
        <div className="date-filter">
            <button className="date-filter-btn" onClick={() => filterIncome('today')}>Today</button>
            <button className="date-filter-btn" onClick={() => filterIncome('week')}>This Week</button>
            <button className="date-filter-btn" onClick={() => filterIncome('month')}>This Month</button>
            <button className="date-filter-btn" onClick={() => filterIncome('year')}>This Year</button>
            <button className="date-filter-btn" onClick={() => filterIncome('custom')}>Custom</button>
            
            {isCustomDateFilter && <div className="date-picker">
                <input type="date" id="start-date" onChange={(e) => setCustomDateRange((prev) => ({...prev, startDate: e.target.valueAsDate?.toDateString() ?? ""}))}/> to 
                <input type="date" id="end-date" onChange={(e) => setCustomDateRange((prev) => ({...prev, endDate: e.target.valueAsDate?.toDateString() ?? ""}))}/>
                <button className="edit-btn" onClick={() => applyCustomDateRangeFilter()}>Apply</button>
            </div>}
        </div>);
}