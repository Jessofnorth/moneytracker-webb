import React from "react";
import Navigation from "./layouts/navbar";
import About from "./components/about";
import Categorieslist from "./components/categorieslist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//create the basic layout
function App() {
  return (
    <>
          <Router>
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Categorieslist />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </Router>
    </>
  );
}

export default App;
