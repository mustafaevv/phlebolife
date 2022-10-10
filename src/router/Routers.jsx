import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Info from "../pages/Info";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info/:id" element={<Info />} />
    </Routes>
  );
};

export default Routers;
