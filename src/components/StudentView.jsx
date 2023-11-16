import React, { useEffect, useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const StudentView = () => {
  const [date,changeDate]=useState( [])

 const fetchData=()=>{
  axios.post("http://127.0.0.1:8000/api/viewall/").then(
    (response)=>{
      changeDate(response.data)
    }
  )
 
 }


 useEffect(()=>{fetchData()},[])

  return (
    <div>

<StudentHeader/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll NO</th>
      <th scope="col">Admission no</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
    
    {date.map(
      (value,index)=>{
        return <tr>
        <th scope="row">{value.name}</th>
        <td>{value.rollno}</td>
        <td>{value.admno}</td>
        <td>{value.college}</td>
      </tr> 
      }
    )}
    
  </tbody>
</table>



    </div>
  )
}

export default StudentView