import React from 'react'

const Day5ImageShow = ({image}) => {
  return (
    <div>
      <img src ={image.urls.small} alt = {image.alt_description}/></div>
  )
}

export default Day5ImageShow