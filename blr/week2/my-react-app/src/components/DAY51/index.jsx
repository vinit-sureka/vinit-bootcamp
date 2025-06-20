import{useState} from 'react';
import React from 'react'
import FromCreate from './FromCreate';
import FromShow from './FromShow';
import FromList from './FromList';


const index = () => {

  const [from , setFrom] = useState([]);

const CreateFrom =(name) =>{
// console.log(name);
setFrom([...from,name]);

}

 return (
    <div className='app'>
      <FromCreate onCreate = {CreateFrom}/>
      <FromShow display ={from}/>
      <FromList from = {from} />
    </div>
  )
}

export default index