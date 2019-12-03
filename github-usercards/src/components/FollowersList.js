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
`
const CardStyle = styled.div`
  border-radius: 7px;
  background-color: slategrey;
  text-align: center;
`
const ImageStyle = styled.img`
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`

function FollowersList(props) {
    return (
        <GridStyle>
            {props.followers.map(person => (
                <CardStyle key={person.id} className='followers'>
                    <ImageStyle src={person.avatar_url} alt='follower image' />
                    <h1>{person.login}</h1>
                    {/* <p>Profile: {person.html_url}</p> */}
                </CardStyle>
            ))}
        </GridStyle>
    )
}

export default FollowersList;