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
`

const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

