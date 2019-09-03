import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        let { info } = this.props;
        console.log(info);
        return(
            <div className="user-card">
                <img src={this.props.info.avatar_url} alt="Avatar"/>
                <div className="description">
                    <p>Name: {info.name ? info.name : "Unknown"}</p>
                    <p>Username: {info.login}</p>
                    <p>Profile: <a href={info.html_url}>{info.html_url}</a></p>
                    <p>Location: {info.location ? info.location : "Unknown"}</p>
                    <span>Followers: {info.followers} </span>
                    <button onClick={() => {this.props.handleFollowers(info)}}>View Followers Data</button>
                </div>
            </div>
        )
    }
}

export default UserCard;