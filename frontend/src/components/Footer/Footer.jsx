import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <h2 className="footer__title">Trouve ton artisan</h2>

            <p className="footer__subtitle">
              La plateforme officielle de la Région Auvergne-Rhône-Alpes pour
              trouver un artisan de confiance.
            </p>

            <div className="footer__contact">
              <p>
                <i className="bi bi-geo-alt-fill me-2" aria-hidden="true"></i>
                101 cours Charlemagne
              </p>

              <p>CS 20033</p>

              <p>69269 LYON CEDEX 02</p>

              <p>France</p>

              <p>
                <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
                +33 (0)4 26 73 40 00
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <h3>Navigation</h3>

            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>

              <li>
                <Link to="/artisans">Tous les artisans</Link>
              </li>

              <li>
                <Link to="/artisans?category=Bâtiment">Bâtiment</Link>
              </li>

              <li>
                <Link to="/artisans?category=Services">Services</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h3>Informations légales</h3>

            <ul>
              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>

              <li>
                <Link to="/donnees-personnelles">Données personnelles</Link>
              </li>

              <li>
                <Link to="/accessibilite">Accessibilité</Link>
              </li>

              <li>
                <Link to="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="footer__bottom">
          <p>© 2026 Région Auvergne-Rhône-Alpes</p>

          <p>Développé avec React • Bootstrap • Sass</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;