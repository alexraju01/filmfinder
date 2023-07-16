import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCards from "./components/MovieCards";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieCards />} />
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
