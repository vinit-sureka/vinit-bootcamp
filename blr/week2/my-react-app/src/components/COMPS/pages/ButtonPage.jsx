import React from 'react'
import Button from '../component/Button'
import {GoBell,GoCloudDownload,GoDatabase} from 'react-icons/go';

const ButtonPage = () => {

   const handelClick =()=>{
       console.log('Button clicked or hovered');
   };


  return (
<div>
 {/* <div>me={}
    <Button success rounded outline className ="mb-5" onClick ={handelClick} classNA><GoBell/>click me</Button>
 </div> */}
 <div >
    <Button success onMouseEnter = {handelClick}>
        <GoCloudDownload/>a</Button>
 </div>
 {/* <div  >
    <Button warning> <GoDatabase/>b</Button>
 </div>
 <div>
    <Button secondary outline>c</Button>
 </div>
 <div>
    <Button primary>d</Button>
 </div> */}
 </div>
  )
}

export default ButtonPage;