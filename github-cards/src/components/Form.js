import React, { Component } from 'react';

class Form extends Component {
    render() {
        return(
            <div className="form">
                <h2>Search Form</h2>
                <input type="text" placeholder="user" onChange={this.props.handleChange} value={this.props.user}/><br/>
                <button onClick={(event) => this.props.handleSubmit(event)}>Search User</button>
            </div>
        )
    }
}

export default Form;