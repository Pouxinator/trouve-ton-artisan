import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../services/api";
import "./ArtisanDetail.scss";

function ArtisanDetail() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function fetchArtisan() {
      try {
        setLoading(true);

        const response = await api.get(`/artisans/${id}`);

        setArtisan(response.data);
      } catch (error) {
        console.error(error);
        setArtisan(null);
      } finally {
        setLoading(false);
      }
    }

    fetchArtisan();
  }, [id]);

  const renderStars = (note) => {
    const rating = Math.round(Number(note));

    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={index < rating ? "bi bi-star-fill" : "bi bi-star"}
        aria-hidden="true"
      ></i>
    ));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      return "Veuillez renseigner votre nom.";
    }

    if (!form.email.trim()) {
      return "Veuillez renseigner votre email.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Veuillez renseigner une adresse email valide.";
    }

    if (!form.subject.trim()) {
      return "Veuillez renseigner l'objet de votre message.";
    }

    if (!form.message.trim()) {
      return "Veuillez écrire votre message.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormError("");
    setFormSuccess("");

    const errorMessage = validateForm();

    if (errorMessage) {
      setFormError(errorMessage);
      return;
    }

    try {
      setSending(true);

      await api.post(`/artisans/${id}/contact`, form);

      setFormSuccess("Votre message a bien été envoyé.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setFormError(
        error.response?.data?.message ||
          "L'envoi du message est momentanément indisponible. Veuillez réessayer plus tard."
      );
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <main className="container py-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>

          <p className="mt-3">Chargement...</p>
        </div>
      </main>
    );
  }

  if (!artisan) {
    return (
      <main className="container py-5">
        <div className="text-center py-5">
          <h1>Artisan introuvable</h1>

          <p>
            L'artisan demandé n'existe pas ou n'est plus disponible.
          </p>

          <Link to="/artisans" className="btn btn-primary">
            Retour aux artisans
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="artisan-detail">
      <div className="container py-5">
        <Link
          to="/artisans"
          className="artisan-detail__back"
        >
          <i
            className="bi bi-arrow-left me-2"
            aria-hidden="true"
          ></i>

          Retour aux artisans
        </Link>

        <section
          className="artisan-detail__card"
          data-aos="fade-up"
        >
          <div className="artisan-detail__header">
            <div className="artisan-detail__avatar">
              {artisan.name?.charAt(0)}
            </div>

            <div>
              <span className="artisan-detail__category">
                {artisan.Specialty?.Category?.name || "Catégorie"}
              </span>

              <h1>{artisan.name}</h1>

              <p
                className="artisan-detail__rating"
                aria-label={`Note ${artisan.note} sur 5`}
              >
                <span>{renderStars(artisan.note)}</span>

                <small>{artisan.note}/5</small>
              </p>

              <p className="artisan-detail__meta">
                <i
                  className="bi bi-tools me-2"
                  aria-hidden="true"
                ></i>

                {artisan.Specialty?.name || "Spécialité non renseignée"}

                <span className="mx-2">·</span>

                <i
                  className="bi bi-geo-alt-fill me-2"
                  aria-hidden="true"
                ></i>

                {artisan.city}
              </p>
            </div>
          </div>

          <div className="artisan-detail__content">
            <section data-aos="fade-right">
              <h2>À propos</h2>

              <p>
                {artisan.about || "Aucune description disponible."}
              </p>

              {artisan.website && (
                <a
                  className="artisan-detail__website"
                  href={artisan.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="bi bi-box-arrow-up-right me-2"
                    aria-hidden="true"
                  ></i>

                  Voir le site web
                </a>
              )}
            </section>

            <section
              className="artisan-detail__contact"
              data-aos="fade-left"
            >
              <h2>Contacter cet artisan</h2>

              {formError && (
                <div
                  className="alert alert-danger"
                  role="alert"
                >
                  {formError}
                </div>
              )}

              {formSuccess && (
                <div
                  className="alert alert-success"
                  role="alert"
                >
                  {formSuccess}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Nom
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    disabled={sending}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="votre.email@mail.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={sending}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="subject"
                    className="form-label"
                  >
                    Objet
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Objet de votre demande"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={sending}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="form-label"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Votre message"
                    value={form.message}
                    onChange={handleChange}
                    disabled={sending}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        aria-hidden="true"
                      ></span>

                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i
                        className="bi bi-send-fill me-2"
                        aria-hidden="true"
                      ></i>

                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ArtisanDetail;