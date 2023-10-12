import './homework.scss'
import React from 'react'

const Homework = () => {
    
    
  return (
    <div className='container' >
    
        <div className='header-navbar' style={{backgroundColor:"green",borderRadius:"1rem",padding:"1rem"}}>
              
              <ul style={{display:"flex",textAlign:"center",justifyContent:"space-around",gap:"3rem",listStyleType: "none"}}>
              <li><input icon='search' placeholder='Search...' style={{borderRadius:"1rem",padding:"0.3rem"}}/></li>
              <li>Home</li>
              <li>About</li>
              <li>Content</li>
              </ul>
        </div> 
        <div style={{display:"flex",gap:"2rem",marginTop:"2rem"}}>
        <div className='sidebar' style={{backgroundColor:"aqua",padding:"8%",borderRadius:"1rem"}}></div>
        <div className='content' style={{backgroundColor:"red",padding:"40%",borderRadius:"1rem"}}></div>
        </div>
    </div>
  )
}

export default Homework