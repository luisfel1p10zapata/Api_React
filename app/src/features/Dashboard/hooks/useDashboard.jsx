import { useState } from 'react'

export const useDashboard = () => {

    // 📦 APIs
    const [apis, setApis] = useState([])

    // 👤 Usuarios
    const [usuarios, setUsuarios] = useState([])

    // 📝 Edición
    const [usuarioEditando, setUsuarioEditando] = useState(null)
    const [apiEditando, setApiEditando] = useState(null)

    // 📊 STATS AUTOMÁTICOS (MEJORADOS)
    const stats = {
        totalApis: apis.length,
        ventas: apis.reduce((acc, api) => acc + Number(api.ventas || 0), 0),
        usuarios: usuarios.length,
        ingresos: apis.reduce(
            (acc, api) => acc + (Number(api.precio || 0) * Number(api.ventas || 0)),
            0
        )
    }

    // =======================
    // 👤 CRUD USUARIOS
    // =======================

    const crearUsuario = (usuario) => {
        const nuevoUsuario = {
            id: Date.now(),
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol || "Usuario"
        }

        setUsuarios(prev => [...prev, nuevoUsuario])
    }

    const actualizarUsuario = (usuarioActualizado) => {
        setUsuarios(prev =>
            prev.map(u =>
                u.id === usuarioActualizado.id ? usuarioActualizado : u
            )
        )
        setUsuarioEditando(null)
    }

    const eliminarUsuario = (id) => {
        setUsuarios(prev => prev.filter(u => u.id !== id))
    }

    const seleccionarUsuario = (usuario) => {
        setUsuarioEditando(usuario)
    }

    // =======================
    // 🚀 CRUD APIS
    // =======================

    const crearApi = (api) => {
        const nuevaApi = {
            id: Date.now(),
            nombre: api.nombre,
            precio: Number(api.precio),
            ventas: Number(api.ventas),
            estado: api.estado || "Activa"
        }

        setApis(prev => [...prev, nuevaApi])
    }

    const actualizarApi = (apiActualizada) => {
        const apiFormateada = {
            ...apiActualizada,
            precio: Number(apiActualizada.precio),
            ventas: Number(apiActualizada.ventas)
        }

        setApis(prev =>
            prev.map(a =>
                a.id === apiFormateada.id ? apiFormateada : a
            )
        )

        setApiEditando(null)
    }

    const eliminarApi = (id) => {
        setApis(prev => prev.filter(a => a.id !== id))
    }

    const seleccionarApi = (api) => {
        setApiEditando(api)
    }

    return {
        stats,
        apis,
        usuarios,
        usuarioEditando,
        apiEditando,
        crearUsuario,
        actualizarUsuario,
        eliminarUsuario,
        seleccionarUsuario,
        crearApi,
        actualizarApi,
        eliminarApi,
        seleccionarApi
    }
}