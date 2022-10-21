import React, { useState } from 'react'

export default function AppTile() {
   let [active,setActive] = useState(null)

  return (
    <div 
     style={{overflowY:active!==null?"hidden":"scroll", top:active!==null&&"0"}} 
     id={"wrapper"} className="wrapper">
   
    <header className="header">
      <h6 className="text-uppercase text-secondary">Thursday 16 may</h6>
      <h2>Today</h2>
      <div className="avatar rounded-circle"></div>
    </header>
   {new Array(3).fill(0).map((card,i)=><section key={`card${i}`} className="card-container">
      <div  onClick={()=>setActive(i)} className={i===active?"card rounded-lg active shadow":"card rounded-lg shadow"}
           role="button"
           arial-label="Read more information"
         //   onclick="toggleCard(this)"
           >
    
        <div className="card-preview p-3">
          
         <div onClick={()=>setActive(null)} className="cross">x</div>
          
         <h5 className="text-uppercase text-secondary font-weight-thin">How to</h5>
          
         <h2 className="text-white">Crash your <br/> bad habits</h2>
          
         <div className="text-white absolute-bottom pb-3 text-sm"> Stop smoking, reduce your stress levels and enjoy a better night's sleep.</div>
        
         <img className="card-background" 
            //   width="auto"
              height="100%"
              width="350px"
              src="https://images.pexels.com/photos/37409/hammer-sledgehammer-mallet-tool.jpg?cs=srgb&dl=beating-construction-crushing-37409.jpg&fm=jpg" 
              alt="Application"/>
         
       </div>
      
      <div className="card-details p-3">
      
      <p>  <b>Lorem ipsum, dolor sit amet</b> consectetur adipisicing elit. Eligendi assumenda dolore eum quas, dolores iure odio ipsam id consequuntur perspiciatis saepe voluptatibus! Culpa recusandae provident reprehenderit saepe a. Laboriosam, necessitatibus!</p>
       
         <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi assumenda dolore eum quas, dolores iure odio ipsam id consequuntur perspiciatis saepe voluptatibus! Culpa recusandae provident reprehenderit saepe a. Laboriosam, necessitatibus!</p>
         
       </div>
    
    </div>
   </section>)}
    
    
   
    
  </div>
  )
}
