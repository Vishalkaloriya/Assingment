// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page from "./pages/Page";

import Sidebar from "./components/Sidebar";

import Page1 from "./pages/Page1";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Page3 from "./pages/Page3";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimatePresence>
          <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/page/page1/page2" element={<Page2 />} />
            <Route path="/page/page1/page3" element={<Page3/>} />
            <Route path="/page" element={<Page />} />
            <Route path="/page/page1" element={<Page1 />} />

            <Route path="*" element={<>Error page</>} />
          </Routes>
          </Sidebar>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
