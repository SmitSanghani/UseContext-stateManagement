import React, { useRef } from "react";

const UseRefAnimationExample = () => {
  // Create a ref for the box
  const boxRef = useRef(null);

  // Function to move the box to the right
  const moveRight = () => {
    const box = boxRef.current;
    if (box) {
      box.style.transform = "translateX(200px)";
      box.style.transition = "transform 0.5s ease";
    }
  };

  // Function to move the box back to original position
  const resetPosition = () => {
    const box = boxRef.current;
    if (box) {
      box.style.transform = "translateX(0px)";
      box.style.transition = "transform 0.5s ease";
    }
  };

  // Function to change the color of the box
  const changeColor = () => {
    const box = boxRef.current;
    if (box) {
      box.style.backgroundColor = 
        box.style.backgroundColor === "tomato" ? "skyblue" : "tomato";
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useRef Advanced Example: Animate a Box</h2>
      
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "tomato",
          margin: "20px 0",
          borderRadius: "8px",
        }}
      ></div>

      <button
        onClick={moveRight}
        style={{ padding: "8px 12px", marginRight: "10px", cursor: "pointer" }}
      >
        Move Right
      </button>

      <button
        onClick={resetPosition}
        style={{ padding: "8px 12px", marginRight: "10px", cursor: "pointer" }}
      >
        Reset
      </button>

      <button
        onClick={changeColor}
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        Change Color
      </button>
    </div>
  );
};

export default UseRefAnimationExample;
