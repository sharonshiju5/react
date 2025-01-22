import { useCallback, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [asd,setAsd] = useState(0)
  const incriment=useCallback(()=>{
    setCount((precount)=>precount+asd)
  },[asd])
  console.log("function re creaeted");
  
  return (
    <>
      <h1>count {count}</h1>
      <button onClick={incriment}>increment</button>
      <button onClick={()=>setAsd(asd+1)}>increment asd {asd}</button>
    </>
  )
}

export default App
