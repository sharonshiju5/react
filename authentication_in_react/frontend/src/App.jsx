import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import CreateUser from './components/register'
import { Home } from '../../backend/requsthandler/user.request'
import HomePage from './components/home'
// import magn from './asset/magnifying-glass.png'
function App() {
  const [data, setData] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:""
  })
  // const addUser =async()=>{
  //   try {
  //     const res = await fetch("http://localhost:3000/api/adduser",{
  //       method:"POST",
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //       body:JSON.stringify(data)
  //     })
  //     console.log(res);
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  const logUser =async()=>{
    try {
      const res = await fetch("http://localhost:3000/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      console.log(res);
      alert("login success")
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
   <>
    <div className="section">
      {/* <HomePage/> */}
        <Nav/>
        
        <div className="container">
            <div className="divs">
                <h1>Zee e-commerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit beatae amet, ut architecto maiores aspernatur eos dolore impedit rem dignissimos modi perferendis sunt velit expedita totam eaque qui labore.</p>
            </div>
            <div className="divs">
                <img src="./asset/Screenshot 2024-10-06 043457.png" alt="" id="img1"/>
            </div>
        </div>
        <div className="container" id="cnt">
            <div className="divs">
                <h1>Zee e-commerce</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit beatae amet, ut architecto maiores aspernatur eos dolore impedit rem dignissimos modi perferendis sunt velit expedita totam eaque qui labore.</p>
            </div>
            <div className="divs">
              <img src="" alt="" />
                <img src="./asset/football-boot-guide-removebg-preview.png" alt="" id="img2" />
            </div>
        </div>
    </div>




    {/* <div>
      <form action="">
        <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text"name='email' placeholder='email' />
        <input onChange={(e)=>setData((pre)=>({...pre,[e.target.name]:e.target.value}))} type="text"name='password' placeholder='password' />
        <button onClick={logUser}>Submit</button>
      </form>
    </div> */}
    </>
  )
}

export default App
