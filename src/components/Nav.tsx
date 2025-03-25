import styles from "./Nav.module.css";
import {Link, useLocation} from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const Pather = useLocation().pathname;
  
  return (
    <nav className = {styles.navbar}>
      <div className = {(Pather === "/") ? "nav-link active": "nav-link"}>
        <Link to = "/"> Home </Link>
      </div>  

      <div className = {(Pather === "Insert Link Later") ? "nav-link active": "nav-link"}>
        <Link to = "Insert Link Later"> Potential Candidates </Link>
      </div>
    </nav>
  )
};

export default Nav;

