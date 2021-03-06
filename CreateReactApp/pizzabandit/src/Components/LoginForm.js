
import React, { Component } from 'react';
import * as EmailInput from './EmailInput';
import * as PasswordInput from './PasswordInput';
class LoginForm extends React.Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: '',
            results: '',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    //handler for data from child component
    onEmailChange(email){
        
        console.log("From the child: " + email);

        this.setState( () => {
                return {
                    email
                };
            }
        );

        console.log("From the parent state: " + this.state.email);
    }

    onSubmit(event){

        event.preventDefault();

        const results = "Email address is: " + this.state.email;

        this.setState( () => {
                return {
                    results
                };
            }
        );

        //this is also lifting state to the parent
        this.props.onFormSubmit(results);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} 
                                test="dubs" />
                    <PasswordInput onPassInputChange={this.onPassChange}/>
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>            
        );
    };
}
