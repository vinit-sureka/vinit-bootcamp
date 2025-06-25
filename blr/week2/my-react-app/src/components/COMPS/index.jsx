import ButtonPage from './pages/ButtonPage'
import Accordion from './component/Accordion'

const index = () => {

const items =[
   {
       id:'123',
       lable: 'vinit',
       content:'vinit is a boy'
   },
      {
       id:'1234',  
       lable: 'vinit',
       content:'vinit is a boy'
   },
      {
       id:'12345',  
       lable: 'vinit',
       content:'vinit is a boy'
   }
];


function myFunction(item , expandedIndex){
   return items.map((item , index) => {
      if(index === expandedIndex){
         return 'Expanded'
      }else{
         return 'collasped';
      }
   })
}

  return (
   <>


     {/* <div><Accordion items = {items}/></div> */}
      <div><ButtonPage/></div>
   
    
   </>
    
  )
}

export default index