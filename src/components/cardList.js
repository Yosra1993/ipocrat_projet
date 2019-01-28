import React, { Component } from 'react';
import {MDBRow} from 'mdbreact'
import CardItem from './cardItem'
import Button from './button'
class CardList extends Component {

    render() { 
        const{elm}=this.props
        
        return ( 
            <div className="card-list-container">
            <Button/>
            <MDBRow className='card-list'>
            {
                elm.events.map((el,index)=><CardItem  key ={index} event={el} />)
            }
             
             
            </MDBRow>
            </div>
         );
    }
}
 
export default CardList;