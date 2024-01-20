import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Panel.css";
import Movie from "./Movie";
import { useState } from "react";

const Panel = () => {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [uncoming, setUncoming] = useState([]);
  // store each category in its own state
  // popularMovies
  // nowPlayingMovies
  return (
    <div className="panel">
      <Tabs>
        <TabList>
          <Tab>Popular</Tab>
          <Tab>NowPlaying</Tab>
          <Tab>TopRated</Tab>
          <Tab>Uncoming</Tab>
        </TabList>
        <TabPanel>
          <Movie />
        </TabPanel>
        <TabPanel>
          <p>n</p>
        </TabPanel>
        <TabPanel>
          <p>t</p>
        </TabPanel>
        <TabPanel>
          <p>u</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Panel;
