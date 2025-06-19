import React from 'react'
import Day5ImageShow from './Day5ImageShow';

const Day5Image = ({images}) => {
  const renderedImages = images.map((image) => {
     return <Day5ImageShow key = {image.id} image={image}/>
  })

  console.log(images);
  return (
    <div>{renderedImages}</div>
  )
}

export default Day5Image