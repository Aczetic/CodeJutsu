import { NavLink } from "react-router";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <NavLink to={"/"}>© Code Jutsu</NavLink>
      <div id="icons">
        <NavLink to={"/"}>
          <InstagramIcon />
        </NavLink>
        <NavLink to={"/"}>
          <FacebookIcon />
        </NavLink>

        <NavLink to={"/"}>
          <YouTubeIcon />
        </NavLink>
        <NavLink to={"/"}>
          <XIcon />
        </NavLink>
      </div>
      <div id="agreements">
        <NavLink to={"/terms-of-use"}>Terms of use</NavLink>
        <NavLink to={"/privacy-policy"}>Privacy Policy</NavLink>
      </div>
    </div>
  );
};

export default Footer;
