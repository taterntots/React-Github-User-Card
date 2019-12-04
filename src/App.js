import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersList from './components/FollowersList';
import SearchForm from './components/SearchForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      searchText: ""
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      console.log('new user state');
      // axios.get(`https://api.github.com/users/wsu718`).then(response => {
      //   this.setState({
      //     user: response.data
      //   });
      // });
    }
  }

  handleChanges = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  fetchUser = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.searchText}`)
    .then(response => {
      this.setState({ user: response.data })
    })
    axios.get(`https://api.github.com/users/${this.state.searchText}/followers`)
    .then(response => {
      this.setState({ followers: response.data })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserCard user={this.state.user} />
        </header>
        <section>
          <SearchForm fetchUser={this.fetchUser} handleChanges={this.handleChanges} searchText={this.state.searchText} />
          <FollowersList followers={this.state.followers} />
        </section>
      </div>
    );
  }
}

export default App;