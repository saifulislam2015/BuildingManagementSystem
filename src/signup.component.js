import React, { Component } from "react";
import {Switch, Route, Link } from 'react-router-dom';
import Login from "./login.component";

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname : "",
            email: "",
            password: ""
          };
          this.fNameChange = this.fNameChange.bind(this);
          this.lNameChange = this.lNameChange.bind(this);
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.pwdChange = this.pwdChange.bind(this);
          this.submitclick = this.submitclick.bind(this);
    }


    fNameChange(event) {
        this.setState({
          firstname: event.target.value,
        });
    }

    lNameChange(event) {
        this.setState({
          lastname: event.target.value,
        });
    }

    handleEmailChange(event) {
        this.setState({
          email: event.target.value,
        });
    }

    pwdChange(event) {
        this.setState({
            password: event.target.value,
        });
    }

    submitclick(event){
        //console.log(this.state.lastname);
        //API
        this.props.history.push("/signin");
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={this.fNameChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={this.lNameChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleEmailChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.pwdChange}/>
                </div>

                <button type="submit" onClick={this.submitclick} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                     {/* <a href="/">sign in?</a> */}
                    <div align="right">
                        <Link to={'/signin'} className="nav-link">Sign In? </Link>
                    </div>
                    <Switch>
                        <Route exact path='/signin' component={Login} />
                    </Switch>
                </p>
            </form>
        );
    }
}

export default SignUp;