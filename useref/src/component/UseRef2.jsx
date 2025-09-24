import React, { useRef, useState } from "react";

const UseRef2 = () => {
  const [count, setcount] = useState(0);

  const Refcount = useRef(0);

  const statinc = () => {
    setcount(count + 1);
    console.log(count);
  };
  const Refinc = () => {
    Refcount.current = Refcount.current + 1;
    console.log(Refcount.current);
  };
  return (
    <div>
      UseRef2
      <h1>{count}</h1>
      <h1>{Refcount.current}</h1>
      <button onClick={statinc}>add</button>
      <button onClick={Refinc}>add</button>
    </div>
  );
};

export default UseRef2;
