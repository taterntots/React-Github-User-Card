import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/taterntots')
    .then(response => {
      console.log(response.data);
      this.setState({ user: response.data.login });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>gitHub UserCards</h1>
        </header>
      </div>
    );
  }
}

export default App;