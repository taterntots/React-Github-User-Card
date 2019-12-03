import React from 'react';

function UserCard(props) {
    return (
        <div>
            <h1>{props.user.login}</h1>
            <p>{props.user.name}</p>
            <p>{props.user.followers}</p>
            <p>{props.user.following}</p>
            <p>{props.user.bio}</p>
        </div>
    )
}

export default UserCard;