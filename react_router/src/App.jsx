import About from "./components/About"
import pageNotFound from "./components/pageNotFound"
import Nav from "./components/Nav"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import contact from "./components/contact"
function App(){
  return(
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" Component={About}/>
          <Route path="/contact/:id" Component={contact}/>
          <Route path="*" Component={pageNotFound}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App