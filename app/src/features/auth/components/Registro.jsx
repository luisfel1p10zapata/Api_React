import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../../features/Api/components/authApi";

export const Registro = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPasswordStrength = (pass) => {
    if (pass.length < 6) return "Débil";
    if (pass.match(/[A-Z]/) && pass.match(/[0-9]/)) return "Fuerte";
    return "Media";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!form.nombre) err.nombre = "Nombre requerido";
    if (!form.email) err.email = "Correo requerido";
    if (form.password.length < 6) err.password = "Mínimo 6 caracteres";
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "No coinciden";

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await registerUser({
        name: form.nombre,
        email: form.email,
        password: form.password
      });

      alert("Usuario registrado");

      // ✅ CORREGIDO (antes era /login)
      window.location.href = "/inicio";

    } catch (error) {
      console.log(error.response?.data);

      setErrors({
        email: error.response?.data?.msg || "Error al registrar"
      });

    } finally {
      setLoading(false);
    }
  };

  const strength = getPasswordStrength(form.password);

  return (
    <div
      className="container d-flex justify-content-center align-items-center mt-4"
      style={{ minHeight: "90vh" }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <i className="bi bi-person-plus-fill fs-1 text-success"></i>
          <h3 className="fw-bold mt-2">Crear cuenta</h3>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <input
              type="text"
              name="nombre"
              className={`form-control ${errors.nombre && "is-invalid"}`}
              placeholder="Nombre completo"
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.nombre}</div>
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              placeholder="Correo"
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-2">
            <div className="input-group">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                placeholder="Contraseña"
                onChange={handleChange}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPass(!showPass)}
              >
                <i className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>

            <small
              className={`text-${
                strength === "Fuerte"
                  ? "success"
                  : strength === "Media"
                  ? "warning"
                  : "danger"
              }`}
            >
              Seguridad: {strength}
            </small>

            <div className="invalid-feedback d-block">
              {errors.password}
            </div>
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              className={`form-control ${errors.confirmPassword && "is-invalid"}`}
              placeholder="Confirmar contraseña"
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword}
            </div>
          </div>

          <button
            className="btn btn-success w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Registrando...
              </>
            ) : (
              <>
                <i className="bi bi-check-circle me-2"></i>
                Registrarse
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="small">¿Ya tienes cuenta?</p>
          <Link to="/inicio">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
};