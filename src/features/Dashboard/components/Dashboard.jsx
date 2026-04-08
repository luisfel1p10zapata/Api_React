import React, { useState, useEffect } from 'react'
import { useDashboard } from '../hooks/useDashboard'

export const Dashboard = () => {

  const {
    stats,
    apis,
    usuarios,
    crearUsuario,
    eliminarUsuario,
    actualizarUsuario,
    seleccionarUsuario,
    usuarioEditando,
    crearApi,
    eliminarApi,
    actualizarApi,
    seleccionarApi,
    apiEditando
  } = useDashboard()

  // ===================== FORM USUARIO =====================
  const [form, setForm] = useState({ nombre: '', email: '', rol: '' })

  useEffect(() => {
    if (usuarioEditando) setForm(usuarioEditando)
  }, [usuarioEditando])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    usuarioEditando ? actualizarUsuario(form) : crearUsuario(form)
    setForm({ nombre: '', email: '', rol: '' })
  }

  // ===================== FORM API =====================
  const [formApi, setFormApi] = useState({
    nombre: '',
    precio: '',
    ventas: '',
    estado: 'Activa'
  })

  useEffect(() => {
    if (apiEditando) setFormApi(apiEditando)
  }, [apiEditando])

  const handleApiChange = (e) => {
    setFormApi({ ...formApi, [e.target.name]: e.target.value })
  }

  const handleApiSubmit = (e) => {
    e.preventDefault()
    apiEditando ? actualizarApi(formApi) : crearApi(formApi)
    setFormApi({ nombre: '', precio: '', ventas: '', estado: 'Activa' })
  }

  return (
    <div className="container-fluid p-4 bg-light min-vh-100">

      {/* HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold">Dashboard API Store 🚀</h2>
        <p className="text-muted">Gestión de APIs, usuarios e ingresos</p>
      </div>

      {/* CARDS */}
      <div className="row g-4 mb-4">

        <Card icon="bi-box" title="APIs" value={stats.totalApis} />
        <Card icon="bi-cart" title="Ventas" value={stats.ventas} />
        <Card icon="bi-people" title="Usuarios" value={stats.usuarios} />
        <Card icon="bi-cash-stack" title="Ingresos" value={`$${stats.ingresos}`} />

      </div>

      {/* FORMULARIOS */}
      <div className="row g-4 mb-4">

        {/* USUARIO */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="mb-3">
                <i className="bi bi-person me-2"></i>
                {usuarioEditando ? "Editar Usuario" : "Nuevo Usuario"}
              </h5>

              <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                <input className="form-control mb-3" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input className="form-control mb-3" name="rol" placeholder="Rol" value={form.rol} onChange={handleChange} />

                <button className={`btn w-100 ${usuarioEditando ? "btn-warning" : "btn-primary"}`}>
                  {usuarioEditando ? "Actualizar" : "Guardar"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* API */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="mb-3">
                <i className="bi bi-cloud me-2"></i>
                {apiEditando ? "Editar API" : "Nueva API"}
              </h5>

              <form onSubmit={handleApiSubmit}>
                <input className="form-control mb-2" name="nombre" placeholder="Nombre API" value={formApi.nombre} onChange={handleApiChange} required />
                <input className="form-control mb-2" name="precio" placeholder="Precio ($)" value={formApi.precio} onChange={handleApiChange} required />
                <input className="form-control mb-2" name="ventas" placeholder="Ventas" value={formApi.ventas} onChange={handleApiChange} required />

                <select className="form-control mb-3" name="estado" value={formApi.estado} onChange={handleApiChange}>
                  <option>Activa</option>
                  <option>Inactiva</option>
                </select>

                <button className="btn btn-dark w-100">
                  Guardar API
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* USUARIOS TABLA */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="mb-3">
                <i className="bi bi-people me-2"></i>Usuarios
              </h5>

              <div className="table-responsive" style={{ maxHeight: "250px" }}>
                <table className="table table-sm align-middle">
                  <tbody>
                    {usuarios.map(user => (
                      <tr key={user.id}>
                        <td>
                          <strong>{user.nombre}</strong>
                          <br />
                          <small className="text-muted">{user.email}</small>
                        </td>
                        <td>
                          <span className="badge bg-secondary">{user.rol}</span>
                        </td>
                        <td className="text-end">
                          <button className="btn btn-warning btn-sm me-1" onClick={() => seleccionarUsuario(user)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="btn btn-danger btn-sm" onClick={() => eliminarUsuario(user.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* TABLA APIs */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="mb-3">
            <i className="bi bi-cloud me-2"></i>APIs Disponibles
          </h5>

          <div className="table-responsive">
            <table className="table align-middle table-hover">
              <thead className="table-light">
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Ventas</th>
                  <th>Estado</th>
                  <th className="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {apis.map(api => (
                  <tr key={api.id}>
                    <td>{api.nombre}</td>
                    <td><strong>${api.precio}</strong></td>
                    <td>{api.ventas}</td>
                    <td>
                      <span className={`badge ${api.estado === "Activa" ? "bg-success" : "bg-danger"}`}>
                        {api.estado}
                      </span>
                    </td>
                    <td className="text-end">
                      <button className="btn btn-warning btn-sm me-2" onClick={() => seleccionarApi(api)}>
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => eliminarApi(api.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  )
}

// 🔥 COMPONENTE CARD PRO
const Card = ({ icon, title, value }) => (
  <div className="col-md-3">
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <h6 className="text-muted">{title}</h6>
          <h4 className="fw-bold">{value}</h4>
        </div>
        <i className={`bi ${icon} fs-2 text-primary`}></i>
      </div>
    </div>
  </div>
)