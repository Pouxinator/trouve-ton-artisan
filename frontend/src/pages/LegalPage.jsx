import { Helmet } from "react-helmet-async";
import "./LegalPage.scss";

function LegalPage({ title }) {
  return (
    <>
      <Helmet>
        <title>{title} | Trouve ton artisan</title>
        <meta
          name="description"
          content={`${title} - Page en construction du site Trouve ton artisan.`}
        />
      </Helmet>

      <main className="container py-5">
        <section className="legal-page" data-aos="fade-up">
          <span className="legal-page__badge">Informations légales</span>

          <h1>{title}</h1>

          <p>
            Cette page est actuellement en construction. Son contenu sera ajouté
            ultérieurement par un cabinet spécialisé.
          </p>
        </section>
      </main>
    </>
  );
}

export default LegalPage;