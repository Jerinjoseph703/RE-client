import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
   <div>
      <div className='hero-img'>
        <div className="gradient"></div>
           <img  src='/urban-traffic.jpg' alt="Welcome to Avenu Reality" /> 
           
          <div className="hero-text">
            <p>"Building Dreams, One Home at a Time"</p>
          </div>
      </div>
      <div className='home-button'>
        <button className='buttons'><Link to='/Login' style={{ color: 'white', textDecoration: "none" }}>Login</Link> </button>
        <button className='buttons'><Link to='/poperties' style={{ color: 'white', textDecoration: "none" }}>Properties</Link> </button>
      </div>
    </div>
    
  )
}

export default Home