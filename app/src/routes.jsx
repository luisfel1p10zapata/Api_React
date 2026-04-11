import { Routes, Route } from "react-router-dom";
import { Content } from "./features/layout/components/Content";
import { Contactos } from "./features/view/components/Contactos";
import { Noticias } from "./features/view/components/Noticias";
import { ApiRyC } from "./features/Api/components/ApiRyC_Axios";
import { Inicio } from "./features/auth/components/Inicio";
import { Registro } from "./features/auth/components/Registro";
import { Contraseña } from "./features/auth/components/Contraseña";
import { Dashboard } from "./features/Dashboard/components/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>

      {/* 🟢 Ruta principal */}
      <Route path="/" element={<Content />} />

      {/* 🟢 Públicas */}
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/contraseña" element={<Contraseña />} />

      {/* 🟢 TODAS abiertas */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contacto" element={<Contactos />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/apis" element={<ApiRyC />} />

    </Routes>
  );
};