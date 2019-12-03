import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
    display: flex;
    margin-bottom: 2rem;
`
const TextStyling = styled.div`
    width: 50%;
    text-align: center;
    background-color: slategrey;
    font-size: 1.6rem;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 2%;
`
const blerg = styled.div`
    text-align: center;
`
const ImageStyle = styled.img`
    width: 50%;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`

function UserCard(props) {
    return (
        <UserContainer>
            <ImageStyle src={props.user.avatar_url} alt='user image' />
            <TextStyling>
                <h1>{props.user.login}</h1>
                <p>{props.user.name}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
                <p>{props.user.bio}</p>
            </TextStyling>
        </UserContainer>
    )
}

export default UserCard;