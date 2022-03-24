//rafce  <--- los snippets de react 

const Error = ({children}) => {
  return (
    <div className=' bg-red-600 text-white text-center font-bold uppercase p-2 rounded-md'>
        <p> {children} </p>
    </div>
  )
}

export default Error
