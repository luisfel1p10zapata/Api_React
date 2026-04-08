import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || null;
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/inicio");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <i className="bi bi-plug"></i>
          Apis React
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Menú */}
          <ul className="navbar-nav ms-auto me-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door me-1"></i> Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <i className="bi bi-speedometer2"></i> Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/apis">
                <i className="bi bi-diagram-3"></i> APIs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/noticias">
                <i className="bi bi-newspaper me-1"></i> Noticias
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                <i className="bi bi-envelope me-1"></i> Contacto
              </Link>
            </li>

          </ul>

          {/* 🔍 Buscador */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Buscar..."
            />
            <button className="btn btn-outline-light btn-sm" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* 👤 Usuario dinámico */}
          {!token ? (
            <Link
              to="/inicio"
              className="btn btn-outline-light btn-sm d-flex align-items-center gap-1"
            >
              <i className="bi bi-person-circle"></i>
              Iniciar sesión
            </Link>
          ) : (
            <div className="d-flex align-items-center gap-2">
              
              <span className="text-light small">
                👋 {user?.name || "Usuario"}
              </span>

              <button
                onClick={logout}
                className="btn btn-danger btn-sm"
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Salir
              </button>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
};