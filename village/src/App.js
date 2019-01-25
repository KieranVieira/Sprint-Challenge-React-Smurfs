import React, { Component } from 'react';
import axios from 'axios';
import { Route,NavLink } from 'react-router-dom';
import styled from 'styled-components'

import './App.css';
import SmurfForm from './components/SmurfForm';
import SingleSmurf from './components/SingleSmurf'
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

    padding: 5px;
   
  }
  .active{
    background-color: black;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      isUpdating: false,
      updatingId: '',
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .then(err => console.log('Fetch failed', err))
  }

  addSmurf = e => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', {name: this.state.name, age: this.state.age, height: this.state.height})
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/')
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteSmurf = (e,id) => {
    e.preventDefault()
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => this.setState({ smurfs: res.data }))
        .then(err => console.log('Delete failed', err));
    this.props.history.push('/')
  }

  initiateUpdate = (e, id, name, height, age) => {
    e.preventDefault();
    this.setState({
      name,
      height,
      age,
      isUpdating: true,
      updatingId: id
    })
    this.props.history.push('/smurf-form')
  }

  updateSmurf = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${this.state.updatingId}`, {name: this.state.name, age: this.state.age, height: this.state.height})
      .then(res => this.setState({ smurfs: res.data, isUpdating: false, name:'', age:'', height:'' }))
      .catch(err => console.log(err));
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <NavBar>
          <img src={smurfLogo} alt=''/>
          <div>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/smurf-form">{this.state.isUpdating ? 'Update Smurf' : 'Add Smurf'}</NavLink>
          </div>
        </NavBar>
        <Route 
          path="/smurf-form" 
          render={props => 
            <SmurfForm 
              handleInputChange={this.handleInputChange} 
              isUpdating={this.state.isUpdating} 
              updateSmurf={this.updateSmurf} 
              addSmurf={this.addSmurf} 
              name={this.state.name} 
              age={this.state.age} 
              height={this.state.height} 
              {...props} 
            />}
        />
        <Route 
          exact 
          path="/" 
          render={props => 
            <Smurfs 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf} 
              initiateUpdate={this.initiateUpdate} 
              {...props}
            />}
        />
        <Route 
          path="/smurf/:id" 
          render={props => 
            <SingleSmurf 
              {...props} 
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf} 
              initiateUpdate={this.initiateUpdate} 
            />}
        />
      </div>
    );
  }
}

export default App;
