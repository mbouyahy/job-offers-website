const Search = ({ setLocation, setSearchTerm, setIsFullTimeOnly }) => {
  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <div className="search-input">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Filter by title, company name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="location-input">
            <span className="location-icon">📍</span>
            <input
              type="text"
              placeholder="Filter by location..."
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="filter-options">
            <label className="checkbox-container">
              <input
                type="checkbox"
                onChange={(e) => setIsFullTimeOnly(e.target.checked)}
              />
              <span className="custom-checkbox"></span>
              <span className="checkbox-text">Full Time Only</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
