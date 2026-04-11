import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container">

        <div className="row text-center text-md-start align-items-start">

          {/* Descripción */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-plug"></i> API Hub
            </h5>
            <p className="text-secondary small">
              Plataforma dedicada a la exploración, integración y gestión de APIs. 
              Descubre servicios, conecta aplicaciones y potencia tus proyectos 
              con tecnología moderna.
            </p>
          </div>

          {/* Ubicación */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-geo-alt"></i> Ubicación
            </h5>

            <p className="text-secondary small mb-2">
              Medellín, Colombia
            </p>

            <p className="text-secondary small">
              <i className="bi bi-envelope me-2"></i>
              soporte@apihub.com
            </p>
          </div>

          {/* Redes */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-share"></i> Síguenos
            </h5>

            <div className="d-flex justify-content-center justify-content-md-start gap-3">

              <a href="#" className="text-light fs-5 social-icon">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-light fs-5 social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" className="text-light fs-5 social-icon">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-light fs-5 social-icon">
                <i className="bi bi-github"></i>
              </a>

            </div>
          </div>

        </div>

        {/* Línea */}
        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} API Hub — Todos los derechos reservados.
        </div>

      </div>

      {/* 🔥 Estilos extra */}
      <style>
        {`
          .social-icon {
            transition: all 0.3s ease;
          }

          .social-icon:hover {
            color: #0d6efd;
            transform: translateY(-3px) scale(1.1);
          }
        `}
      </style>

    </footer>
  );
};