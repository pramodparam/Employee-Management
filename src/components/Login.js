
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../index.css'
import logo from '../company.jpg'
import { useState ,useEffect} from "react";
import axios from "axios";
import {Row,Col} from 'react-bootstrap'
import Register from "./Register";
import { useNavigate ,Link} from "react-router-dom";

function Login(){
const [user,setUser]=useState([])
 const [users,setUsers]=useState({
    password:"",
    email:""

})
const [error,setError]=useState(null)

const nav=useNavigate()
useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const LoginFunction=(event)=>{
    event.preventDefault();
    
    if(users.email===""&&users.password===""){
      setError(true)
    }else{
setError(false)
nav('/')
const data=[
  

]
      axios.get("http://localhost:8080/api/employees")
    }


  }
const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  };
 
    return(
    <>
      <h3 className="text-center mt-5"  color="red">Login Page</h3>
    <div className="card col-md-3 mt-2 center" style={{width: 400}}>



<Form className="mx-auto mt-4" style={{width:"300px"}}  onSubmit={LoginFunction}>
 



<Form.Group className="mx-auto " controlId="formEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={users.email}
            onChange={handleChange}
            placeholder="Enter EmailId"
          />
        </Form.Group>
        
       
   <Form.Group className="mb-3 " controlId="formPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={users.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </Form.Group>
   
   
        
        <div className="ml-5 text-center" >
         
<span style={{color:'black'}}>   Not Registered?</span>

<span className="ml-3"><Link className="font-weight-bold"
            style={{ color: "blue", textDecoration: "none",fontWeight:'bold' }}
            to="/register"
          >
            Register
          </Link></span>

</div>
{error&&<div className="text-center text-danger">Please Enter all Fields</div>}
     <div className="text-center">

     
        <Button className="mb-3 mt-4" variant="success" type="submit">
        Submit
      </Button>
      </div>
   </Form>



    </div>
    
    </>
    
    )


}

export default Login;