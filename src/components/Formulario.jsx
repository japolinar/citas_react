//rafce  <--- los snippets de react 
import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  useEffect( ()=>{
    //console.log(paciente)
    if( Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])  

  const [error, setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    //console.log('Enviado Formulario')
    //Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      //console.log('Hay un campo vacio')

      setError(true)
      return
    }
    setError(false)

    //Objeto de Pacientes
    const objetoPacientes = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas      
    }

    if(paciente.id){
      //Editando Registros
      objetoPacientes.id = paciente.id

      const pacientesActualizados = pacientes.map(pacientesState => pacientesState.id === paciente.id ? objetoPacientes : pacientesState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //Nuevo Registro
      objetoPacientes.id = generarId()
      setPacientes([...pacientes, objetoPacientes])
    }

    //console.log(objetoPacientes)    

    //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }


  return (
    <div className='md:w-1/2 lg:w-2/5'>
      
      <h1 className=" font-black text-3xl text-center">Seguimiento Pacientes</h1>

      <p className=' text-lg mt-5 text-center mb-10'>Añade Pacientes y {''} 
        <span className=' text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form action="" className='bg-white shadow-md rounded-xl py-10 px-5 mb-10 mx-3' onSubmit={handleSubmit}>

        {error && <Error> <p>Todo los campos son obligatorios</p> </Error> }

        <div className=' mb-5'>
          <label htmlFor='mascota' className=' block text-gray-700 uppercase font-bold m-2'>
            Nombre Mascota: 
          </label>

          <input type="text" 
            id='mascota' 
            className=' border-2 w-full p-2 m-2 placeholder-gray-400 rounded-xl' 
            placeholder='Nombre de la Mascota'
            value={nombre} 
            onChange = { (e)=> setNombre(e.target.value) }
          />
        </div>

        <div className=' mb-5'>
          <label htmlFor='propietario' className=' block text-gray-700 uppercase font-bold m-2'>
            Nombre del Propietario: 
          </label>

          <input type="text" 
            id='propietario' 
            className=' border-2 w-full p-2 m-2 placeholder-gray-400 rounded-xl' 
            placeholder='Nombre del Propietario'
            value={propietario} 
            onChange = { (e)=> setPropietario(e.target.value) } 
          />
        </div>

        <div className=' mb-5'>
          <label htmlFor='email' className=' block text-gray-700 uppercase font-bold m-2'>
            Email: 
          </label>

          <input type="email" 
            id='email' 
            className=' border-2 w-full p-2 m-2 placeholder-gray-400 rounded-xl' 
            placeholder='Email Contacto'
            value={email} 
            onChange = { (e)=> setEmail(e.target.value) } 
          />
        </div>

        <div className=' mb-5'>
          <label htmlFor='alta' className=' block text-gray-700 uppercase font-bold m-2'>
            Fecha de Alta: 
          </label>

          <input type="date" 
            id='alta' 
            className=' border-2 w-full p-2 m-2 rounded-xl'
            value={fecha} 
            onChange = { (e)=> setFecha(e.target.value) }              
          />
        </div>

        <div className=' mb-5'>
          <label htmlFor='sintomas' className=' block text-gray-700 uppercase font-bold m-2'>
            Sintomas: 
          </label>

          <textarea name="" id="sintomas" cols="30" rows="3" 
            className=' border-2 w-full p-2 m-2 placeholder-gray-400 rounded-xl'
            placeholder='Escriba brevemente los sintomas'
            value={sintomas} 
            onChange = { (e)=> setSintomas(e.target.value) }
            >            
          </textarea>          
        </div>

        <input type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer rounded-xl transition-colors' 
        />

      </form>

    </div>
  )
}

export default Formulario