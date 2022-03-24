//rafce  <--- los snippets de react 

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  //console.log(paciente)

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = ()=>{
    const respuesta = confirm('Deseas eliminar el paciente??')

    if(respuesta){
      eliminarPaciente(id)
    }
  }  

  return (
    <div className=" bg-white mx-3 shadow-md rounded-xl px-5 py-10 mb-5">

        <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: {''} 
        <span className=" font-normal normal-case">{nombre}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre Del Propietario: {''} 
        <span className=" font-normal normal-case">{propietario}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Email : {''} 
        <span className=" font-normal normal-case">{email}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''} 
        <span className=" font-normal normal-case">{fecha}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Sintomas: {''} 
        <span className=" font-normal normal-case">{sintomas}</span>
        </p>

        <div className=" flex justify-between mt-10">
          <button type="button" 
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-center text-white font-bold uppercase cursor-pointer rounded-xl transition-colors"
          onClick={()=> setPaciente(paciente)}
          >Editar</button>

          <button type="button" 
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-center text-white font-bold uppercase cursor-pointer rounded-xl transition-colors"
          onClick={ handleEliminar }
          >Eliminar</button>
        </div>

    </div>  
  )
}

export default Paciente
