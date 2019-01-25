import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  a{
    color: black;
    text-decoration: none;
  }
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfContainer>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurf/${smurf.id}`}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteSmurf={this.props.deleteSmurf}
                  initiateUpdate={this.props.initiateUpdate}
                />
              </Link>
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
