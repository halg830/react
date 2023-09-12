import Header from "./components/header";
import Formulario from "./components/formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  // Aquí el js
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLs)
    };

    obtenerLs();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify());
  }, [pacientes]);

  //Solo renderiza cuando hay un cambio en el componente
  useEffect(() => {
    console.log(paciente);
  }, [paciente]);

  useEffect(() => {}, []); //Cuando [](dependencias) va vacío solo se ejecuta una vez,
  //así verifica todo el componente

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    // Aquí el html
    //Esto es un fragment <>
    //En jsx hay que usar className en vez de class
    <div>
      <Header />
      <div className="mt-12 flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
