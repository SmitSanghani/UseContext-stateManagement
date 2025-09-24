import React, { useState } from "react";
import Childcomponent from "./childcomponent";

const Usecallback = () => {
  const [count, setcount] = useState(0);

  const addOne = () => {
    setcount(count + 1);
  };
  return (
    <div>
      Usecallback
      <h1>{count}</h1>
      <button onClick={addOne}>add</button>
      <Childcomponent btnName="click" />
    </div>
  );
};

export default Usecallback;
