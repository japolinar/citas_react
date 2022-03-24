import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  useEffect( ()=>{
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    setPacientes(pacientesLS)
  }, [])

  useEffect( ()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id)=>{
    //console.log('Eliminando Paciente', id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  
  return (
    <div className="container mx-auto mt-20">

      <Header></Header>
      
      <div className=" mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        ></Formulario>

        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente} 
          eliminarPaciente = {eliminarPaciente}         
        ></ListadoPacientes> 
      </div>   

    </div>
  )
}

export default App
