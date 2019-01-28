import React, { Component } from 'react';
import {MDBRow,MDBCol} from 'mdbreact'
import axios from 'axios'
import NavbarPage from './Navbar'
import Sidenav from './sidenav'
import PanelPage from './carditemdetaille2'
import CardItemdetaiile from './carditemdetaille'

var Style={
    maxWidth: "100%"

}


class CardItemPage extends Component {
    constructor(props)
    {
        super(props)
        this.state={
        eventById:{},
        isLoaded: false,

    }
}
    componentDidMount(){ 
  
    axios.get(`http://bo-ipocrat.satoripop.com:3001/api/event/eventById?id=${this.props.id}`,
                    { headers: { Authorization: "m0vM2jeMPgHlEKlBWvkIMVoCjGYupX99FHyBeFFSc4nApWKMFIbU2VFrG4Snro3G" } })
                    .then(res=>this.setState({
                        isLoaded: true,
                        eventById:res.data
                    },()=>console.log(this.state.eventById)))
                    // .then(res=>console.log(res.data))
                    .catch(err=>console.log(err))
  }

    render() { 
        console.log(this.state.eventById)
        if (!this.state.isLoaded) 
        {
            return ( 
          
        <div className='cardItemPage-container'>
          <MDBRow style={Style} >
         <MDBCol size="3">
         <Sidenav/>
         </MDBCol>
         <MDBCol size="9">
         <NavbarPage/>

         
        </MDBCol> 
        </MDBRow>
        </div>
     );}
            else 
            {
                return ( 
              
            <div className='cardItemPage-container'>
              <MDBRow style={Style} >
             <MDBCol size="3">
             <Sidenav/>
             </MDBCol>
             <MDBCol size="9">
             <NavbarPage/>
             <MDBRow className='card-list-container-detaille'>
             <MDBCol  md="10" lg="6" className='mb-3'>
             <CardItemdetaiile eventById={this.state.eventById}/>
             </MDBCol>
             <MDBCol  md="10" lg="6">
             <PanelPage eventById={this.state.eventById}/>
             </MDBCol>
             </MDBRow>

             
            </MDBCol> 
            </MDBRow>
            </div>
         );}
    }
}
 
export default CardItemPage;