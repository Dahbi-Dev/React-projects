import React, {Component} from 'react'


export class FormClass extends Component {
    constructor(){
        super()
        this.state = {
            pass : ''  }
    }
  render() {
    return (
      <div>
            
       <div >
        <div className='card'>
            <label> Entrer Votre password  : </label>
            <input type='password' onChange={e=>{this.setState({pass: e.target.value})}}  />
            <p style={{color: this.state.pass.length >= 4 ? 'green' : 'red'}}>
            {this.state.pass.length < 4  ?  'Password doit avoir au moins t 4 caracteres ' : ' password is Good ' }
            {this.state.pass.length}</p>
        </div>
        </div>
   
      </div>
    )
  }
}

export default FormClass
