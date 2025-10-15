import React from "react";
import Deshboard from "./component/Deshboard";
import Products from "./component/Products";
import Sidebar from "./component/Sidebar";
// import Useref from "./component/Useref";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Deshboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
