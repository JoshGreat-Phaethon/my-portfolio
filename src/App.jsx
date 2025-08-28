import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SecretPanel from "./components/SecretPanel";
import Contact from "./components/Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="portfolio">
      {/* Navbar & Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <main className="main-content">
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <About />}
        {currentPage === "skills" && <Skills />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Tombol untuk membuka Secret Panel */}
      <button
        className="secret-button"
        onClick={() => setShowSecret(true)}
        title="Klik aku ❤️"
      >
        ❤️
      </button>

      {/* Secret Panel */}
      {showSecret && <SecretPanel setShowSecret={setShowSecret} />}
    </div>
  );
};

export default App;
