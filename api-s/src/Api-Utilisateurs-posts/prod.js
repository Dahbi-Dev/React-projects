import React, { useEffect, useState } from 'react'
import '../Api-Utilisateurs-posts/style.css'

function Prod () {

    const [utilisateurs, setUtilisateurs] = useState([])
   
    useEffect(()=>{
            fetch('https://schema.org/Product')
            .then((res)=> {return res.json()})
            .then((data)=>setUtilisateurs(data))
    },[])

    return(
        <div style={{padding:'20px'}}>
            <h1>Users list</h1>
            {
                utilisateurs.map((utilisateur , index) =>{
                 return <p key={index}>{utilisateur.name} 
                
               
               </p>
                
                }) 
            }
        </div>
    )
}

export default Prod;