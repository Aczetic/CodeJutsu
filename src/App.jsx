import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./App.css";
import Nav from "../Components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Membership from "./pages/Membership";
import LearningPaths from "./pages/LearningPaths";
import Forum from "./pages/Forum";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <div>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/courses"}>Courses</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/learning-paths"}>Learning Paths</NavLink>
            <NavLink to={"/membership"}>Membership</NavLink>
            <NavLink to={"/forum"}>Forum</NavLink>
          </div>
        </Nav>
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/learning-paths"} element={<LearningPaths />} />
          <Route path={"/forum"} element={<Forum />} />
          <Route path={"/membership"} element={<Membership />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
