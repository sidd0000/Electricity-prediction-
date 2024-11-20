import React from "react";

const Home = () => {
  const containerStyle = {
    position: "relative",
    height: "100vh",
    background: "linear-gradient(teal,navy)", // Gratealdient frrange to yellow
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "0 1rem",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adds a soft transparent overlay
    zIndex: 0,
  };

  const contentStyle = {
    zIndex: 1,
    padding: "2.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
    color: "#333",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    transition: "transform 0.5s ease, opacity 0.5s ease",
    animation: "fadeIn 1.5s ease-in-out",
  };

  const headingStyle = {
    color: "#FF5722",
    fontSize: "2.8rem",
    marginBottom: "1rem",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const textStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    fontFamily: "'Open Sans', sans-serif",
    color: "#555",
  };

  const buttonStyle = {
    marginTop: "1.5rem",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#FFAA00",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#FF5722",
    transform: "scale(1.05)",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div
        style={contentStyle}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.02)";
          e.target.style.opacity = "0.95";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.opacity = "1";
        }}
      >
        <h1 style={headingStyle}>Electricity Prediction System</h1>
        <p style={textStyle}>
          Experience the future of energy management with our innovative electricity prediction system.
          Leverage the power of advanced analytics to plan smarter, reduce costs, and contribute to a
          sustainable future. Explore trends, make informed decisions, and take control of your energy
          today.
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.transform = buttonHoverStyle.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.transform = "scale(1)";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
