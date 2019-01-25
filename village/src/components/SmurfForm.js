import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSmurfForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  h1{
    text-align: center;
    font-size: 2rem;
    background-color: white;
    border: 1px solid black;
    width: 65%;
    padding: 5px 0;
    border-radius: 5px;
    margin: 10px auto;
  }
  input{
    margin: 4px 0;
    padding: 7px 0;
    background-color: white;
    border-radius: 5px;
    font-size: 1.7rem;
    color: black;
    text-align: center;
    border: 1px solid black;
    &::placeholder{
      text-align: center;
      color: black;
    }
  }
  button{
    margin: 4px 0;
    padding: 9px 0;
    color: white;
    border: 1px solid white;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: #0D4397;
    &:hover{
      background-color: black;
      transition: 0.4s;
      cursor: pointer
    }
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledSmurfForm onSubmit={this.props.isUpdating ? this.props.updateSmurf : this.props.addSmurf}>
        <h1>{this.props.isUpdating ? 'Update the Smurf' : 'Add a Smurf'}</h1>
        <input
          onChange={this.props.handleInputChange}
          placeholder="name"
          value={this.props.name}
          name="name"
          required
        />
        <input
          onChange={this.props.handleInputChange}
          placeholder="age"
          value={this.props.age}
          name="age"
          required
        />
        <input
          onChange={this.props.handleInputChange}
          placeholder="height"
          value={this.props.height}
          name="height"
          required
        />
        <button type="submit">{this.props.isUpdating ? 'Update Smurf' : 'Add to the village'}</button>
      </StyledSmurfForm>
    );
  }
}

export default SmurfForm;
