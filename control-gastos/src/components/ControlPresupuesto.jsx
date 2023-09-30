const ControlPresupuesto = ({ presupuesto }) => {
  const formatear = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatear(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {0}
        </p>
        <p>
          <span>Gastado: </span>
          {0}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
