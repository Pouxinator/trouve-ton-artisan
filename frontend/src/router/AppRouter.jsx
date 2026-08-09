import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Artisans from "../pages/Artisans";
import ArtisanDetail from "../pages/ArtisanDetail";
import NotFound from "../pages/NotFound";
import LegalPage from "../pages/LegalPage";

function AppRouter() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/artisans" element={<Artisans />} />
  <Route path="/artisans/:id" element={<ArtisanDetail />} />

  <Route path="/mentions-legales" element={<LegalPage />} />
  <Route path="/donnees-personnelles" element={<LegalPage />} />
  <Route path="/accessibilite" element={<LegalPage />} />
  <Route path="/cookies" element={<LegalPage />} />

  <Route path="*" element={<NotFound />} />
</Routes>
  );
}

export default AppRouter;