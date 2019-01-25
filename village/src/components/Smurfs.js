import React, { Component } from 'react';
import styled from 'styled-components'

import Smurf from './Smurf';

const SmurfContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 65%;
  text-align: center;
  margin: 0 auto;
  h1{
    font-size: 2.5rem;
  }
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfContainer>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                initiateUpdate={this.props.initiateUpdate}
              />
            );
          })}
      </SmurfContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
