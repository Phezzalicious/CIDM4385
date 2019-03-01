
import React, { Component } from 'react';
class PasswordInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {
            password: ''
        }
        this.onPassChange = this.onPassChange.bind(this);

    }
    onPassChange(event) {
        var password = event.target.value;

        //this is lifting the state value to the parent
        this.props.onPassInputChange(password);

        this.setState( () => {
                return {
                    password
                }
            }
        );
    };

    render() {
        return (
            <div className="form-group">
            <p>Test message: {this.props.test}</p>
            <label htmlFor="exampleInputPass1">Password</label>
            <input 
                aria-describedby="passHelp" 
                className="form-control" 
                id="exampleInputPass1" 
                onChange={this.onPassChange}
                placeholder="Enter Password"
                type="password"
                value={this.state.password}  />
        </div>
        );
    };
}

