import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boards from "./routers/Boards";
import Home from "./routers/Home";
import Recipe from "./routers/Recipe";
import Search from "./routers/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boards" element={<Boards />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
