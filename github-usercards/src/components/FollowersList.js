import React from 'react';
import styled from 'styled-components';

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  margin: 0 2rem;
//   background-color: #C8DD5D;
`
const ImageStyle = styled.img`
  width: 100%;
`

function FollowersList(props) {
    return (
        <GridStyle>
            {props.followers.map(person => (
                <div key={person.id} className='followers'>
                    <ImageStyle src={person.avatar_url} alt='follower image' />
                    <h1>{person.login}</h1>
                    <p>Profile: {person.html_url}</p>
                </div>
            ))}
        </GridStyle>
    )
}

export default FollowersList;