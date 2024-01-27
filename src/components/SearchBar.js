import { useState } from "react";

export default const SearchBar = ({searchInputChange}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    searchInputChange(e.target.value)
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Enter the Title of Movie"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}
