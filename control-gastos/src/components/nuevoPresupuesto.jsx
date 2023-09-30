import { useState } from "react";
import Mensaje from "./Mensaje";

function nuevoPresupuesto({ presupuesto, setPresupuesto, setIsvalidPresupuesto }) {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!(presupuesto) || (presupuesto) < 0) {
      setMensaje("No es un presupuesto valido");
      return
    } 
    setMensaje('')
    setIsvalidPresupuesto(true)


  };

  

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <h2>Nuevo presupuesto</h2>

      <form onSubmit={handlePresupuesto} action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>

          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
          
        </div>
        <input
            type="submit"
            value="Añadir"
          />

        {mensaje&&<Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default nuevoPresupuesto;
