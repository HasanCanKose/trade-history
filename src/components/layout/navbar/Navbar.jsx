import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h2>{title}</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/charts">Chart</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Trade History App",
};
export default Navbar;
