import React from 'react';

export const Content = () => {
  return (
    <div className="bg-light">

      {/* 🔥 HERO / BANNER */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">
            <i className="bi bi-plug me-2"></i>
            Plataforma de APIs Moderna
          </h1>

          <p className="lead text-secondary mt-3">
            Descubre, conecta e integra APIs fácilmente para potenciar tus proyectos
          </p>

          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-primary">
              <i className="bi bi-rocket-takeoff me-2"></i>
              Comenzar
            </button>

            <button className="btn btn-outline-light">
              <i className="bi bi-book me-2"></i>
              Ver documentación
            </button>
          </div>

          {/* 🔗 BOTÓN GITHUB */}
          <div className="mt-4 d-flex justify-content-center">
            <a
              href="https://github.com/luisfel1p10zapata/Api_React"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-outline-light"
            >
              <i className="bi bi-github me-2"></i>
              Ver en GitHub
            </a>
          </div>

        </div>
      </section>

      {/* 📊 FEATURES */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <i className="bi bi-diagram-3 fs-1 text-primary"></i>
              <h5 className="fw-bold mt-3">Integración Fácil</h5>
              <p className="text-muted">
                Conecta tus aplicaciones con APIs en minutos sin complicaciones.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <i className="bi bi-shield-lock fs-1 text-primary"></i>
              <h5 className="fw-bold mt-3">Seguridad</h5>
              <p className="text-muted">
                Protege tus datos con autenticación y protocolos seguros.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <i className="bi bi-speedometer2 fs-1 text-primary"></i>
              <h5 className="fw-bold mt-3">Alto rendimiento</h5>
              <p className="text-muted">
                APIs rápidas y optimizadas para proyectos exigentes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 📦 APIs DESTACADAS */}
      <section className="bg-white py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">
            <i className="bi bi-stars me-2"></i>
            APIs Destacadas
          </h3>

          <div className="row">

            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-cloud me-2"></i>
                    Weather API
                  </h5>
                  <p className="card-text text-muted">
                    Obtén información del clima en tiempo real.
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    Probar API
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-currency-dollar me-2"></i>
                    Payments API
                  </h5>
                  <p className="card-text text-muted">
                    Procesa pagos de forma segura y eficiente.
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    Probar API
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-people me-2"></i>
                    Users API
                  </h5>
                  <p className="card-text text-muted">
                    Gestiona usuarios y autenticación.
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    Probar API
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📞 CALL TO ACTION */}
      <section className="bg-primary text-light py-5 text-center">
        <div className="container">
          <h3 className="fw-bold">¿Listo para empezar?</h3>
          <p className="mb-4">
            Integra nuestras APIs y lleva tu proyecto al siguiente nivel.
          </p>
          <button className="btn btn-light">
            <i className="bi bi-play-circle me-2"></i>
            Empezar ahora
          </button>
        </div>
      </section>

    </div>
  );
};