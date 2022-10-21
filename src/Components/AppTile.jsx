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
    
    
    {/* <section className="card-container card-lg">
      <div className="card rounded-lg shadow"
           
           role="button"
           arial-label="Expand the card information"
           onclick="toggleCard(this)">
    
        <div className="card-preview p-3">
          <div className="cross">x</div>
          
          <div className="absolute-bottom left-0 p-3 bg-white">
            <h6 className="text-uppercase text-secondary font-weight-thin">Feature app</h6>
            <h3>Turn selfies into works of art</h3>
            <div className="text-secondary text-sm"> Create and share arty snaps <br/> with Skchy</div>
         </div>
          
         <img className="card-background" 
              height="auto"
              width="100%"
              src="https://images.pexels.com/photos/2223060/pexels-photo-2223060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Game"/>
         
       </div>
      
      <div className="card-details p-3">
      
      <p>  <b>Lorem ipsum, dolor sit amet</b> consectetur adipisicing elit. Eligendi assumenda dolore eum quas, dolores iure odio ipsam id consequuntur perspiciatis saepe voluptatibus! Culpa recusandae provident reprehenderit saepe a. Laboriosam, necessitatibus!</p>
       
         <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi assumenda dolore eum quas, dolores iure odio ipsam id consequuntur perspiciatis saepe voluptatibus! Culpa recusandae provident reprehenderit saepe a. Laboriosam, necessitatibus!</p>
         
       </div>
    
    </div>
   </section>
    
    <hr/>
    <h2 className="mb-3">More Stories For You</h2>
    
    <section className="card-container">
      <div className="card rounded-lg shadow"
           role="button"
           arial-label="Read more information"
           onclick="toggleCard(this)">
    
        <div className="card-preview p-3">
          
         <div className="cross">x</div>
          
         <h5 className="text-uppercase text-light font-weight-thin">New Game</h5>
          
         <h2 className="text-white">Brawl Starts is here<br/> and it's brilliant</h2>
          
         <div className="text-white absolute-bottom pb-3 text-sm">The maker of Clash Royale has done ot again.</div>
        
         <img className="card-background" 
              height="auto"
              width="100%"
              src="https://lasallefalconer.com/wp-content/uploads/2018/03/IMG_1319-575x900.jpg" 
              alt="Application"/>
         
       </div>
      
      <div className="card-details p-3">
      
      <p>  <b>Lorem ipsum, dolor sit amet</b> consectetur adipisicing elit. Eligendi assumenda dolore eum quas, dolores iure odio ipsam id consequuntur perspiciatis saepe voluptatibus! Culpa recusandae provident reprehenderit saepe a. Laboriosam, necessitatibus!</p>
       
         <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi assumenda dolore eum quas, dolores iure odio ipsam id consequuntur perspiciatis saepe voluptatibus! Culpa recusandae provident reprehenderit saepe a. Laboriosam, necessitatibus!</p>
         
       </div>
    
    </div>
   </section> */}
    
  </div>
  )
}
