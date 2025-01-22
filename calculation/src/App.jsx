// import { useState } from "react"

// function App() {
//   const [count,setCount]=useState(0)
//   const [otherState,setOtherState]=useState(false)
//   const expensiveCalculation=()=>{
//     console.log("calculating....");
//     let sum=0
//     for (let i=0;i<1000000;i++){
//       sum+=i
//     }
//     return sum
//   }
//   return (
//     <>
//       <h1>expensive value {expensiveCalculation()}</h1>
//       <button onClick={()=> setCount(count+1)}>increment count</button>
//       <button onClick={()=> setOtherState(!otherState)}>togle count</button>
//     </>
//   )
// }

// export default App



// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// using usememo
// using usememo
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// using usememo
// using usememo
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------



import { useMemo, useState } from "react"

function App() {
  const [count,setCount]=useState(0)
  const [otherState,setOtherState]=useState(false)
  const expensiveCalculation=useMemo(()=>{
    console.log("calculating....");
    let sum=0
    for (let i=0;i<1000000;i++){
      sum+=i
    }
    return sum
  },[count])
  return (
    <>
      <h1>expensive value {expensiveCalculation}</h1>
      <button onClick={()=> setCount(count+1)}>increment count</button>
      <button onClick={()=> setOtherState(!otherState)}>togle count</button>
    </>
  )
}

export default App
