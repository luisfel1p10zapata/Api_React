import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const ApiRyC = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [info, setInfo] = useState({})
    const [query, setQuery] = useState("")

    useEffect(() => {
        const source = axios.CancelToken.source()

        axios.get('https://rickandmortyapi.com/api/character/',{params:{page,name:query}, cancelToken: source.token})
        .then(({data}) => {
            setData(data.results || [])
            setInfo(data.info || {})
        })
        .catch ((err) => {
            if (axios.isCancel(err)) return
            if (err.response?.status === 404) {
                setData([])
                setInfo({})
                return
            }

        });
    }, [page, query]);

    // Función para color del estado
    const getStatusColor = (status) => {
        if (status === "Alive") return "green"
        if (status === "Dead") return "red"
        return "gray"
    }

  return (
    <div className="container mt-4">

        <h1 className="text-center mb-4">
            <i className="bi bi-people-fill me-2"></i>
            Personajes Rick and Morty
        </h1>
        <input className='form-control mb-4' placeholder='Buscar personaje' value={query} onChange={(c) => (setQuery(c.target.value.trim()),setPage(1))}/>

        <div className="row">
            {data?.map(char => (
                <div className="col-md-4 col-lg-3 mb-4" key={char.id}>
                    <div className="card h-100 shadow">

                        <img 
                            src={char.image} 
                            className="card-img-top" 
                            alt={char.name} 
                        />

                        <div className="card-body">

                            <h5 className="card-title">
                                <i className="bi bi-person-fill me-2"></i>
                                {char.name}
                            </h5>

                            <p className="card-text mb-1">
                                <i className="bi bi-heart-pulse me-2"></i>
                                <strong>Estado:</strong>{" "}
                                <span 
                                    style={{
                                        height: "10px",
                                        width: "10px",
                                        backgroundColor: getStatusColor(char.status),
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        marginRight: "6px"
                                    }}
                                ></span>
                                {char.status}
                            </p>

                            <p className="card-text mb-1">
                                <i className="bi bi-globe me-2"></i>
                                <strong>Especie:</strong> {char.species}
                            </p>

                            <p className="card-text mb-1">
                                <i className="bi bi-gender-ambiguous me-2"></i>
                                <strong>Género:</strong> {char.gender}
                            </p>

                            <p className="card-text mb-1">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                <strong>Origen:</strong> {char.origin.name}
                            </p>

                            <p className="card-text">
                                <i className="bi bi-map-fill me-2"></i>
                                <strong>Ubicación:</strong> {char.location.name}
                            </p>

                        </div>

                    </div>
                </div>
            ))}
        </div>

        {/* Paginación */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">

            <button 
                className="btn btn-outline-primary"
                onClick={() => setPage(page - 1)} 
                disabled={!info.prev}
            >
                <i className="bi bi-arrow-left"></i> Anterior
            </button>

            <span className="fw-bold">
                Página {page}
            </span>

            <button 
                className="btn btn-outline-primary"
                onClick={() => setPage(page + 1)} 
                disabled={!info.next}
            >
                Siguiente <i className="bi bi-arrow-right"></i>
            </button>

        </div>
    </div>
  )
}