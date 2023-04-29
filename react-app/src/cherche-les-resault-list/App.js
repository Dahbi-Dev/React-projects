import React, { useState } from 'react'

import ResultatList from './ResaultList'
import ChercherBar from './ChercherBar'

const liste =[
    {nom:"Banane",type:"fruit"},
    {nom:"Orange",type:"fruit"},
    {nom:"Pomme",type:"fruit"},
    {nom:"Raisins",type:"fruit"},
    {nom:"Kiwi",type:"fruit"},
    {nom:"Tomates",type:"Légume"},
    {nom:"Pomme de terrme",type:"Légume"},
    {nom:"Navet",type:"Légume"},
    {nom:"Poivron",type:"Légume"},
]
function App() {
  const [type, settype] = useState("")
  const [resault, setresault] = useState([])

 const filterApp = (typeProd) =>{
  settype(typeProd)
  setresault(liste.filter(prod => prod.type.toUpperCase() == typeProd))
 }
  return (
    <div className='parent container rounded'>
    <h1 style={{textAlign:'justify'}}>Composant App</h1>
    <ChercherBar onChercheSubmit={filterApp}/>
    <div>
        <p>Le type : 
                <span style={{color:"White",fontWeight:"bold"}}> {type}</span></p>
    </div>
    <ResultatList resultats = {resault}/>
    </div>
  )
}

export default App