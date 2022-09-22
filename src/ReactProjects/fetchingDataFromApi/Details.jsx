import React, { useEffect, useState } from 'react';
// import axios from "axios";
import "./style.css";


const Details = ()=>{
  const [num, setNum] = useState(0);
  const [details, setDetails] = useState({
    id : "",
    name : "",
    userName : "",
    eMail : "",
    website : "",
    mobile : "",
    company : "",
  });


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
      .then(response=> response.json() )
      .then(data=>{
        setDetails({
          id : data.id,
          name : data.name,
          userName : data.username,
          eMail : data.email,
          website : data.website,
          mobile : data.phone,
          company : data.company.name,
        });
      })
      .catch(error=>{
        console.log(`given error : ${error}`);
      })
  }, [num])


  return (
    <>
      <div className='container'>

        <div className='details'>
          <table className='table'>
            <tbody>
              <tr>
                <td>Id</td>
                <td> {details.id} </td>
              </tr>
              <tr>
                <td>Name</td>
                <td> {details.name} </td>
              </tr>
              <tr>
                <td>User Name</td>
                <td> {details.userName} </td>
              </tr>
              <tr>
                <td>E-Mail</td>
                <td> {details.eMail} </td>
              </tr>
              <tr>
                <td>Website</td>
                <td> {details.website} </td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td> {details.phone} </td>
              </tr>
              <tr>
                <td>Company</td>
                <td> {details.company} </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='selectbox'>
          <select value={num} onChange={function abc(e){
            setNum(e.target.value);
          }}>
            <option value='0'>  </option>
            <option value='1'> 1 </option>
            <option value='2'> 2 </option>
            <option value='3'> 3 </option>
            <option value='4'> 4 </option>
            <option value='5'> 5 </option>
            <option value='6'> 6 </option>
            <option value='7'> 7 </option>
            <option value='8'> 8 </option>
            <option value='9'> 9 </option>
            <option value='10'> 10 </option>
          </select>
        </div>

      </div>

    </>
  )
}

export default Details;



{/* <h3> Id : {details.id} </h3>
<h3> Name : {details.name} </h3>
<h3> User Name : {details.userName} </h3>
<h3> E-Mail : {details.eMail} </h3>
<h3> Website : {details.website} </h3>
<h3> Mobile : {details.mobile} </h3>
<h3> Company : {details.company} </h3> */}