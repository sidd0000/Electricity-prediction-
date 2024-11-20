// // import { useState } from "react";
// // import axios from "axios";

// // const PredictionForm = () => {
// //   const [state, setState] = useState("");
// //   const [date, setDate] = useState("");
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState(null);

// //   const formStyle = {
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "1rem",
// //     padding: "1rem",
// //     backgroundColor: "#FFF8E1",
// //     borderRadius: "10px",
// //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //     maxWidth: "500px",
// //     margin: "2rem auto",
// //   };

// //   const inputStyle = {
// //     padding: "0.5rem",
// //     border: "1px solid #FFDD00",
// //     borderRadius: "5px",
// //     fontSize: "1rem",
// //   };

// //   const buttonStyle = {
// //     padding: "0.7rem 1rem",
// //     backgroundColor: "#FFAA00",
// //     color: "#FFF",
// //     fontWeight: "bold",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //     transition: "background 0.3s ease",
// //   };

// //   const validateDate = (inputDate) => {
// //     const regex = /^\d{4}-\d{2}-\d{2}$/;
// //     return regex.test(inputDate);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     setResult(null);

// //     if (!validateDate(date)) {
// //       setError("Date must be in the format YYYY-MM-DD.");
// //       return;
// //     }

// //     try {
// //       const response = await axios.get(`http://127.0.0.1:5000/predict/${state}/${date}`);
// //       setResult(response.data);
// //     } catch (err) {
// //       setError(err.response ? err.response.data.error : "Something went wrong");
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit} style={formStyle}>
// //         <h2 style={{ color: "#FFAA00", textAlign: "center" }}>Prediction Form</h2>
// //         <input
// //           type="text"
// //           placeholder="Enter State"
// //           value={state}
// //           onChange={(e) => setState(e.target.value)}
// //           required
// //           style={inputStyle}
// //         />
// //         <input
// //           type="date"
// //           value={date}
// //           onChange={(e) => setDate(e.target.value)}
// //           required
// //           style={inputStyle}
// //         />
// //         <button type="submit" style={buttonStyle}>
// //           Predict
// //         </button>
// //       </form>
// //       {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}
// //       {result && (
// //         <div style={formStyle}>
// //           <h3>Prediction Results:</h3>
// //           <pre style={{ overflowX: "auto", background: "#FFF", padding: "1rem" }}>
// //             {JSON.stringify(result, null, 2)}
// //           </pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PredictionForm;
// import { useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const PredictionForm = () => {
//   const [state, setState] = useState("");
//   const [date, setDate] = useState("");
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const containerStyle = {
//     background: "linear-gradient(90deg, grey,white)", // Gradient frrange to yellow
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "2rem",
//   };

//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1.5rem",
//     padding: "2rem",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     borderRadius: "15px",
//     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//     maxWidth: "800px",
//     width: "100%",
//     animation: "fadeIn 1.5s ease-in-out",
//   };

//   const inputStyle = {
//     padding: "0.8rem",
//     border: "2px solid #FFAA00",
//     borderRadius: "5px",
//     fontSize: "1.2rem",
//     outline: "none",
//     transition: "border-color 0.3s ease",
//   };

//   const inputFocusStyle = {
//     borderColor: "#FF5722",
//   };

//   const buttonStyle = {
//     padding: "1rem",
//     backgroundColor: "#FFAA00",
//     color: "#FFF",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     transition: "background-color 0.3s ease, transform 0.3s ease",
//   };

//   const buttonHoverStyle = {
//     backgroundColor: "#FF5722",
//     transform: "scale(1.05)",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginTop: "1rem",
//   };

//   const tableCellStyle = {
//     padding: "0.8rem",
//     border: "1px solid #ddd",
//     textAlign: "center",
//   };

//   const chartContainerStyle = {
//     marginTop: "2rem",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     padding: "1.5rem",
//     borderRadius: "15px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   };

//   const validateDate = (inputDate) => /^\d{4}-\d{2}-\d{2}$/.test(inputDate);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setResult(null);

//     if (!validateDate(date)) {
//       setError("Date must be in the format YYYY-MM-DD.");
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:5000/predict/${state}/${date}`
//       );
//       setResult(response.data);
//     } catch (err) {
//       setError(err.response ? err.response.data.error : "Something went wrong");
//     }
//   };

//   const prepareChartData = (result) => {
//     const labels = Object.keys(result);
//     const coalData = labels.map((date) => result[date]["Coal Production (MW)"]);
//     const peakDemandData = labels.map((date) => result[date]["Peak Demand (MW)"]);
//     const peakProductionData = labels.map((date) => result[date]["Peak Production (MW)"]);
//     const solarData = labels.map((date) => result[date]["Solar Production (MW)"]);
//     const totalProductionData = labels.map((date) => result[date]["Total Production (MW)"]);

//     return {
//       labels,
//       datasets: [
//         { label: "Coal Production (MW)", data: coalData, borderColor: "#FF5733" },
//         { label: "Peak Demand (MW)", data: peakDemandData, borderColor: "#33FF57" },
//         { label: "Peak Production (MW)", data: peakProductionData, borderColor: "#3357FF" },
//         { label: "Solar Production (MW)", data: solarData, borderColor: "#FF33A1" },
//         { label: "Total Production (MW)", data: totalProductionData, borderColor: "#FFB533" },
//       ],
//     };
//   };

//   return (
//     <div style={containerStyle}>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <h2 style={{ textAlign: "center", color: "#FFAA00" }}>Electricity Prediction</h2>
//         <input
//           type="text"
//           placeholder="Enter State"
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           required
//           style={{ ...inputStyle, ...inputFocusStyle }}
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//           style={inputStyle}
//         />
//         <button
//           type="submit"
//           style={buttonStyle}
//           onMouseEnter={(e) => {
//             e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
//             e.target.style.transform = buttonHoverStyle.transform;
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.backgroundColor = buttonStyle.backgroundColor;
//             e.target.style.transform = "scale(1)";
//           }}
//         >
//           Predict
//         </button>
//       </form>

//       {error && <div style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>{error}</div>}

//       {result && (
//         <div style={formStyle}>
//           <h3>Prediction Results</h3>
//           <table style={tableStyle}>
//             <thead>
//               <tr>
//                 <th style={tableCellStyle}>Date</th>
//                 <th style={tableCellStyle}>Coal (MW)</th>
//                 <th style={tableCellStyle}>Peak Demand (MW)</th>
//                 <th style={tableCellStyle}>Peak Production (MW)</th>
//                 <th style={tableCellStyle}>Solar (MW)</th>
//                 <th style={tableCellStyle}>Total (MW)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.keys(result).map((date) => (
//                 <tr key={date}>
//                   <td style={tableCellStyle}>{date}</td>
//                   <td style={tableCellStyle}>{result[date]["Coal Production (MW)"]}</td>
//                   <td style={tableCellStyle}>{result[date]["Peak Demand (MW)"]}</td>
//                   <td style={tableCellStyle}>{result[date]["Peak Production (MW)"]}</td>
//                   <td style={tableCellStyle}>{result[date]["Solar Production (MW)"]}</td>
//                   <td style={tableCellStyle}>{result[date]["Total Production (MW)"]}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div style={chartContainerStyle}>
//             <Line data={prepareChartData(result)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PredictionForm;
import { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { jsPDF } from "jspdf"; // Import jsPDF

const PredictionForm = () => {
  const [state, setState] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const containerStyle = {
    background: "linear-gradient(90deg, navy,teal)", // Gradient frrange to yellow
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    maxWidth: "800px",
    width: "100%",
    animation: "fadeIn 1.5s ease-in-out",
  };

  const inputStyle = {
    padding: "0.8rem",
    border: "2px solid #FFAA00",
    borderRadius: "5px",
    fontSize: "1.2rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const inputFocusStyle = {
    borderColor: "#FF5722",
  };

  const buttonStyle = {
    padding: "1rem",
    backgroundColor: "blue",
    color: "#FFF",
    fontSize: "1rem",
    fontWeight: "bold",
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

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
  };

  const tableCellStyle = {
    padding: "0.8rem",
    border: "1px solid #ddd",
    textAlign: "center",
  };

  const chartContainerStyle = {
    marginTop: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "1.5rem",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const validateDate = (inputDate) => /^\d{4}-\d{2}-\d{2}$/.test(inputDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!validateDate(date)) {
      setError("Date must be in the format YYYY-MM-DD.");
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/predict/${state}/${date}`
      );
      setResult(response.data);
    } catch (err) {
      setError(err.response ? err.response.data.error : "Something went wrong");
    }
  };

  const prepareChartData = (result) => {
    const labels = Object.keys(result);
    const coalData = labels.map((date) => result[date]["Coal Production (MW)"]);
    const peakDemandData = labels.map((date) => result[date]["Peak Demand (MW)"]);
    const peakProductionData = labels.map((date) => result[date]["Peak Production (MW)"]);
    const solarData = labels.map((date) => result[date]["Solar Production (MW)"]);
    const totalProductionData = labels.map((date) => result[date]["Total Production (MW)"]);

    return {
      labels,
      datasets: [
        { label: "Coal Production (MW)", data: coalData, borderColor: "#FF5733" },
        { label: "Peak Demand (MW)", data: peakDemandData, borderColor: "#33FF57" },
        { label: "Peak Production (MW)", data: peakProductionData, borderColor: "#3357FF" },
        { label: "Solar Production (MW)", data: solarData, borderColor: "#FF33A1" },
        { label: "Total Production (MW)", data: totalProductionData, borderColor: "#FFB533" },
      ],
    };
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);

    doc.text("Electricity Prediction Results", 20, 20);
    doc.text(`State: ${state}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 40);

    let yOffset = 50;
    Object.keys(result).forEach((date) => {
      doc.text(`${date}:`, 20, yOffset);
      yOffset += 10;
      doc.text(`Coal Production: ${result[date]["Coal Production (MW)"]} MW`, 20, yOffset);
      yOffset += 10;
      doc.text(`Peak Demand: ${result[date]["Peak Demand (MW)"]} MW`, 20, yOffset);
      yOffset += 10;
      doc.text(`Peak Production: ${result[date]["Peak Production (MW)"]} MW`, 20, yOffset);
      yOffset += 10;
      doc.text(`Solar Production: ${result[date]["Solar Production (MW)"]} MW`, 20, yOffset);
      yOffset += 10;
      doc.text(`Total Production: ${result[date]["Total Production (MW)"]} MW`, 20, yOffset);
      yOffset += 20;
    });

    // Save the PDF
    doc.save("prediction_results.pdf");
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={{ textAlign: "center", color: "Red" }}>Electricity Prediction</h1>
        <input
          type="text"
          placeholder="Enter State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          style={{ ...inputStyle, ...inputFocusStyle }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={inputStyle}
        />
        <button
          type="submit"
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
          Predict
        </button>
      </form>

      {error && <div style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>{error}</div>}

      {result && (
        <div style={formStyle}>
          <h3>Prediction Results</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableCellStyle}>Date</th>
                <th style={tableCellStyle}>Coal (MW)</th>
                <th style={tableCellStyle}>Peak Demand (MW)</th>
                <th style={tableCellStyle}>Peak Production (MW)</th>
                <th style={tableCellStyle}>Solar (MW)</th>
                <th style={tableCellStyle}>Total (MW)</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(result).map((date) => (
                <tr key={date}>
                  <td style={tableCellStyle}>{date}</td>
                  <td style={tableCellStyle}>{result[date]["Coal Production (MW)"]}</td>
                  <td style={tableCellStyle}>{result[date]["Peak Demand (MW)"]}</td>
                  <td style={tableCellStyle}>{result[date]["Peak Production (MW)"]}</td>
                  <td style={tableCellStyle}>{result[date]["Solar Production (MW)"]}</td>
                  <td style={tableCellStyle}>{result[date]["Total Production (MW)"]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={chartContainerStyle}>
            <Line data={prepareChartData(result)} options={{ responsive: true }} />
          </div>

          <button onClick={generatePDF} style={buttonStyle}>
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
