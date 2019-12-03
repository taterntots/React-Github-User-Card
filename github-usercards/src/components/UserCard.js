import React from 'react';
import styled from 'styled-components';

const UserStyling = styled.div`
    margin-bottom: 3%;
`

function UserCard(props) {
    return (
        <UserStyling>
            <img src={props.user.avatar_url} alt='user image' />
            <h1>{props.user.login}</h1>
            <p>{props.user.name}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>{props.user.bio}</p>
        </UserStyling>
    )
}

export default UserCard;