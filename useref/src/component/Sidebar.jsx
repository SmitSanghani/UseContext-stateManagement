import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>
        <Link to="/">Dashboard</Link>
      </p>

      <p>
        <Link to="/products">Products</Link>
      </p>
    </div>
  );
};

export default Sidebar;
