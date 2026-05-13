export default function TableSearchBar() {
    return (
        <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search by station name, location..." id="searchInput" />
        </div>
    );
}