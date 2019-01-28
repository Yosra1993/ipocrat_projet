import React, { Component } from 'react';
import Routes from './routes'
import moment from 'moment'
import 'moment/locale/fr';
import './App.css';

class App extends Component {

  render() {
    moment.locale('fr');
    return (
      <div className="App">
        <Routes history={this.props.history}/>
      </div>
    );
  }
}

export default App;
