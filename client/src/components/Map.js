import React, { Component } from 'react'
import axios from 'axios'

class Map extends Component {

    render() {
        //    let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD23dlHvjTPW05PwXkctr9NXp1NktIdSig
        //                &q=Space+Needle,Seattle+WA`
        return(
            <div>
                <h1>Google Map here</h1>
                {/* <iframe className="iframe"
                    width="600"
                    height="450"
                    frameBorder="0" style={{border:0}}
                    src={url}
                    title="map"
                    allowFullScreen>
                </iframe> */}

                <div></div>
            </div>
        )
    }
}

export default Map