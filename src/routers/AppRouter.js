import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favourite from "../pages/Favourite";
// import Banner from "../components/Banner";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Banner /> */}
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
export default AppRouter;
