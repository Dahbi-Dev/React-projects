import React, {Component} from 'react'


export default class Inscri extends Component {
    constructor(){
        super()
       this.state = {       
                    number: 0
                    }
       this.clickHandlerIncri = this.clickHandlerIncri.bind(this);
       this.clickHandlerDiscri = this.clickHandlerDiscri.bind(this);
       this.clickHandlerRes = this.clickHandlerRes.bind(this);
       }
       clickHandlerIncri(){

        this.setState(function(prev ){
          return {
            number : prev.number +1
          }
          
        })


        // this.setState(
        //   {
        //     number: 1
        //   }
        // )
        
      }

      // clickHandlerDiscri =() =>{
      //   this.setState({number : this.state.number -1})

      clickHandlerDiscri(){

        this.setState(function(){
          return {
            number : this.state.number-1
          }
        })
      }

      clickHandlerRes(){
        this.setState(
           {
            number:0
           }
        )
      }
       render(){
        return(
          <div className='ml-3 p-5'>
            <h1 className=' mb-3' style={{marginLeft:'120px'}}>{this.state.number}</h1>
            <button  className='mr-2' onClick={this.clickHandlerIncri}>incriment</button>
            <button className='mr-2' onClick={this.clickHandlerDiscri}>Discriment</button>
            <button onClick={this.clickHandlerRes}>Rinsialiser</button>
            <p   style={{color: this.state.number >=5 ? 'green' : 'red'}}> {this.state.number >=5 ? 'number is Good' : 'number is Bad'}</p>
           

          </div>
        )}
        }

        



  //     }
  //   incriment (){
  //     this.setState({number: this.state.number +2 } )
      
  //   }
  //   renicialise(){
  //     this.setState({number: this.state.number = 0} )
  //   }

  //   // RandomUp(){
  //   //   this.setState({number: this.state.number +   parseInt(Math.random()*10+1),color:(this.state.number >= 50)?'red' : this.props  })
  //   // }
  //   // RandomDown(){
  //   //   this.setState({number: this.state.number -   parseInt(Math.random()*10+1) })
  //   // }
    
  //   render() {
     
  //       return (
  //     <div>
        
  //      <h1 > 1 value du compteur : {this.state.number}</h1>
  //      <span>
  //       <button onClick={()=>this.incriment()}>incriment</button>       
  //       <button onClick={()=>this.renicialise()}> Renicialer</button>       
  //       </span>

         
  //      {/* <h1 >2 valuer du compteur : {this.state.number}</h1>
  //      <span>
  //       <button onClick={()=>this.RandomUp()}>Up</button>       
  //       <button onClick={()=>this.RandomDown()}> Down</button>       
  //       </span> */}



  //      {/* <li>Affiche la valuer du compteur : </li>
  //      <li>Affiche la valuer du compteur : </li> */}
        
  //     </div>
  //   )
  //   export function InFn(){
  //     const [message, setMess] = useState('bienvenue')
  //     const [btne, setbtn] = useState('login')
  //     function inscrir(){
        
  //     }
      
  //     return(
  //       <div>
  //         <h2>{message}</h2>
  //         <button>{btne}</button>
  //       </div>
  //     )
  //   }
  // }

