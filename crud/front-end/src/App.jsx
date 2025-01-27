import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]); 
  const [editstate, setEditState] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [count,setCount]=useState(0);
  // useEffect(() => {
  //   fetchTodos();
  // }, [count]);
  const addTodo = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        alert("User added successfully!");
        fetchTodos();
      }
      if(res.status===201){
        setData({ name: '', email: '', phone: '' }); // Reset form
      setCount(count+1);
      alert(res.data.msg);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json(); 
      console.log(result);
      if (res.ok) {
        setData([...result]); 
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [count]);


  const handelDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/deleteuser/${id}`, {
        method: "DELETE",
      });
      if(res.status==200){
        fetchTodos();
        alert("User deleted successfully!");
      setCount(count+1);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  function handleClick(id) {
    setEditState((prevState)=>({
      ...prevState,
      [id]:true
    }));
  }
  const handelInputChainge =  (id,name,value) => {
    setData((prevData) =>
      prevData.map((user) => 
        user._id === id ? {...user,[name]:value} : user
      )
    );
  };
  
  const handleUpdate = async (id) => {
    const updatedUser = data.find((user) => user._id === id);
    try {
      const res = await fetch(`http://localhost:3000/api/updateuser/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser), 
      });
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        // alert("User updated successfully!");
        fetchTodos();
      }
      if(res.status===200){
      setCount(count+1);
       const {msg}=res
      alert( "succusses" ,res);
      console.log(msg);
      
      // console.log(res);
      
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  
  return (
    <>
      <div className="main">
        <div className="input">
          <input name="name" onChange={(e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} type="text" placeholder="name"/>
          <input name="email" onChange={(e) =>   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) } type="text" placeholder="email@hjnk"/>
          <input name="phone" onChange={(e) =>   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) } type="text" placeholder="phone" />
          <button onClick={addTodo}>Add</button>
        </div>

        <div className="container">
          <ul>
            {data.map((td,ind) => (
              <li key={ind}>
                <input type="text" value={td.name } disabled={!editstate[td._id]} onChange={(e) => handelInputChainge(td._id,"name",e.target.value)}   />
                <input type="text" value={td.email} disabled={!editstate[td._id]} onChange={(e) => handelInputChainge(td._id,"email",e.target.value)}  />
                <input type="text" value={td.phone} disabled={!editstate[td._id]} onChange={(e) => handelInputChainge(td._id,"phone",e.target.value)}  />
                <button className="dele" onClick={()=>handelDelete(td._id)}>Delete</button>
                <button className="edit"  onClick={()=>handleClick(td._id)}>Edit</button>
                <button className="update" onClick={()=>handleUpdate(td._id)}>Update</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;



