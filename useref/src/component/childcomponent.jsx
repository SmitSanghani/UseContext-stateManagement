import React from "react";

const Childcomponent = React.memo((props) => {
  return (
    <div>
      childcomponent
      <button>{props.btnName}</button>
    </div>
  );
});

export default Childcomponent;
