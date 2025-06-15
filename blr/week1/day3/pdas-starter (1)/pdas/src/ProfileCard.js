import React from 'react'

const ProfileCard = ({title,handel,image,description}) => {
    //const {title,handel} = props;
  return (
    <div className = "card">
        <div className = "card-image">
        <figure classname = "image is-1by1">
            <img src ={image}/>
        </figure>
        </div>
        <div className = "card-content">
            <div className ="media-content">
            <p className = "title is-4">{title}</p>
            <p className = "title is-6">{handel}</p>
        </div>
        <div className='content'>{description}</div>
       </div>
    </div>
  )
}

export default ProfileCard