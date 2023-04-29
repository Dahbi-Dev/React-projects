import React from 'react'



function Form(){
  function handleSubmit (e){
  e.preventDefault(); console.log('you clicked submit')
  }
  return(
    //arrow function
  <form onSubmit={(event)=> handleSubmit(event)}>
    <button type='Submit'>Submit</button>


  </form>
  )


}
export default Form;
