import React, { Component } from 'react';
import axios from 'axios';
import clientAuth from '../clientAuth.js';
import Map from './Map.js'

class ParksDetails extends Component {
    state = { 
        park: null,
        parkComments: [],
        loca: null
    }

    componentDidMount = () => {
       axios({ method: 'get', url: `/api/${this.props.parkCode}` }) // to backend get the specific np 
            .then((res) => {
                console.log(res)
                this.setState({
                    park: res.data.data[0], //only one arry we are getting
                    parkComments: res.data.parkComments, //get parkComment 
                    loca: res.data.data[0].latLong.replace("lat:","").replace("long:","")
                })
            })
    }

    addComment (evt) {
        evt.preventDefault()
        console.log('adding comment')
        const fields = {
            body: this.refs.comment.value
        }
        
        clientAuth.createComment(fields, this.props.parkCode).then(res => {
            if(res.data.success) {
                console.log(res.data)
                this.setState({
                    parkComments: [res.data.parkComment, ...this.state.parkComments]
                })
                this.refs.comment.value = ""
            }
        })
    }

    render() {
        // let loca = this.state.park.latLong.replace("lat:","").replace("long:","")
        let 
            url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD23dlHvjTPW05PwXkctr9NXp1NktIdSig
            &q=${this.state.loca}`

        if(!this.state.park) 
        return <div className="loader"><img src={`/images/tree.png`} className="App-logo" alt="logo" /><h3 className="park-details" >Loading...
                    
                </h3></div>
        return(
            <div>
            <h1 className="park-details">{this.state.park.fullName} | {this.state.park.states}</h1>
            <h3 className="park-details">-Description-</h3>
            <br/>
            <h4 className="park-details-sub">{this.state.park.description}</h4>
            <div className="line"></div>
            <a href={this.state.park.url}><div className="park-link" target="_blank">Visit {this.state.park.fullName}</div></a>
            

            <img style={{width:'100%', height:'auto'}} alt={this.state.park.name} src={`/images/${this.state.park.parkCode}.jpg`}/>
            <Map />
            {/* <div>{this.state.park.latLong.replace("lat:","").replace("long:","")}</div> */}

            <iframe className="iframe"
                    width="600"
                    height="450"
                    frameBorder="0" style={{border:0}}
                    src={url}
                    title="map"
                    allowFullScreen>
                </iframe>


            <form className="form-comment" onSubmit={this.addComment.bind(this)}>
                <textarea ref="comment" type="text" rows="3" placeholder="add your comment" ></textarea><br />
                <button className="btn-submit">Add your comment</button>
            </form>
            
            <h3 className="park-details-comment">{this.state.parkComments.map((c, i) =>{
                return <div key={i}>{c.body} <h4>-{c.by.name} </h4><hr/></div>
            })}</h3>
            
            </div>
        )
    }
}

export default ParksDetails
