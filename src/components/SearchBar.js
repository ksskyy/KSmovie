import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

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
        ref={searchContainerRef}
        className={`search-container ${isSearchVisible ? "visible" : ""}`}
      >
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
              animate={{ opacity: 0.7, width: "10.35rem" }}
              exit={{ opacity: 0, width: "2rem" }}
              transition={{ duration: 0.7 }}
            />
          )}
          <motion.div whileTap={{ scale: 0.9 }} onClick={toggleSearch}>
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
