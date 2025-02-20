import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{
            backgroundImage: `url("/cover.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 4px 10px rgba(212, 175, 55, 0.4)",
            padding: "15px 25px",
            borderRadius: "10px",
            height: "150px",
          }}
        >
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
          ></Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                📖 About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                📞 Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="text-center mt-5 p-3 bg-dark text-light">
          &copy; 2003 Lyceum of Alabang. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
