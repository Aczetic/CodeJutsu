import { useState } from "react";
import "../styles/nav.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
// todo : remove the white line below the nav
const Nav = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div id="nav-parent">
        <div id="logo"></div>

        <div className="nav">{children}</div>

        <div id="nav-mobile">
          <div onClick={() => setNavOpen(!navOpen)} id="close-nav">
            {!navOpen ? <MenuIcon /> : <CloseIcon />}
          </div>
          {navOpen && <div className="nav">{children}</div>}
        </div>

        <div id="members-area-btn">Members Area</div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "0.1rem",
          position: "relative",
          top: "4.5rem",
        }}
      ></div>
    </>
  );
};

export default Nav;
