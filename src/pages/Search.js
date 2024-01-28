import { useEffect, useState } from "react";
import Requests, { fetchMovies } from "../Requests";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { PAGE_NAME } from "../global/globals";
import { useParams } from "react-router-dom";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    document.title = `${PAGE_NAME}-Search`;
  }, []);

  useEffect(() => {
    if (query) {
      fetchMovies(Requests.fetchSearchResult(query))
        .then((data) => {
          console.log(data.results);
          setSearchResult(data.results);
        })
        .catch((err) => {
          return err;
        });
    }
  }, [query]);

  return (
    <main>
      <div className="search-result">
        <h1>Search Result</h1>
        {searchResult && searchResult.length > 0 ? (
          <div className="movie-list">
            {searchResult.map((result) => {
              return <Card key={result.id} movie={result} />;
            })}
          </div>
        ) : (
          <h2>Opps,No Movie Matches </h2>
        )}
      </div>
    </main>
  );
};

export default Search;
