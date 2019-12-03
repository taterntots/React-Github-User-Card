import React from 'react';

function UserCard(props) {
    return (
        <div>
            <img src={props.user.avatar_url} alt='user image' />
            <h1>{props.user.login}</h1>
            <p>{props.user.name}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>{props.user.bio}</p>
        </div>
    )
}

export default UserCard;