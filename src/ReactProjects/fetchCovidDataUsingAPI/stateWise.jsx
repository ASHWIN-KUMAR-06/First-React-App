import React, { useEffect, useState } from 'react';
import "./stateWise.css";


function Data(props) {
  return (
    <>
      <tr>
        <td> {props.item.Country} </td>
        <td> {props.item.NewConfirmed} </td>
        <td> {props.item.NewDeaths} </td>
        <td> {props.item.TotalConfirmed} </td>
        <td> {props.item.TotalDeaths} </td>
        <td> {props.item.TotalRecovered} </td>
      </tr>
    </>
  )
}




function Statewise() {

  const [data, setData] = useState([]);

  function getCovidData() {
    let API = "https://api.covid19api.com/summary";
    fetch(API)
      .then(apiData=>{
        return apiData.json();
      })
      .then((actualData)=>{
        setData(actualData.Countries);
      })
      .catch((error)=>{
        console.log(error);
      })
  
  }

  useEffect(()=>{
    getCovidData();
  }, [])

  return (
    <>
      <div className='container-fluid'>
        <div className='main-heading'>
          <h1 className=''>INDIA COVID-19 Dashboard </h1>
        </div>
        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th>country</th>
                <th>New confirmed</th>
                <th>New Deaths</th>
                <th>Total Confirmed</th>
                <th>Total Deaths</th>
                <th>Total Recovered</th>
              </tr>
            </thead>
            <tbody>
            {
              data.map((item, index)=>{
                return (
                  <>
                    <Data 
                      key={index}
                      item={item}
                     />
                  </>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Statewise;