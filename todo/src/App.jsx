import { useEffect } from "react"
import { useState } from "react"
function App(){
  let [todo,setTodo]=useState([])
  let [task,setTask]=useState("")
  const handelTodo=()=>{
    setTodo((pre)=>([...pre,task]))
    setTask("")
  }
  const handelDelete=(index)=>{
    setTodo(todo.filter((data,ind)=>index!=ind))
  }
  return(
    <>
      <div>
        <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="task" value={task}/>
        <button onClick={handelTodo}>add</button>
      </div>
      <ul>
        {
          todo.map((td,ind)=><li key={ind}><input type="checkbox" name="" id="" />{td} <button onClick={()=>handelDelete(ind)}>delete</button><button>edit</button></li>)
        }
      </ul>
    </>
  )
}
export default App