import { useState } from 'react'
import './App.css'

function App() {
  function sign_in(){
    const div=document.querySelector("form-div")
    const all_div=div.querySelectorAll("*")
    
    
  }
  return (
    <>
      <div className="container" id='container'>
        <div className="form-div" id='form-div'>
          <div className="sign">
            <div>
              <h1>welcome back</h1>
              <div className="div">
              <p>to keep conected with us please <br />     login with your personal info</p>
              </div>
              <button onClick={sign_in}>SIGIN IN</button>
            </div>
          </div>
          <div className="form">
            <div className="second-div">
              <h1>create account</h1>
              <div className="feilds">
                <form>
                  <input type="text" name='name' placeholder='name' id='name' />
                  <input type="text" name='email' placeholder='email' id='email' />
                  <input type="text" name='password' placeholder='password' id='pass' />
                  <input type="submit" value={"SIGN UP"} className='submit' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
