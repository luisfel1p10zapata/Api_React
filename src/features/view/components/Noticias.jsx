import React from 'react';

export const Noticias = () => {
  return (
    <div className="container mt-4">
      <div className="row">

        {/* NOTICIA PRINCIPAL */}
        <div className="col-lg-8 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://www.redes-sociales.com/wp-content/uploads/2025/05/API.jpg"
              className="card-img-top"
              alt="api news"
            />
            <div className="card-body">
              <h3 className="card-title fw-bold">
                <i className="bi bi-cpu me-2 text-primary"></i>
                Las APIs están transformando el desarrollo moderno
              </h3>
              <p className="card-text text-muted">
                En los últimos años, las APIs se han convertido en una pieza fundamental dentro del desarrollo de software. Gracias a ellas, los desarrolladores pueden conectar diferentes servicios, integrar funcionalidades externas y crear aplicaciones mucho más completas sin necesidad de construir todo desde cero.
              </p>
              <p className="card-text text-muted">
                Empresas tecnológicas están apostando cada vez más por arquitecturas basadas en APIs, lo que permite una mayor escalabilidad, mantenimiento más sencillo y una mejor experiencia para el usuario final. Este enfoque también facilita el trabajo en equipo, ya que diferentes sistemas pueden comunicarse entre sí de forma eficiente.
              </p>
              <button className="btn btn-primary">
                <i className="bi bi-book me-1"></i> Leer artículo completo
              </button>
            </div>
          </div>
        </div>

        {/* NOTICIAS SECUNDARIAS */}
        <div className="col-lg-4">
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5>
                <i className="bi bi-cloud me-2 text-info"></i>
                APIs en la nube: el futuro de las aplicaciones
              </h5>
              <p className="text-muted small">
                Las plataformas en la nube están impulsando el uso de APIs para permitir integraciones rápidas, seguras y accesibles desde cualquier lugar del mundo.
              </p>
            </div>
          </div>

          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5>
                <i className="bi bi-shield-lock me-2 text-danger"></i>
                Seguridad en APIs: un reto clave
              </h5>
              <p className="text-muted small">
                La protección de datos y la autenticación son aspectos críticos. Nuevas estrategias están mejorando la seguridad en el consumo de APIs.
              </p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h5>
                <i className="bi bi-diagram-3 me-2 text-success"></i>
                Integraciones más rápidas y eficientes
              </h5>
              <p className="text-muted small">
                Las APIs permiten conectar sistemas en minutos, reduciendo tiempos de desarrollo y aumentando la productividad de los equipos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFORMATIVA */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm p-4">
            <h4 className="fw-bold mb-3">
              <i className="bi bi-newspaper me-2 text-primary"></i>
              ¿Por qué son tan importantes las APIs hoy en día?
            </h4>

            <p className="text-muted">
              Las APIs (Application Programming Interfaces) permiten que diferentes sistemas se comuniquen entre sí. Esto significa que una aplicación puede utilizar servicios externos sin necesidad de desarrollar esas funcionalidades desde cero.
            </p>

            <p className="text-muted">
              Por ejemplo, muchas aplicaciones utilizan APIs para procesar pagos, mostrar mapas, autenticar usuarios o consumir información en tiempo real. Esto no solo ahorra tiempo, sino que también mejora la calidad del producto final.
            </p>

            <p className="text-muted">
              En la actualidad, el uso de APIs es una práctica estándar en el desarrollo web y móvil. Dominar su uso se ha vuelto una habilidad esencial para cualquier desarrollador moderno.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};