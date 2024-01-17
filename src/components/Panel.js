import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Panel.css";
import Movie from "./Movie";

const Panel = () => {
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
