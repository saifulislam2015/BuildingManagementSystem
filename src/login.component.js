import React, { Component } from "react";
import Home from "./home";
import SignUp from "./signup.component";
import {Switch, Route, Link } from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            redirect : false,
            admin : false,
            email: "",
            password: "",
            items: []
          };
          this._onButtonClick = this._onButtonClick.bind(this);
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.pwdChange = this.pwdChange.bind(this);
          this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
          email: event.target.value,
        });
        if( event.target.value =='admin'){
            console.log(event.target.value == 'admin');
            this.setState({
                admin : true
            })
        }
    }

    pwdChange(event) {
        this.setState({
            password: event.target.value,
        });
    }

    _onButtonClick(event) {
        //API call for User Authentication
        //console.log( this.state.email==='admin');
        this.props.handleSuccessfulAuth(this.state.admin);
        event.preventDefault();
    }

    handleLogOut(){
        this.props.handleLogOut();
    }

    

    render() {
        return (
            <div>
                { this.props.binary ? <div><Home/></div>:
                    (
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter User Name" onChange={this.handleEmailChange}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={this.pwdChange} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={this._onButtonClick} >
                            Submit
                        </button>  
                                
                        <p className="forgot-password text-right">
                            <div align="right">
                                <Link to={'/signup'} className="nav-link">Sign Up? </Link>
                            </div>
                            <Switch>
                                <Route exact path='/signup' component={SignUp} />
                            </Switch>
                        </p>

                    </form>)
                }  
            </div>
        );
    }
}

export default Login;
