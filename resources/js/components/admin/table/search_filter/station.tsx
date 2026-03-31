import "resources/css/admin/user.css";

export default function StationSearchFilter() {
    return (
        <div className="filter-section">
            <div className="filter-group">
                <label><i className="fas fa-search"></i> Search station:</label>
                <input type="text" id="station-search" placeholder="Enter station name..." />
            </div>
            <div className="filter-group">
                <label><i className="fas fa-map-marker-alt"></i> Filter by Barangay:</label>
                <select id="station-barangay">
                    <option value="all">All Barangays</option>
                    <option value="Guiwan">Guiwan</option>
                    <option value="Tetuan">Tetuan</option>
                    <option value="San Jose">San Jose</option>
                    <option value="Tumaga">Tumaga</option>
                    <option value="Sta. Maria">Sta. Maria</option>
                    <option value="San Roque">San Roque</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="filter-actions">
                <button className="filter-btn clear">Clear Filters</button>
            </div>
        </div>
    );
}