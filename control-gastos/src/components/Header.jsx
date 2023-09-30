import { useState } from "react";
import NuevoPresupuesto from "./nuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

function Header({
  presupuesto,
  setPresupuesto,
  isvalidPresupuesto,
  setIsvalidPresupuesto,
}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isvalidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto}/>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsvalidPresupuesto={setIsvalidPresupuesto}
        ></NuevoPresupuesto>
      )}
    </header>
  );
}

export default Header;
