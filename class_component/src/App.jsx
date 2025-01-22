// import React from "react";
// import"./App.css"
// import Nav from "./components/nav";
// import Card from "./components/card";
// class App extends React.Component{
//   fruits = [
//     {
//       name: "Apple",
//       contents: "Crisp and sweet, often red, green, or yellow. High in fiber and vitamin C."
//     },
//     {
//       name: "Banana",
//       contents: "A soft, sweet fruit with a yellow peel when ripe. Rich in potassium."
//     },
//     {
//       name: "Orange",
//       contents: "A juicy citrus fruit known for its bright orange color. High in vitamin C."
//     },
//     {
//       name: "Strawberry",
//       contents: "Small, red, and sweet berries. Packed with antioxidants and vitamin C."
//     },
//     {
//       name: "Grapes",
//       contents: "Small, round, and sweet, usually purple or green. Great for snacking or making wine."
//     },
//     {
//       name: "Pineapple",
//       contents: "A tropical fruit with a tough, spiky outer layer and sweet, juicy flesh inside."
//     }
//   ];
//   state={count:0}
// counter=()=>{
//   this.setState({count:this.state.count+1})
// }
//   render(){
//     return(
//       <div>
//         <Nav/>
//       <div className="cards">

//        {this.fruits.map((name,index)=>(
//           <Card key={index} name={name.name} content={name.contents}/>
//         ))}

//       </div>

//       <button onClick={this.counter}>count{this.state.count}</button>
//       </div>
//     )
//   }
// }
// export default App



import React from "react";
import"./App.css"
import Nav from "./components/nav";
class App extends React.Component{
  
state={
  name:"",emp_id:"",salary:"",age:"",emaile:"",exp:"",des:""
}
handleChange=(e)=>{
  this.setState((prev)=>({...prev,[e.target.name]:e.target.value}))
}
handleSubmit=(e)=>{
  e.preventDefault()
  console.log(this.state);
  this.setState({
    name:"",emp_id:"",salary:"",age:"",emaile:"",exp:"",des:""
  })

}
  render(){
    return(
      <div>
        <Nav/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.name} name="name" placeholder="name" />
          <input onChange={this.handleChange} type="text" value={this.state.emp_id} name="emp_id" placeholder="emp_id" />
          <input onChange={this.handleChange} type="text" value={this.state.salary} name="salary" placeholder="salary" />
          <input onChange={this.handleChange} type="text" value={this.state.des} name="des" placeholder="designation"/>
          <input onChange={this.handleChange} type="text" value={this.state.exp} name="exp" placeholder="experiance" />
          <input onChange={this.handleChange} type="text" value={this.state.age} name="age" placeholder="age" />
          <input onChange={this.handleChange} type="text" value={this.state.emaile} name="emaile" placeholder="emaile" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
export default App

