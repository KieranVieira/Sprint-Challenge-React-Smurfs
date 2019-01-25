import React from 'react'
import styled from 'styled-components';

import Smurf from './Smurf'

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

const SingleSmurf = (props) => {

    const smurf = props.smurfs.find(smurf => smurf.id == props.match.params.id)
    console.log(smurf)
    return(
        <SmurfContainer>
        {smurf ? 
        <Smurf 
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            deleteSmurf={props.deleteSmurf}
            initiateUpdate={props.initiateUpdate}
        /> : <h1>Loading...</h1>}
        </SmurfContainer>
    )
}

export default SingleSmurf