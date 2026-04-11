import React from "react";

export const Contactos = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">

      {/* HERO */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">Contáctanos</h1>
        <p>Estamos aquí para ayudarte, escríbenos</p>
      </div>

      {/* CONTENIDO */}
      <div className="container my-5">
        <div className="row g-4">

          {/* FORMULARIO */}
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h4 className="mb-3">Envíanos un mensaje</h4>

              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mensaje</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>

                <button className="btn btn-primary w-100">
                  <i className="bi bi-send me-2"></i>
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* INFO */}
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h4 className="mb-3">Información de contacto</h4>

              <p>
                <i className="bi bi-geo-alt me-2 text-primary"></i>
                Medellín , Colombia
              </p>

              <p>
                <i className="bi bi-telephone me-2 text-primary"></i>
                +57 300 123 4567
              </p>

              <p>
                <i className="bi bi-envelope me-2 text-primary"></i>
                soporte@apihub.com
              </p>

              <hr />

              <h6>Horario</h6>
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};