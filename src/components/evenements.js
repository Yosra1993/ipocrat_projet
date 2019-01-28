import React, { Component } from 'react';
import {MDBRow,MDBCol} from 'mdbreact'
import axios from 'axios'
import NavbarPage from './Navbar'
import Sidenav from './sidenav'
import CardList from './cardList'
var Style={
    maxWidth: "100%"

}
class Events extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            events:{
                "total": '2',
    "events": []
            },
           
        }
    }
    
                componentDidMount() {
                    
                    axios.get(`http://bo-ipocrat.satoripop.com:3001/api/subscriber/myevents?filterType=0`,
                    { headers: { Authorization: "m0vM2jeMPgHlEKlBWvkIMVoCjGYupX99FHyBeFFSc4nApWKMFIbU2VFrG4Snro3G" } })
                    .then(res=>this.setState({
                        events:res.data
                    },()=>console.log(this.state.events)))
                    // .then(res=>console.log(res.data))
                    .catch(err=>console.log(err))
                }
    
    render() { 
        // console.log(this.props.events)
        return ( 
            <div className='events-app'>
             <MDBRow style={Style} >
             <MDBCol size="3">
             <Sidenav/>
             </MDBCol>
             <MDBCol size="9">
             <NavbarPage/>
             <CardList elm={this.state.events} />
             </MDBCol>
            </MDBRow>
            </div>
         );
    }
}
 
export default Events;