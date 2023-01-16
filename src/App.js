import React from "react";
import Navigation from "./layouts/navbar";
import About from "./components/about";
import Categorieslist from "./components/categorieslist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import context and wrapp app content in it to use it and state thru the app
import { MoneyTrackerProvider } from "./context/context";

//create the basic layout
function App() {
  return (
    <>
    <MoneyTrackerProvider>
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Categorieslist />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
      </MoneyTrackerProvider>
    </>
  );
}

export default App;
