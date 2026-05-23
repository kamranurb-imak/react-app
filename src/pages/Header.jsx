import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        Boolean(localStorage.getItem("token"))
    );
    const navigate = useNavigate();

    useEffect(() => {
        const updateAuth = () => {
            setIsLoggedIn(Boolean(localStorage.getItem("token")));
        };

        window.addEventListener("auth-change", updateAuth);
        window.addEventListener("storage", updateAuth);

        return () => {
            window.removeEventListener("auth-change", updateAuth);
            window.removeEventListener("storage", updateAuth);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.dispatchEvent(new Event("auth-change"));
        navigate("/login");
    };

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
                    {isLoggedIn ? (
                        <NavLink
                            to="/home"
                            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                        >
                            Home
                        </NavLink>

                    ) : null}

                    {isLoggedIn ? (
                        <NavLink
                            to="/users"
                            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                        >
                            Users
                        </NavLink>
                    ) : null}

                    {isLoggedIn ? (
                        <button className="auth-button logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `nav-link auth-button${isActive ? " active" : ""}`
                            }
                        >
                            Login
                        </NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header