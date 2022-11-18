import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Boards } from "./routers/Boards";
import { Home } from "./routers/Home";
import { Recipe } from "./routers/Recipe";
import { Search } from "./routers/Search";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/boards" element={<Boards />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/search" element={<Search />}>
          <Route path="/search/:id" element={<Home />} />
        </Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
