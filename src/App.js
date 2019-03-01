import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav'
import Routes from './routes'
import {withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav location={this.props.location}/>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
