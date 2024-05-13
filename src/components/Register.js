
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../index.css'
import logo from '../company.jpg'
import { useState ,useEffect} from "react";
import axios from "axios";
import {Row,Col} from 'react-bootstrap'

import { useNavigate ,Link} from "react-router-dom";
const Register=()=>{
   const [Employee,SetEmployee]=useState([]);
   const[Employees,setEmployees]=useState({

    firstName:"",
    lastName:"",
    password:"",
    confirmPass:"",
    email:""
   })
   const nav=useNavigate()
   const [error,setError]=useState(null);
   const handleChange = (event) => {
    setEmployees({ ...Employees, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees")
      .then((response) => {
        SetEmployee(response.data)
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const RegisterFunction = (event) => {

    event.preventDefault();
    if(Employees.firstName!==""&& Employees.lastName!==""&&Employees.email!==""&&Employees.password!==""&&Employees.confirmPass!==""&&
    (Employees.confirmPass===Employees.password)){
        axios.post("http://localhost:8080/api/employees",Employees).then((response) => {
            console.log(response)
            nav('/login')
            }).catch((err)=>{
                console.log(err)
            });
            setError(false)
            console.log(Employees);
    }else{
       setError(true);
    }
    
   
  };
    return(
    <>
    <h3 className="text-center mt-3"  color="red">Register Page</h3>
    <div className="col-md-3 center card" style={{width: 400}}>



<Form className="mx-auto mt-2" style={{width:"300px"}}   onSubmit={RegisterFunction} >
 

   <Form.Group className="mb-3 " controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="name"
            value={Employees.firstName}
            onChange={handleChange}
            placeholder="Enter FirstName"
          />

   </Form.Group>
   <Form.Group className="mb-3 " controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="name"
            value={Employees.lastName}
            onChange={handleChange}
          
            placeholder="Enter LastName"
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={Employees.email}
            onChange={handleChange}
            placeholder="Enter EmailId"
          />
        </Form.Group>
   <Form.Group className="mb-3 " controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={Employees.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmPass"
            type="password"
            value={Employees.confirmPass}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </Form.Group>
   
   
       
   
     <div class="text-center">

     
        <Button className="mb-3 mt-2" variant="success" type="submit">
       Register
      </Button>
      {/* {error===false && <span className="text-danger">password not matching </span>}
   {error===true && <span className="text-success">Registered successfull! </span>} */}
   {error=== true && <div className="text-danger mb-3">Enter Fields Correctly</div>}
          {error === false && <div className="text-success">Registered Successfully!</div>}
      </div>
   </Form>

    </div>
    </>
)
}
export default Register;