import React from 'react'
import Header from './Header';
import Skills from './Skills';
import Contact from './Contact';
import Bio from './Bio';

const ProfileCard = (props) => {
 const userData = [{
   
    header: {
      name: 'John Doe',
      title: 'Software Engineer',
      avatar: ""},
    skills: [
      'JavaScript',
      'React',
      'HTML',
      'CSS',
      'Node.js',
      'Python',
    ],
    contact: {
      email: 'john.doe@example.com',
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    bio: 'A passionate software engineer with a focus on web development. Experienced in building scalable and maintainable applications.',
},
{
    header: {
      name: 'John Doe',
      title: 'Software Engineer',
      avatar: ""},
    skills: [
      'JavaScript',
      'React'
    ],
    contact: {
      email: 'john.doe@example.com',
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    bio: 'A passionate software engineer with a focus on web development. Experienced in building scalable and maintainable applications.',
},
{
    header: {
      name: 'John Doe',
      title: 'Software Engineer',
      avatar: ""},
    skills: [
      'JavaScript',
      'React'
    ],
    contact: {
      email: 'john.doe@example.com',
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
    },
    bio: 'A passionate software engineer with a focus on web development. Experienced in building scalable and maintainable applications.',
}

  ];


  return (
    <div>
       <Header userData={userData}/>
       {/* <Skills  skills={userData.skills}/>
       <Contact contact ={userData.contact}/>
       <Bio bio = {userData.bio}/> */}

     </div>
  )
}

export default ProfileCard