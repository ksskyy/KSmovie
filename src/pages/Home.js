import { useEffect, useState } from "react";
import { PAGE_NAME } from "../global/globals";
import Banner from "../components/Banner";
import Panel from "../components/Panel";
import LogoLoading from "../components/LogoLoading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = `${PAGE_NAME}-Home`;
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <div>
      {isLoading ? (
        <LogoLoading />
      ) : (
        <div>
          <Banner />
          <Panel />
        </div>
      )}
    </div>
  );
};

export default Home;
