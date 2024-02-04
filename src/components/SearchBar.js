import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // const handleIconClick = () => {
  //   setIsSearchVisible(!isSearchVisible);
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (searchInput.trim().length > 0) {
        navigate(`/search/${searchInput.trim()}`);
      }
    }
  };
  return (
    <div className="search-bar">
      <div
        className={`search-container ${isSearchVisible ? "visible" : ""}`}
        onMouseEnter={() => setIsSearchVisible(true)}
        // onMouseLeave={() => {
        //   setIsSearchVisible(false);
        // }}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsSearchVisible(false);
          }, 800);
        }}
      >
        <label htmlFor="search-input" className="sr-only">
          Search Movie...
        </label>
        <div className="input-container">
          {isSearchVisible && (
            <motion.input
              id="search-input"
              type="search"
              placeholder="Search Movie..."
              onChange={handleChange}
              onKeyDown={handleEnter}
              value={searchInput}
              className="search-input"
              initial={{ opacity: 0, width: "2rem" }}
              animate={{ opacity: 0.7, width: "12.15rem" }}
              exit={{ opacity: 0, width: "2rem" }}
              transition={{ duration: 0.7 }}
            />
          )}
          <motion.div whileTap={{ scale: 0.9 }}>
            {searchInput.trim().length > 0 ? (
              <Link to={`/search/${searchInput.trim()}`}>
                <FaSearch className="search-icon" />
              </Link>
            ) : (
              <FaSearch className="search-icon" />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
