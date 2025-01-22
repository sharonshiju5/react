import { useState } from "react"
function App(){
  let [value,setValue]=useState({name:"",mark:"",cls:""})
  let handleChange=(e)=>{
    setValue((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const handeleSubmit=(e)=>{
    e.preventDefault()
    const {name,cls,mark}=value
    alert(`${name} ${mark} ${cls}`)
    setValue({name:"",mark:"",cls:""})
  }
  return(
    <>
      <form onSubmit={handeleSubmit}>
        <input type="text" placeholder="name" name="name" onChange={handleChange} value={value.name} />
        <input type="text" placeholder="mark" name="mark" onChange={handleChange} value={value.mark} />
        <input type="text" placeholder="class" name="cls" onChange={handleChange} value={value.cls} />
        <input type="submit" value={"add data"} />
      </form>
    </>
  )
}
export default App