import { useEffect, useState } from "react";
import Requests, { fetchMovies } from "../Requests";
import Card from "../components/Card";
import { PAGE_NAME } from "../global/globals";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoLoading from "../components/LogoLoading";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useParams();

  useEffect(() => {
    document.title = `${PAGE_NAME}-Search`;
  }, []);

  const favourites = useSelector((state) => state.favs.movies) || [];

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchMovies(Requests.fetchSearchResult(query))
        .then((data) => {
          // console.log(data.results);
          const resultsWithFavStatus = data.results.map((result) => {
            const isFav = favourites.some((fav) => fav.id === result.id);
            return { ...result, isFav };
          });
          // console.log("Result with Fav Status:", resultsWithFavStatus);
          setSearchResult(resultsWithFavStatus);
        })
        .catch((err) => {
          return err;
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [query, favourites]);

  return (
    <div className="search-result">
      <h1>Search Result</h1>
      {isLoading ? (
        <LogoLoading />
      ) : query ? (
        <div>
          {searchResult && searchResult.length > 0 ? (
            <div className="movie-list">
              {searchResult.map((result) => {
                return (
                  <Card key={result.id} movie={result} isFav={result.isFav} />
                );
              })}
            </div>
          ) : (
            <h2>Opps,No Movie Matches </h2>
          )}
        </div>
      ) : (
        <div>You haven't entered a movie...</div>
      )}
    </div>
  );
};

export default Search;
