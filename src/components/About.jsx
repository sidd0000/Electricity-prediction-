const About = () => {
    const pageStyle = {
      padding: "2rem",
      backgroundColor: "#FFF8E1",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "2rem auto",
    };
  
    return (
      <div style={pageStyle}>
        <h1 style={{ color: "#FFAA00" }}>About This Project</h1>
        <p>
          This system is designed to predict electricity demand and production trends based on
          historical data. Built using Flask and TensorFlow, it empowers users with reliable
          insights for better energy planning.
        </p>
      </div>
    );
  };
  
  export default About;
  