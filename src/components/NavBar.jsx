import { Link } from "react-router-dom";
import { useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
    const closeMenu = () => {
        const menu = document.getElementById("navbarNav");
        if (menu && menu.classList.contains("show")) {
            new bootstrap.Collapse(menu).hide();
        }
    };

    // Close menu when clicking anywhere on the page
    useEffect(() => {
        const handleClick = (event) => {
            const nav = document.getElementById("navbarNav");
            const toggler = document.querySelector(".navbar-toggler");

            // If the click is outside both the toggle button and menu content:
            if (
                nav &&
                nav.classList.contains("show") &&
                event.target !== nav &&
                !nav.contains(event.target) &&
                event.target !== toggler &&
                !toggler.contains(event.target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
                    YouTube Thumbnail Downloader
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts" onClick={closeMenu}>Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMenu}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/privacy" onClick={closeMenu}>Privacy Policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/terms" onClick={closeMenu}>Terms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dmca" onClick={closeMenu}>DMCA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact Us</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
