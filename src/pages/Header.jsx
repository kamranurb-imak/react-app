import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-mark">RB</span>
          <div>
            <p className="brand-name">React Blog</p>
            <p className="brand-tag">Easy browsing for Home and Users</p>
          </div>
        </div>

        <nav className="nav-menu" aria-label="Primary navigation">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
          >
            Users
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header