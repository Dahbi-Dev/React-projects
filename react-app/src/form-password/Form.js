import React, { useState } from 'react'

function Form(){

    const [pass, setpass] = useState('')
  

    return(
       <div >
        <div className='card'>
            <label> Entrer Votre password  : </label>
            <input type='password' onChange={(e)=>setpass(e.target.value)}  />
            <p style={{color: pass.length >= 4 ? 'green' : 'red'}}>
            {pass.length < 4  ?  'Password doit avoir au moins t 4 caracteres ' : ' password is Good ' }{pass.length}
            </p>
            
        </div>
        </div>
    )
}

export default Form