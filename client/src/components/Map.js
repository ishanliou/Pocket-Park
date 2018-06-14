import React, { Component } from 'react'

class Map extends Component {
    
    render() {
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD23dlHvjTPW05PwXkctr9NXp1NktIdSig
                   &q=${this.props.googleMap}
                   &zoom=7`
    
        return(
            <div>
                <iframe className="iframe"
                        width="70%"
                        height="450"
                        frameBorder="0" style={{border:"0", marginBottom:"48px"}}
                        src={url}
                        title="map"
                        allowFullScreen>
                </iframe>
                
            </div>
        )
    }
}

export default Map