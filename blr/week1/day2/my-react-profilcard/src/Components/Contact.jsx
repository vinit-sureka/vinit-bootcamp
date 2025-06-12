import React from 'react'

const Contact = (props) => {
console.log(props)
  return (
    <div>
        <h1>Email : {props.contact.email}</h1>
        <h2>Linkedin : {props.contact.social.linkedin}</h2>
          <h2>github : {props.contact.social.github}</h2>
    </div>

  )
}
export default Contact;
