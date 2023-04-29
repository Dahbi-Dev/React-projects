import React from 'react'

function ResultatList(props) {
  return (
    <div className='child rounded'>
        <h1>Composant ResultatList</h1>
        {/*Affichage conditionnel selon les resultats transmis */}
        {props.resultats.length===0 ?( <p className=''>Pas de résultats</p>) :( 
         <div>
          <span className='d-table' style={{color:'black'}}>
           
              {props.resultats.map(prod=> {
                return 
              <table className='table'>
                <thead>
                  <tr>
                  <th scope='col'>Fruit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <th scope='row' ></th>
                      <td  key={prod.nom}>{prod.nom}</td>
                  </tr>
                </tbody>
              </table>
            })}
           
          </span>
            
            {/*parcourir la liste des résultats et les afficher dans une liste HTML*/}
            
         </div>)
        }
    </div>
  )
}

export default ResultatList