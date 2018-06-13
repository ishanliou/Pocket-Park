import React, { Component } from 'react'


class Map extends Component {
    render() {
           let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD23dlHvjTPW05PwXkctr9NXp1NktIdSig
                   &q=Space+Needle,Seattle+WA`
        return(
            <div>
                <h1>Google Map here</h1>
                <iframe className="iframe"
                    width="600"
                    height="450"
                    frameborder="0" style={{border:0}}
                    src={url}
                    title="map"
                    allowfullscreen>
                </iframe>
            </div>
        )
    }
}

export default Map