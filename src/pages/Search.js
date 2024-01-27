import { useEffect, useState } from "react";
import Requests, { fetchMovies } from "../Requests";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    document.title = `${PAGE_NAME}-Search`;
  }, []);

  const getSearchResult = () => {
    fetchMovies(Requests.fetchSearchResult)
      .then((data) => {
        setSearchResult(data.results);
      })
      .catch((err) => {
        return err;
      });
  };
  useEffect(() => {
    getSearchResult();
  }, []);
  return (
    <div>
      <SearchBar />
      {searchResult && searchResult.length > 0 ? (
        <div>
          {searchResult.map((result) => {
            return <Card />;
          })}
        </div>
      ) : (
        <h2>Opps,No Movie Matches </h2>
      )}
    </div>
  );
};

export default Search;
