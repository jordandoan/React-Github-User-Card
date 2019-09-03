import React, { Component } from 'react';
import axios from 'axios';

import Intro from './components/Intro';
import UserCard from './components/UserCard';
import Form from './components/Form';
import { dummyData } from "./components/dummyData";
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "johnoro",
      baseURL: "https://api.github.com/users/",
      info: [],
      searched: false,
      followers: false
    };
  }

  componentDidMount() {
    const fetchData = () => {
      axios.get(this.state.baseURL)
      .then((res) => {
            let newInfo = this.state.info;
            newInfo.push(res.data);
            this.setState({user:"", info: newInfo})
      })
      .catch((err) => console.log(err));
    }
    this.setState({baseURL:this.state.baseURL+this.state.user}, fetchData);
  }
  
  componentDidUpdate() {
    if (this.state.searched) {
      this.setState({searched:false});
      axios.get(this.state.baseURL)
      .then(res => {
        this.setState({
          searched:false,
          info: [res.data]
        })
      })
    }
    if (this.state.followers) {
      axios.get(this.state.baseURL)
        .then(res => {
          this.setState({
            followers:false,
            info: res.data
          })
        })
    }
  }

  handleFollowers = (user) => {
    this.setState(
      {
        baseURL: user.followers_url,
        followers:true,
        search:false,
      }
    );
  }

  handleSubmit = (event) => {
    this.setState({
      user:"",
      baseURL: "https://api.github.com/users/" + this.state.user,
      searched:true,
      followers:false,
    }, () => {console.log(this.state)});
  }
  handleChange = (event) => {
    this.setState({user: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <Intro/>
        <main>
          <div className="user-container">
            {this.state.info.map(user =>
              <UserCard info={user} handleFollowers={this.handleFollowers}/>
            )}
          </div>
          <Form user={this.state.user} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </main>
      </div>
    );
  }
}

export default App;
