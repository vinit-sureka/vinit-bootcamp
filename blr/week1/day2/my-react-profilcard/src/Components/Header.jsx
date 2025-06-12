import React from 'react'

const Header = (props) => {
    console.log("Props",props.userData)
    let data = props.userData
  return (
    <div>
     {
        props.userData.map((item)=>{
            return (
                <>
                   <h2>Name : {item.header.name}</h2>
                   <h2>Title :{item.header.title}</h2>
                   <h2>Avatar :<img src={item.header.avatar} alt=''/></h2> 
                   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                 </>
              )
        })
     }
      
    
    </div>
  )
}

export default Header 