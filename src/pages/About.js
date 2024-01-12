import { useEffect } from "react";
import PAGE_NAME from "../global/globals";

const About = () => {
  useEffect(() => {
    document.title = `${PAGE_NAME}-About`;
  }, []);
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};

export default About;
