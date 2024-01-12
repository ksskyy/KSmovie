import { useEffect } from "react";
import PAGE_NAME from "../global/globals";

const Favourite = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-Favourite`;
  }, []);
  return (
    <div>
      <h1>Favourite</h1>
    </div>
  );
};

export default Favourite;
