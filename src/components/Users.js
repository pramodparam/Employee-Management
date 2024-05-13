
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
function User() {
  const [employees, setEmployees] = useState([]);
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:""
  })
const url="http://localhost:8080/api/employees";
  useEffect(() => {
    axios.get("http://localhost:8080/api/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);
 
  const deleteEmployee=(id,e)=>{
     e.preventDefault();
    axios.delete(`http://localhost:8080/api/employees/${id}`).then((res)=>{
      res.status(200)
            console.log("deleted successfully")
    }).catch((err)=>{
      console.log(err)
    })


}
const updateEmployee=(id,e)=>{
  e.preventDefault();
  axios.put(`http://localhost:8080/api/employees/${id}`).then((res)=>{
    setEmployees(res.data)
  })

  }
  
  return (
    <>

<h2 className="text-center mb-4 mt-3" >Employee-List</h2>


      <table style={{ width: "60%", border:'5px!important' }}  className="myTable center">
        <thead>
          <tr className='background'>
            <th>EMPLOYEE ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>MAIL ID</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => {
              return (
                <tr key={employee.id}>
                   <td >{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email} </td>
                 
                 <td><button class="btn btn-secondary" onClick={(e)=>updateEmployee(employee.id,e)}>Edit</button></td> 
                 <td><button class="btn btn-danger"   onClick={(e)=>deleteEmployee(employee.id,e)}>Delete</button></td>
                 
                </tr>
              );
            })
          ) : (
            <div>No data found</div>
          )}
        </tbody>
      </table>
     
    </>
  );
}

export default User;
