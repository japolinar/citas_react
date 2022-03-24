//rafce  <--- los snippets de react 

import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  //console.log(pacientes) 

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <div>
          <h2 className=" font-black text-center text-3xl">Listado Pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className=" text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map( (paciente)=>{
            return(
              <Paciente 
                key = {paciente.id}
                paciente = {paciente} 
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
              ></Paciente> 
            )
          })}

        </div>
      ) : (
        <div>
          <h2 className=" font-black text-center text-3xl">No hay Pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className=" text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </div>
      )} 

    </div>
  )
}

export default ListadoPacientes