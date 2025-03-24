import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Sign from "./Sign";
import Create from "./Create";
import Acount from "./Acount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Acount" element={<Acount />} />
      
    </Routes>
  </BrowserRouter>
);
