import React, { useEffect, useState } from 'react'
import '../Api-Utilisateurs-posts/style.css'

function App () {

    const [utilisateurs, setUtilisateurs] = useState([])
    const [articals, setArticlas] = useState([])
    const [userActive, setUserActive] = useState(0)
    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=> {return res.json()})
            .then((data)=>setUtilisateurs(data))
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=> {return res.json()})
            .then((data)=>setArticlas(data))
    },[])
    function handleClick(id){
        setUserActive(id)
    }
    function handleInfo () {
        setUtilisateurs([])
    }
    return(
        <div style={{padding:'20px'}}>
            <h1>Users list</h1>
            {
                utilisateurs.map((utilisateur , index) =>{
                 return <p key={index}>{utilisateur.name} 
                 <button onClick={()=>handleClick(utilisateur.id)}>Show Articals</button>
                 <div>
                    {
                        userActive === utilisateur.id
                        // ? <p>test{userActive}</p>
                        ? <ul className='card'>
                            {
                                articals.filter((item)=>item.userId===parseInt(userActive))
                                .map((articale)=> {
                                        return <li><hr/>Id : {articale.id}<br/>Titre : {articale.title} <br/>Body : {articale.body}</li>
                                    }
                                )
                            }
                        </ul>
                        :  null
                    }
                   
                 </div>
      
                 </p>
                
                }) 
            }
        </div>
    )
}

export default App;