import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersList from './components/FollowersList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/taterntots')
    .then(response => {
      console.log(response);
      this.setState({ user: response.data });
    })
    axios.get('https://api.github.com/users/taterntots/followers')
    .then(response => {
      console.log(response);
      this.setState({ followers: response.data });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>gitHub Project</h1>
         <UserCard user={this.state.user} />
         <FollowersList followers={this.state.followers} />

        </header>
      </div>
    );
  }
}

export default App;