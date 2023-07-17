import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCards from "./components/MovieCards";
import MovieDetail from "./components/MovieDetail";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

// https://www.youtube.com/watch?v=AOlkcLtyXkw

function App() {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };

  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Container element={<MovieCards />} />} />
          {/* <Route path="//films" element={<Container />} /> */}
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>

    // <BrowserRouter>
    //   <div className="App">
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" element={<MovieCards />} />
    //       <Route path="/moviedetail/:id" element={<MovieDetail />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
