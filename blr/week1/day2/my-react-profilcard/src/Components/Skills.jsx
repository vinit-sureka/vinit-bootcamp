import React from 'react'

const Skills = (props) => {
    console.log("Sills",props.skills)
    let skillArray = props.skills
  return (
    <div>
       <h1>Skills</h1> 
      {
        skillArray.map((item,key)=>
            <h2 key={key+1}>
               {key +" -> "+ item} 
            </h2>
            )
      }
       
    </div>
  )
}
export default Skills;