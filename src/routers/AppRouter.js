import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../components/Header";
import Favourite from "../pages/Favourite";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;
