// src/App.jsx
import { HashRouter } from "react-router-dom";
import { Header } from "./features/layout/components/Header";
import { Footer } from "./features/layout/components/Footer";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </HashRouter>
  );
};

export default App
