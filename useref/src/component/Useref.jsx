import React, { useRef, useState } from "react";

const Useref = () => {
  const obj = {
    fname: useRef(),
    lname: useRef(),
  };

  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
  });

  const submit = () => {
    setFormValue({
      fname: obj.fname.current.value,
      lname: obj.lname.current.value,
    });
  };

  return (
    <div>
      <input type="text" ref={obj.fname} placeholder="First Name" />
      <input type="text" ref={obj.lname} placeholder="Last Name" />
      <button onClick={submit}>Click</button>

      <h3>First Name: {formValue.fname}</h3>
      <h3>Last Name: {formValue.lname}</h3>
    </div>
  );
};

export default Useref;
