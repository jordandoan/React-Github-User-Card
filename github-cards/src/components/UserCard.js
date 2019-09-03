import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        let { info } = this.props;
        return(
            <div className="user-card">
                <img src={this.props.info.avatar_url} alt="Avatar"/>
                <div className="description">
                    <p>Name: {info.name}</p>
                    <p>Username: {info.login}</p>
                    <p>Profile: <a href={info.html_url}>{info.html_url}</a></p>
                    <p>Location: {info.location ? info.location : "Unknown"}</p>
                </div>
                <div className="extra">
                    <span>Followers: {info.followers} </span>
                    <button>View Followers Data</button>
                </div>
            </div>
        )
    }
}

export default UserCard;