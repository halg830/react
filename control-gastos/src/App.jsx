import { useState } from "react";
import Header from "./components/Header";
import iconNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false)
  const handleNuevoGasto = ()=>{
    setModal(true)
  }

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isvalidPresupuesto={isvalidPresupuesto}
        setIsvalidPresupuesto={setIsvalidPresupuesto}
      ></Header>

      {isvalidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={iconNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <p>modal</p>}
    </>
  );
}

export default App;
