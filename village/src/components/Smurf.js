import React from 'react';
import styled from 'styled-components'

const SmurfCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  font-size: 1.8rem;
  background-color: white;
  border-radius: 500px;
  border: 1px solid black;
  padding: 15px;
  margin: 10px;
  button{
    width: 100px;
    margin: 4px auto;
    padding: 9px 0;
    color: white;
    border: 1px solid black;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: #0D4397;
    &:hover{
      background-color: black;
      transition: 0.4s;
      cursor: pointer
    }
  }
`

const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={e => props.deleteSmurf(e, props.id)}>Delete</button>
      <button onClick={e => props.initiateUpdate(e, props.id, props.name, props.height, props.age)}>Update</button>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

