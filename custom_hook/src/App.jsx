import useCustomHook from "./components/useCustomHook"
function App() {
const {val,increment,decrement} = useCustomHook(0)
  return (
    <>
      <button onClick={decrement}>decrement</button>
      <span>{val}</span>
      <button onClick={increment}>increment</button>
    </>
  )
}

export default App
