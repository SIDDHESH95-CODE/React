import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  const btnStyle = {
    padding: "10px 30px",
    marginTop: "50px",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#000",
    border: "none",
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>
        My primary color is <span style={{color: color}}>{color}</span>
      </h1>

      <button style={btnStyle} onClick={() => setColor("blue")}>
        Hit me
      </button>
    </div>
  );
}

export default App;
