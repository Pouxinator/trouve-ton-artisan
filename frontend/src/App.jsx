import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Artisans from "./pages/Artisans";
import ArtisanDetail from "./pages/ArtisanDetail";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/artisans" element={<Artisans />} />

        <Route path="/artisans/:id" element={<ArtisanDetail />} />

        <Route
          path="/mentions-legales"
          element={<LegalPage title="Mentions légales" />}
        />

        <Route
          path="/donnees-personnelles"
          element={<LegalPage title="Données personnelles" />}
        />

        <Route
          path="/accessibilite"
          element={<LegalPage title="Accessibilité" />}
        />

        <Route
          path="/cookies"
          element={<LegalPage title="Cookies" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;