import { Link } from "react-router-dom";
import home from "../assets/home-icon.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={home} alt="home-icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
