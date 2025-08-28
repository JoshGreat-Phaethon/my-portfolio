import React from "react";

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Gabriel</div>
        <ul className="nav-links">
          {["home", "about", "skills", "projects", "contact"].map((page) => (
            <li key={page}>
              <a
                className={currentPage === page ? "active" : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
