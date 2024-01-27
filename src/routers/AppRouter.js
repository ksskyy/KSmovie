import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favourite from "../pages/Favourite";
import MoviePage from "../pages/MoviePage";
// import Banner from "../components/Banner";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/favourite" element={<Favourite />} />
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
export default AppRouter;
