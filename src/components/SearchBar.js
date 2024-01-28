import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ searchInputChange }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    searchInputChange(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Enter the Title of Movie"
          onChange={handleChange}
          value={searchInput}
        />
        <Link to={`/search/${searchInput}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </div>
  );
};
export default SearchBar;
