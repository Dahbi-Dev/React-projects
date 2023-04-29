import { Component } from "react";

class JeuDe extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  face: null, 
                  compteur: 0, 
                  fin: false ,
                  message:'',
                  color:''

                  };
  }
  Play = () => {
    let roll = Math.floor(Math.random() * 6 + 1);
    this.setState({ face: roll, compteur: this.state.compteur + 1 });
    // if nombre de face  === 1 then  affiche you lose and reset everything with color red
    if (this.state.face === 1) 
    this.setState({face: null , compteur:0, message:'You Lost The Game 😣', color: this.state.face === 1 ? 'red' : ''});
    // if nombre d'essais === 8 then  affiche you win and reset everything with color green
    if (this.state.compteur === 8 )
    this.setState({face:null, compteur:0 , message:'You Win The Game 🎉', color:'green'})
    // if nomre d'essais === 8 and nombre de face  === 1  then affiche draw and reset everything with color gray
    if (this.state.face ===1 && this.state.compteur === 8 )
    this.setState({face:null, compteur:0,message:'Draw 🤷‍♂️', color:'gray'})
    
  }
    Rest = () => {
      this.setState({ face: null, compteur: 0, fin: false ,
      message :'' });
  } 
  render(){
    return (
      <div className=" pt-2 pl-5 h-100 w-100  h-100 ">
        <div className="border border-3 border-dark card col-4    h-75   pb-4">
          <div className="card-header ">
            <img  
              src={
                this.state.face == null
                ? "images/all.jpg"
                : `images/${this.state.face}.jpg`
              } alt="tst"
              />
          </div>
          <h1>Jeu de Dé...</h1>
          <div className=" border rounded bg-dark text-white ">
            <p>face : {this.state.face}</p>
            <p>Nombre d'essais : {this.state.compteur}</p>
          </div>
              <hr/>
            <div  className=" d-lg-flex border outline-white rounded bg-dark text-white mb-3">
              <p>Roll Again</p>
              <p  style={{color: this.state.color}}> {this.state.message}</p>
            </div>
              <hr/>
            <div>
            <button className="btn btn-outline-dark mr-2" onClick={this.Play} >Play</button>
                <button className="btn btn-outline-dark " onClick={this.Rest}>Rest</button> 
            </div>   
        </div>
      </div>
    )
}
}
export default JeuDe;
