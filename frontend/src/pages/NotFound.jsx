import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NotFound.scss";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page non trouvée | Trouve ton artisan</title>

        <meta
          name="description"
          content="La page demandée est introuvable. Retournez à l'accueil de Trouve ton artisan."
        />
      </Helmet>

      <main className="not-found">
        <div className="container">
          <section
            className="not-found__content"
            data-aos="zoom-in"
          >
            <span className="not-found__badge">
              Erreur 404
            </span>

            <img
              src="/images/404.png"
              alt="Illustration d'une page introuvable"
              className="not-found__image"
            />

            <h1>Page non trouvée</h1>

            <p>
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>

            <Link
              to="/"
              className="btn btn-primary btn-lg"
            >
              Retour à l'accueil
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default NotFound;