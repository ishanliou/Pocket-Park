import React, { Component } from 'react'


class Home extends Component {
    render(){
        return( 
            <div className="heroImg"> 
                <img style={{width:'100%', height:'auto'}} alt="" src={`/images/hero-Yosemite-sm.jpg`}/>   
                <div className="centerText">Pocket Parks</div>
                <div className="credit">Special Thanks to <a href="https://www.nps.gov/index.htm" target="_blank"  rel="noopener noreferrer">National Park Service</a><img className="nps-logo" alt="" src={`/images/nps-logo.png`} /></div>
            </div>
        )
    }
}

export default Home