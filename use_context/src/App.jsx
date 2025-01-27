// import React from 'react'

// function App() {
//   const data="hello"
//   return (
//     <>
//      <h1>parent</h1>
//      <Child data={data}/>
//     </>
//   )
// }
// export default App
// function Child(props) {
//   return (
//     <>
//      <h1>childe 1</h1>
//      <Child2 data={props.data}/>
//     </>
//   )
// }function Child2({data}) {
//   return (
//     <>
//      <h1>childe 1</h1>
//      <Child3 data={data}/>
//     </>
//   )
// }
// function Child3({data}) {
//   return (
//     <>
//      <h1>childe 1</h1>
//      <Child4 data={data}/>
//     </>
//   )
// }
// function Child4({data}) {
//   return (
//     <>
//      <h1>childe {data}</h1>
//     </>
//   )
// }





import { createContext,useContext } from 'react' 
import React from 'react'
const UserContext =createContext()
function App() {
  const data="hello"
  return (
    <>
     <h1>parent</h1>
      <UserContext.Provider value={data}> 
        <Child />
      </UserContext.Provider>
    </>
  )
}
export default App
function Child(props) {
  return (
    <>
     <h1>childe 1</h1>
     <Child2/>
    </>
  )
}function Child2() {
  return (
    <>
     <h1>childe 1</h1>
     <Child3 />
    </>
  )
}
function Child3() {
  return (
    <>
     <h1>childe 1</h1>
     <Child4/>
    </>
  )
}
function Child4() {
  const data=useContext(UserContext)
  return (
    <>
     <h1>childe {data}</h1>
    </>
  )
}