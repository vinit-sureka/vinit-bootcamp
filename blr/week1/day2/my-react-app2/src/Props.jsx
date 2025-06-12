import React from 'react'

const Props = () => {
  const inputType ='number'
  const minValue = 5;
  return (
    <div>
        <input type = "number" min = {5}  list ={[1,2,3]}
         style ={{color : 'red'}} 
         
         /><br/>
        <input type = {inputType} min = {minValue} />
        </div>
  )
}

export default Props;