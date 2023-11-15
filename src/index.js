import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project";
import Skill from "./pages/skill";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/skill/:id" element={<Skill />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
