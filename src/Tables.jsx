import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Button, Form,Table} from 'react-bootstrap'
import Loginpg from '../src/Loginpg';



export default function Tables() {
    
    let [userss,setUserss]=useState([]);
    const fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUserss(data);
      })
    }
    console.log(userss);

    useEffect(()=>{
        fetchData();
    },[])

    const[ vlogs,setVlogg]=useState(false)
    const logoutt=()=>{
      setVlogg(true);
    }
    return (

        <>
     {vlogs?<Loginpg/>:
     
         <Table striped bordered hover>
         <thead>
           <tr>
             <th>user id</th>
             <th>id</th>
             <th>tittle</th>
             <th>completed</th>
           </tr>
         </thead>
         <tbody>
           {userss.map((items,i)=>{
               return(
                   <tr key={i}>
                   <td>{items.userId}</td>
                   <td>{items.id}</td>
                   <td>{items.title}</td>
                   <td>{items.completed}</td>
               </tr>
               )
            
           })}
         </tbody>
         <Button onClick={()=>logoutt(false)}>logout</Button>
       </Table>
}
        </>
        
    )
}
