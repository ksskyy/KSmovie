import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Showcase } from "./components/Showcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
