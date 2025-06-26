import React from 'react'

const Accordion = ({items}) => {


const renderdItems = items.map((item) => {
    return (
        <div key = {item.id}>
            <div>{item.lable}</div>
            <div>{item.content}</div>
        </div>
    )

})




  return (
    <div>{renderdItems}</div>
  )
}

export default Accordion;