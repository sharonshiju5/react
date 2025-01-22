import { useRef } from "react"

function App(){
  const inputRef1=useRef()
  const inputRef2=useRef()
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log(inputRef1.current.value);
    console.log(inputRef2.current.value);
    
  }
  return(
    <>
    <form onSubmit={handelSubmit}>
      <input type="text" ref={inputRef1} placeholder="name" />
      <input type="text" ref={inputRef2} placeholder="name" />
      <input type="submit" />
    </form>
    </>
  )
}
export default App