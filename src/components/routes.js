import React, { Component } from 'react';
import {Route,Switch, Link, Redirect } from 'react-router-dom'
import history from './history'
import Login from './login'
import Evenements from './evenements'
import CardItemPage3 from './cardItempage3'

class Routes extends Component {
    
    render() { 
        //  console.log(this.state.events)
        return ( 
            <div className='routes-container' >
            <Switch>
             <Route exact path='/' render={props => (<Login history={this.props.history}/>)}/> 
            
            <Route exact path='/events' render={(props) => (<Evenements/>)} />
            
            <Route exact path='/events/:id' render={(props) => (<CardItemPage3 id={props.match.params.id} />)} />
             </Switch>
  
              {/* <Route exact path='/events' render={(props) => (
    this.state.isAuthenticated? <Evenements events={this.state.events}/>: <Redirect to='/' />
  )} /> */}
      
      

            
            </div>
         );
    }
}
 
export default Routes;