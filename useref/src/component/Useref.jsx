import React, { useRef, useState } from "react";

const UseRef = () => {
  const [count, setcount] = useState(""); // ✅ Fixed here

  const refElement = useRef(0);

  const add = (e) => {
    setcount(e.target.value);         // Update input value
    refElement.current = refElement.current + 1; // Count re-render nahi karega
  };

  return (
    <div>
      <h2>UseRef Example</h2>
      <input
        type="text"
        onChange={add}
        value={count} // Controlled input
        placeholder="Type something..."
      />
      <h1>Render Count: {refElement.current}</h1>
    </div>
  );
};

export default UseRef;
