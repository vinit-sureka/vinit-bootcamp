import React from 'react'

const FromShow = ({display}) => {
  console.log(display);
  return (
    <div>
      <h3>Contact:</h3>
      <ul>
        {display.map((val,idx)=>(
          <li key={idx}>{val.name} {val.lastname}</li>
        ))}
      </ul>
     
    </div>
  )
}

export default FromShow