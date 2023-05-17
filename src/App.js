import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"
import Create from "./pages/movie/Create/Create";
import Popular from "./pages/movie/Popular/Popular";
import NowPlaying from "./pages/movie/NowPlaying/NowPlaying";
import TopRated from "./pages/movie/TopRated/TopRated";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie/create" element={<Create/>}></Route>
        <Route path="/movie/popular" element={<Popular/>}></Route>
        <Route path="/movie/now" element={<NowPlaying/>}></Route>
        <Route path="/movie/top" element={<TopRated/>}></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
