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
      info: [dummyData],
      searched: false,
      followers: false
    };
  }

  // componentDidMount() {
  //   const fetchData = () => {
  //     axios.get(this.state.baseURL)
  //     .then((res) => {
            // let newInfo = this.state.info;
            // newInfo.push(res.data);
            // this.setState({info: newInfo})
  //     })
  //     .catch((err) => console.log(err));
  //   }
  //   this.setState({baseURL:this.state.baseURL+this.state.user}, fetchData);
  // }
  componentDidUpdate() {
    if (this.state.searched) {

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
      }
    );
  }

  handleSubmit = () => {
  }

  render() {
    return (
      <div className="App">
        <Intro/>
        <div className="user-container">
          {this.state.info.map(user =>
            <UserCard info={user} handleFollowers={this.handleFollowers}/>
          )}
        </div>
        <Form/>

      </div>
    );
  }
}

export default App;
