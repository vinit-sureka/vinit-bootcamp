import 'bulma/css/bulma.css' 
import React from 'react';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


const App = () => {
  return (
    <div>
      <section className='hero is-primary'>
        <div className ="hero body">
          <p className ="title">  Personal Digital Assistants</p>
        </div>

      </section>
        <div className = "container">
          <section className ="section">
            <div className="columns">
              <div className ="column is-4">
        <ProfileCard title ="Alexa" handel = "@alexa99" image = {AlexaImage} 
        description = "alex is created by amazon and help you buy thing"/>
              </div>
                <div className ="column is-4">
       <ProfileCard title ="Cortana" handel = "@cortana32" image = {CortanaImage}
       description = "alex is created by amazon and help you buy thing"/>
              </div>

                  <div className ="column is-4">
         <ProfileCard title ="Siri" handel = "@siri01" image = {SiriImage}
         description = "alex is created by amazon and help you buy thing"/>
         </div>  
        
        </div>
         </section>
    </div>
    </div>
  )
}

export default App