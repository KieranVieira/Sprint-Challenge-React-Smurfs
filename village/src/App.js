import React, { Component } from 'react';
import axios from 'axios';
import { Route,NavLink } from 'react-router-dom';
import styled from 'styled-components'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import smurfLogo from './assets/smurf-logo.png'

const NavBar = styled.div`
  display: flex;
  margin-top: 15px;
  height: 100px;
  width: 1024px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  a{
    text-decoration: none;
    color: white;
    background-color: #0D4397;
    box-shadow: black 4px 4px 15px;
    font-size: 2rem;
    margin: 0px 15px;
    margin-top: 15px;
    padding: 5px 15px;
    border: 1px solid white;
    border-radius: 5px;
  }
  img{
    width: 150px;
    height: auto;
    background-color: white;
    padding: 5px;
    border-radius: 50px;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .then(err => console.log('Fetch failed', err))
  }

  deleteSmurf = (e,id) => {
    e.preventDefault()
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => this.setState({ smurfs: res.data }))
        .then(err => console.log('Delete failed', err))
  }

  render() {
    return (
      <div className="App">
        <NavBar>
          <img src={smurfLogo} alt=''/>
          <div>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
          </div>
        </NavBar>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} />}/>
        <Route exact path="/" render={props => <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} {...props}/>}/>
      </div>
    );
  }
}

export default App;
