import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedSearch = search.trim();

    if (trimmedSearch) {
      navigate(`/artisans?search=${encodeURIComponent(trimmedSearch)}`);
      setSearch("");
    }
  }

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        type="search"
        placeholder="Rechercher un artisan"
        aria-label="Rechercher un artisan"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button className="search-bar__button" type="submit">
        <i className="bi bi-search me-2" aria-hidden="true"></i>
        Rechercher
      </button>
    </form>
  );
}

export default SearchBar;