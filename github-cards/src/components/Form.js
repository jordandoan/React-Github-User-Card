import React, { Component } from 'react';

class Form extends Component {
    render() {
        return(
            <div>
                <h2>Search Form</h2>
                <input type="text" placeholder="user" onChange={this.props.handleChange} value={this.props.user}/>
                <button onClick={(event) => this.props.handleSubmit(event)}>Search User</button>
            </div>
        )
    }
}

export default Form;