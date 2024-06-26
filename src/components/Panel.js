import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import Requests, { fetchMovies } from "../Requests";

const Panel = () => {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const getMovies = () => {
    fetchMovies(Requests.fetchPopular)
      .then((data) => {
        setPopular(data.results);
      })
      .catch((err) => {
        return err;
      });
  };
  const getNowMovies = () => {
    fetchMovies(Requests.fetchNowPlaying)
      .then((data) => {
        // console.log("Now Playing Movies:", data.results);
        setNowPlaying(data.results);
      })
      .catch((err) => {
        return err;
      });
  };
  const getTopRatedMovies = () => {
    fetchMovies(Requests.fetchTopRated)
      .then((data) => {
        setTopRated(data.results);
      })
      .catch((err) => {
        return err;
      });
  };
  const getUpcomingMovies = () => {
    fetchMovies(Requests.fetchUpcoming)
      .then((data) => {
        setUpcoming(data.results);
      })
      .catch((err) => {
        return err;
      });
  };
  useEffect(() => {
    getMovies();
    getNowMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  return (
    <div className="panel">
      <Tabs>
        <TabList>
          <Tab>Popular</Tab>
          <Tab>NowPlaying</Tab>
          <Tab>TopRated</Tab>
          <Tab>Upcoming</Tab>
        </TabList>
        <TabPanel>
          <Movie title="Popular" movieList={popular} />
        </TabPanel>
        <TabPanel>
          <Movie title="Nowplaying" movieList={nowPlaying} />
        </TabPanel>
        <TabPanel>
          <Movie title="Top Rated" movieList={topRated} />
        </TabPanel>
        <TabPanel>
          <Movie title="Upcoming" movieList={upcoming} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Panel;
