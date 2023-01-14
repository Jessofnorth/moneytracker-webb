import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./layouts/navbar";
import Entrieslist from "./components/entrieslist";
import About from "./components/about";
import Categorieslist from "./components/categorieslist";
import AddEntry from "./components/addentry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//create the basic layout
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container>
          <main className="container mt-3 d-flex justify-content-center">
            <Routes>
              <Route path="/" element={<Entrieslist />} />
              <Route path="/addentry" element={<AddEntry />} />
              <Route path="/categories" element={<Categorieslist />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Container>
      </Router>
    </>
  );
}

export default App;
