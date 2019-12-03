import React from 'react';

function FollowersList(props) {
    return (
        <div>
            {props.followers.map(person => (
                <div key={person.id} className='followers'>
                    <img src={person.avatar_url} alt='follower image' />
                    <h1>{person.login}</h1>
                    <p>Profile: {person.html_url}</p>
                </div>
            ))}
        </div>
    )
}

export default FollowersList;