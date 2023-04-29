import React from 'react'
import ReactDOM from 'react-dom'


function Products (){

   
    const produits = [
        {
          id: 1,
          title: 'PC Portable Gamer HP VICTUS',
          price: '7490 DH',
          thumbnail : 'HP16D0195NF.jpg'
        },
        {
          id: 2,
          title: 'PC Portable Gamer',
          price: '2190 DH',
          thumbnail : 'HP14424U3EA.jpg'
        },
        {
          id: 3,
          title: 'Pc Portable Chromebook Acer',
          price: '3640 DH',
          thumbnail: 'NXATHEF002.jpg'
        },
        {
          id: 4,
          title: 'PC Portable - HUAWEI',
          price: '1270 DH',
          thumbnail: 'HUA6901443442959.jpg'
        },
      ];

      function Product(props){
        return (
            <div className="col">
            <div className="card shadow-sm">
                <img style={{backgroundColor:"black"}} className="bd-placeholder-img card-img-top" src={`img1/${props.data.thumbnail}`} alt="" />
                <div className="card-body">
                    <p className="card-title">{props.data.title}</p>
                    <p className="card-text">{props.data.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
      }
    return(
        <div class='container mt-5'>
            <div class='row'>
            {
                produits.map((produit , index)=>
                <Product key={index} data={produit}>{produit}</Product>
                )
            }
            </div>
        </div>
    )
}
// ReactDOM.render(<Products />, document.getElementById('root'));
export default Products;