
// import { useState } from "react";

const Search = ({ setLocation, setSearchTerm , setIsFullTimeOnly}) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [location, setLocation] = useState("");
//   const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <div className="search-input">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Filter by title, company name"
            //   value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="location-input">
            <span className="location-icon">📍</span>
            <input
              type="text"
              placeholder="Filter by location..."
            //   value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="filter-options">
            <label className="checkbox-container">
              <input
                type="checkbox"
                // checked={isFullTimeOnly}
                onChange={(e) => setIsFullTimeOnly(e.target.checked)}
              />
              <span className="custom-checkbox"></span>
              <span className="checkbox-text">Full Time Only</span>
            </label>
            {/* <button className="search-button">
              <span className="search-button-text">Search</span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};


export default Search;