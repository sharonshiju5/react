function App(){
  const list=["hashir","karthik","sharon","nived","vishak","albin"]
  return(
    <div>
      <ul>
          {
            list.map((element,index)=> <li key={index}>{element}</li>)
          }
      </ul>
    </div>

  )
}
export default App;