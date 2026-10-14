import { useState } from "react";

const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
  ];

  const [index, setIndex] = useState(0);
  const [angle, setAngle] = useState(0);

  const left = () => {
    setAngle((prev) => prev - 90);
    console.log("Rotated left");
  };

  const right = () => {
    setAngle((prev) => prev + 90);
    console.log("Rotated right");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Rotator
      </h1>

      <img
        src={images[index]}
        alt="img-here"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          transform: `rotate(${angle}deg)`,
          transition: "transform 0.5s ease"
        }}
      />

      <br /><br />

      <button onClick={left}>Rotate Left</button>{" "}
      <button onClick={right}>Rotate Right</button>
    </div>
  );
};

export default App;