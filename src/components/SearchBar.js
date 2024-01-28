import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ searchInputChange }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(setSearchInput);
    searchInputChange(e.target.value);
  };

  return (
    <div>
      <Link to={`/search/${searchInput}`}>
        <form>
          <input
            type="search"
            placeholder="Enter the Title of Movie"
            onChange={handleChange}
            value={searchInput}
          />

          <button type="submit">Search</button>
        </form>
      </Link>
    </div>
  );
};
export default SearchBar;
