import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Membership from "./pages/Membership";
import LearningPaths from "./pages/LearningPaths";
import Forum from "./pages/Forum";
import Footer from "./Components/Footer";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/courses"}>Courses</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/learning-paths"}>Learning Paths</NavLink>
          <NavLink to={"/membership"}>Membership</NavLink>
          <NavLink to={"./youtube.com"}>Forum</NavLink>
        </Nav>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/learning-paths"} element={<LearningPaths />} />
          <Route path={"/forum"} element={<Forum />} />
          <Route path={"/membership"} element={<Membership />} />
          <Route path={"/terms-of-use"} element={<TermsOfUse />} />
          <Route path={"privacy-policy"} element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
