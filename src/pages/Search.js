import { useEffect, useState } from "react";
import Requests, { fetchMovies } from "../Requests";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { PAGE_NAME } from "../global/globals";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavMovie, deleteFavMovie } from "../features/favs/favsSlice";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${PAGE_NAME}-Search`;
  }, []);

  const favourites = useSelector((state) => state.favs.movies) || [];

  useEffect(() => {
    if (query) {
      fetchMovies(Requests.fetchSearchResult(query))
        .then((data) => {
          console.log(data.results);
          const resultsWithFavStatus = data.results.map((result) => {
            const isFav = favourites.some((fav) => fav.id === result.id);
            return { ...result, isFav };
          });
          console.log("Result with Fav Status:", resultsWithFavStatus);
          setSearchResult(resultsWithFavStatus);
        })
        .catch((err) => {
          return err;
        });
    }
  }, [query, favourites]);

  return (
    <main>
      <div className="search-result">
        <h1>Search Result</h1>
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
    </main>
  );
};

export default Search;
