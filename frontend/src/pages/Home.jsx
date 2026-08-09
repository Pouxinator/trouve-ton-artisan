import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import api from "../services/api";

import SearchBar from "../components/SearchBar/SearchBar";
import StepCard from "../components/StepCard/StepCard";
import ArtisanCard from "../components/ArtisanCard/ArtisanCard";

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopArtisans() {
      try {
        const response = await api.get("/artisans/top");
        setTopArtisans(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTopArtisans();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Trouve ton artisan | Région Auvergne-Rhône-Alpes
        </title>

        <meta
          name="description"
          content="Trouvez rapidement un artisan qualifié en Auvergne-Rhône-Alpes. Consultez les artisans par catégorie, découvrez les artisans du mois et contactez-les facilement."
        />

        <meta
          name="keywords"
          content="artisan, Auvergne-Rhône-Alpes, bâtiment, services, fabrication, alimentation"
        />
      </Helmet>

      <section className="home-hero">
        <div className="container">
          <div
            className="home-hero__content"
            data-aos="fade-up"
          >
            <span className="home-hero__badge">
              Région Auvergne-Rhône-Alpes
            </span>

            <h1>Trouvez un artisan qualifié près de chez vous</h1>

            <p>
              Recherchez facilement un professionnel de confiance selon son
              nom, sa catégorie ou sa ville.
            </p>

            <div className="home-hero__search">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      <main className="container py-5">
        <section className="mb-5">
          <div className="section-heading text-center">
            <span>Mode d'emploi</span>

            <h2>Comment trouver mon artisan ?</h2>
          </div>

          <div className="row g-4">
            <div
              className="col-12 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <StepCard
                number="1"
                title="Choisir la catégorie d'artisanat."
              />
            </div>

            <div
              className="col-12 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <StepCard
                number="2"
                title="Choisir un artisan."
              />
            </div>

            <div
              className="col-12 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <StepCard
                number="3"
                title="Le contacter via le formulaire."
              />
            </div>

            <div
              className="col-12 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <StepCard
                number="4"
                title="Recevoir une réponse sous 48 heures."
              />
            </div>
          </div>
        </section>

        <section>
          <div className="section-heading text-center mb-5">
            <span>Notre sélection</span>

            <h2>Les artisans du mois</h2>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div
                className="spinner-border text-primary"
                role="status"
              >
                <span className="visually-hidden">
                  Chargement...
                </span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {topArtisans.map((artisan, index) => (
                <div
                  key={artisan.id}
                  className="col-12 col-md-6 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <ArtisanCard artisan={artisan} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;