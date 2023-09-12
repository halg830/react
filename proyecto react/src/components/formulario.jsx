import { useState, useEffect } from "react";
import Error from './Error'

function formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random+fecha
  }

  useEffect(()=>{
    if(Object.keys(pacientes).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } 
  }, [paciente])

  const handleSubmit = ()=>{
    // Evita que se envie el formulario
    event.preventDefault()

    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return
    }
    setError(false)

    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id) {
      nuevoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id===nuevoPaciente.id ? nuevoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else {
      nuevoPaciente.id=generarId()
      setPacientes([...pacientes, nuevoPaciente])}

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:2/5">
      <h1 className="font-black text-3xl text-center">Seguimiento pacientes</h1>

      <p className="text-lg mt-5 text-center mb-10">
        Añade paciente y {""}
        <span className="text-indigo-600 font-bold"> administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className=" mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota 
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre de la propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="Email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="Alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="Alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="Sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>

          <textarea
            id="Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
}

export default formulario;
