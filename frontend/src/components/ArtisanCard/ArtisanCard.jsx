import { Link } from "react-router-dom";
import "./ArtisanCard.scss";

function ArtisanCard({ artisan }) {
  const rating = Math.round(Number(artisan.note));

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={
          index < rating
            ? "bi bi-star-fill"
            : "bi bi-star"
        }
        aria-hidden="true"
      ></i>
    ));
  };

  return (
    <article className="artisan-card">
      <div className="artisan-card__body">
        <span className="artisan-card__badge">
          {artisan.Specialty?.name || "Artisan"}
        </span>

        <h3>{artisan.name}</h3>

        <p
          className="artisan-card__rating"
          aria-label={`Note ${artisan.note} sur 5`}
        >
          <span>{renderStars()}</span>
          <small>{artisan.note}/5</small>
        </p>

        <p className="artisan-card__location">
          <i className="bi bi-geo-alt-fill me-2" aria-hidden="true"></i>
          {artisan.city}
        </p>

        <Link className="artisan-card__button" to={`/artisans/${artisan.id}`}>
          Voir la fiche
          <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
        </Link>
      </div>
    </article>
  );
}

export default ArtisanCard;