import React from 'react'

 const Bio = (props) => {
    console.log(props)
  return (
    <div>
        <h2>Bio : {props.bio}</h2>
    </div>
  )
}

export default Bio
