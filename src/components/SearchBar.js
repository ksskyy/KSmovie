import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchInput}`);
    }
  };
  return (
    <div className="search-bar">
      <div className={`search-container ${isSearchVisible ? "visible" : ""}`}>
        <label htmlFor="search-input" className="sr-only">
          Search Movie...
        </label>
        <div className="input-container">
          {isSearchVisible && (
            <input
              id="search-input"
              type="search"
              placeholder="Search Movie..."
              onChange={handleChange}
              onKeyDown={handleEnter}
              value={searchInput}
              className="search-input"
            />
          )}
          <FaSearch className="search-icon" onClick={handleIconClick} />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
