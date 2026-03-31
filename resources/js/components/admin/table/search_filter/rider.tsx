import "resources/css/admin/user.css";

export default function RiderSearchFilter() {
    return (
        <div className="filter-section">
            <div className="filter-group">
                <label><i className="fas fa-search"></i> Search Rider:</label>
                <input type="text" id="riderSearch" placeholder="Enter rider name..." />
            </div>
            <div className="filter-group">
                <label><i className="fas fa-map-marker-alt"></i> Assigned Barangay:</label>
                <select id="riderBarangay">
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
            <div className="filter-group">
                <label><i className="fas fa-filter"></i> Status:</label>
                <select id="riderStatus">
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="busy">Busy</option>
                    <option value="offline">Offline</option>
                </select>
            </div>
            <div className="filter-actions">
                <button className="filter-btn clear">Clear Filters</button>
            </div>
        </div>
    );
}