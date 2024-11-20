import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    padding: "1rem",
   background: "black", // Gradient frrange to yellow
    color: "#red",
  };

  const ulStyle = {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    margin: "20px",
    padding: "0px",
  };

  const linkStyle = {
   fontsize:"10px",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "5rem 10rem",
    borderRadius: "5px",
    transition: "background 0.3s ease",
    color:"red",
  };

  const linkHoverStyle = {
    background: "white",
    color: "white",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.background = linkHoverStyle.background)}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.background = linkHoverStyle.background)}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/predict"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.background = linkHoverStyle.background)}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
          >
            Prediction
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
