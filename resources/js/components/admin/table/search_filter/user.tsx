/**
 * User Search and Filter
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 14, 2026
 * Last Edited at:  March 14, 2026
 * Last Tested at:  N/A
 */
import "resources/css/admin/user.css";

const BARANGAYS = [
    'Guiwan',
    'Tetuan',
    'San Jose',
    'Baliwasan',
    'Sta. Maria'
];

export default function UserSearchFilter() {
    return (
        <div className="filter-section">
            <div className="filter-group">
                <label><i className="fas fa-search"></i> Search user:</label>
                <input type="text" id="user-search" placeholder="Enter customer name..." />
            </div>
            <div className="filter-group">
                <label><i className="fas fa-map-marker-alt"></i> Filter by Barangay:</label>
                <select id="user-barangay">
                    <option value={0}>All Barangays</option>
                    {BARANGAYS.map((barangay, index) => {
                        return <option value={index + 1}>{barangay}</option>
                    })}
                </select>
            </div>
            <div className="filter-actions">
                <button className="filter-btn clear">Clear Filters</button>
            </div>
        </div>
    );
}