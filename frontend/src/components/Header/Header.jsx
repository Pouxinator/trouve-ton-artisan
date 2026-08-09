import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

function Header() {
  const categories = [
    "Bâtiment",
    "Services",
    "Fabrication",
    "Alimentation",
  ];

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand site-header__brand"
            aria-label="Retour à l'accueil"
          >
            <span>Trouve ton artisan</span>
            <small>Auvergne-Rhône-Alpes</small>
          </Link>

          <button
            className="navbar-toggler site-header__toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarMain"
          >
            <ul className="navbar-nav mx-lg-auto mb-3 mb-lg-0">
              {categories.map((category) => (
                <li
                  className="nav-item"
                  key={category}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to={`/artisans?category=${encodeURIComponent(
                      category
                    )}`}
                  >
                    {category}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="site-header__search">
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;