import React, { useState } from 'react'

function Form(){

    const [nom, setnom] = useState('')
    const [prenom, setprenom] = useState('')
    const [info, setinfo] = useState('')
    // const [info2, setinfo2] = useState('')
    
   
function handleAfficher(){
    setinfo(`nom : ${nom} , prenom : ${prenom}`)
    // setinfo2(`prenom : ${prenom}`)
}

    return(
       <div >
        <div>
            <label> Name &nbsp; &nbsp; :&nbsp;&nbsp; </label>
            <input type='text' onChange={(event)=>setnom(event.target.value.toUpperCase())}  />
        </div>
        
        <div>
            <label> Prenom  &nbsp;: &nbsp;</label>
            <input type='text' onChange={(event)=>setprenom(event.target.value.toUpperCase())} 
              />
        </div>
           
    <button className='btn btn-outline-primary ' style={{marginLeft:"130px"}} onClick={()=>handleAfficher()}>Afficher</button>

            <p>{info}</p>
            {/* <p>{info2}</p> */}
           
        </div>
        
    )
}

export default Form