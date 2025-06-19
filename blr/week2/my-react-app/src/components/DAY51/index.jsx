import{useState} from 'react';
import React from 'react'
import FromCreate from './FromCreate';
import FromShow from './FromShow';


const index = () => {

  const [from , setFrom] = useState([]);

const CreateFrom =(name) =>{
// console.log(name);
setFrom([...from,name]);

}

 return (
    <div>
      <FromCreate onCreate = {CreateFrom}/>
      <FromShow display ={from}/>
    </div>
  )
}

export default index