import React, { Component } from 'react'

class Map extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD23dlHvjTPW05PwXkctr9NXp1NktIdSig
                   &q=${this.props.googleMap}
                   &zoom=11`
    
        return(
            <div>
                <iframe className="iframe"
                        width="600"
                        height="450"
                        frameBorder="0" style={{border:"0"}}
                        src={url}
                        title="map"
                        allowFullScreen>
                </iframe>
                
            </div>
        )
    }
}

export default Map