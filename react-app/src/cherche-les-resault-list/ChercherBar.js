import React, { useState } from 'react'


function ChercherBar(props) {
  const [keyword, setKeyword] = useState('')

  // const handlechange =(event) => {
  //   setKeyword (event)
  
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onChercheSubmit(keyword)
  }
 
  return (
    <div className='child rounded'>
        <form className='pb-5 pt-5 border r' onSubmit={handleSubmit}>
          <div>
            <div>
            <h2>Composant ChercheBar</h2>
            <div className='pb-3'>
                <label>Entrer le mot clé de recherche:</label><br/>
                <input className='input' type="text" onChange={event => {setKeyword(event.target.value.toUpperCase())}}/>
            </div></div>
            <button className='btn-primary rounded' type="submit">Chercher</button>
            </div>
        </form>
    </div>
  )
}
export default ChercherBar