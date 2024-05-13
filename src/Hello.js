import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios'

function Hello() {

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const [mess, setMess] = useState(null)
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const size=parseInt(data.username)
    if (data.username==="" && data.password === "") {
      setMess(false)
    }
    else {
      setMess(true)
    }

  }

  return (<>
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          UserName:
        </p>
        <input type="name" name="username" id="name" value={data.username} onChange={handleChange}></input>

        <p>
          Password:
        </p>
        <input type="password" name="password" id="pass" value={data.password} onChange={handleChange}>
        </input>

        <br />

        <Button className="btn btn-primary" type="submit">
          Submit
        </Button>
      </form>



      {mess === true && <p>successs</p>}
      {mess === false && <p>Failed</p>}

    </div>




  </>)


}

export default Hello;