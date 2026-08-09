import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard/ArtisanCard";
import "./Artisans.scss";

function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const category = searchParams.get("category");

  useEffect(() => {
    async function fetchArtisans() {
      try {
        setLoading(true);

        const response = await api.get("/artisans", {
          params: {
            search,
            category,
          },
        });

        setArtisans(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchArtisans();
  }, [search, category]);

  return (
    <main className="artisans-page">
      <section className="artisans-page__hero">
        <div className="container" data-aos="fade-up">
          <span>Annuaire des professionnels</span>

          <h1>
            {category
              ? `Artisans en ${category}`
              : search
              ? `Résultat pour "${search}"`
              : "Nos artisans"}
          </h1>

          <p>
            Découvrez les artisans de la région Auvergne-Rhône-Alpes et
            contactez facilement le professionnel qui correspond à votre besoin.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        ) : artisans.length === 0 ? (
          <div className="artisans-page__empty" data-aos="fade-up">
            <h2>Aucun artisan trouvé</h2>

            <p>
              Essayez une autre recherche ou revenez à la liste complète des
              artisans.
            </p>

            <Link to="/artisans" className="btn btn-primary">
              Voir tous les artisans
            </Link>
          </div>
        ) : (
          <>
            <p className="artisans-page__count">
              {artisans.length} artisan{artisans.length > 1 ? "s" : ""} trouvé
              {artisans.length > 1 ? "s" : ""}
            </p>

            <div className="row g-4">
              {artisans.map((artisan, index) => (
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={artisan.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <ArtisanCard artisan={artisan} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Artisans;