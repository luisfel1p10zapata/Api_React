import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Contraseña = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Validación
  const validate = () => {
    if (!email) {
      return "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Correo inválido";
    }
    return "";
  };

  // Envío
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Te enviamos un enlace para recuperar tu contraseña");
      console.log("Recuperar contraseña:", email);
      // Aquí conectas con tu backend
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "100%", maxWidth: "420px" }}>
        
        {/* Título */}
        <div className="text-center mb-4">
          <i className="bi bi-shield-lock-fill fs-1 text-warning"></i>
          <h3 className="fw-bold mt-2">Recuperar Contraseña</h3>
          <p className="text-muted small">
            Ingresa tu correo y te enviaremos un enlace
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} noValidate>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Correo electrónico</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="invalid-feedback">{error}</div>
            </div>
          </div>

          {/* Mensaje éxito */}
          {success && (
            <div className="alert alert-success py-2 text-center">
              {success}
            </div>
          )}

          {/* Botón */}
          <button type="submit" className="btn btn-warning w-100 fw-semibold">
            <i className="bi bi-send me-2"></i>
            Enviar enlace
          </button>

        </form>

        {/* Volver */}
        <div className="text-center mt-4">
          <p className="small text-muted mb-1">
            ¿Recordaste tu contraseña?
          </p>
          <Link to="/inicio" className="fw-semibold text-decoration-none">
            Volver a iniciar sesión
          </Link>
        </div>

      </div>
    </div>
  );
};