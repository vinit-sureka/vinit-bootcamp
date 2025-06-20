import React from 'react'
import FromShow from './FromShow'

const FromList = ({froms}) => {

const renderedFroms = froms.map((from) => {
return <FromShow key = {from.id} from ={from}/>
})


  return (
    <div className='book-list'>{renderedFroms}</div>
  )
}

export default FromList