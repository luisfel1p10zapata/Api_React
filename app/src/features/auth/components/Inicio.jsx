import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../features/Api/components/authApi";

export const Inicio = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.email) newErrors.email = "Correo requerido";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Correo inválido";

    if (!form.password) newErrors.password = "Contraseña requerida";

    return newErrors;
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
      const res = await loginUser(form);

      // 🔥 guardar sesión
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      console.log("Login OK", res.data);

      // redirigir
      window.location.href = "/";

    } catch (error) {
      console.log(error);

      setErrors({
        email: "Credenciales incorrectas",
        password: "Credenciales incorrectas"
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center mt-4"
      style={{ minHeight: "90vh" }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <i className="bi bi-person-circle fs-1 text-primary"></i>
          <h3 className="fw-bold mt-2">Bienvenido</h3>
          <p className="text-muted small">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                placeholder="Correo"
                value={form.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                placeholder="Contraseña"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPass(!showPass)}
              >
                <i
                  className={`bi ${
                    showPass ? "bi-eye-slash" : "bi-eye"
                  }`}
                ></i>
              </button>
              <div className="invalid-feedback">{errors.password}</div>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <Link to="/contraseña" className="small">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            className="btn btn-primary w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Cargando...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Ingresar
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="small">¿No tienes cuenta?</p>
          <Link to="/registro">Crear cuenta</Link>
        </div>
      </div>
    </div>
  );
};