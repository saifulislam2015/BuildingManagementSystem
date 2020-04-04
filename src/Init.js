import React, { Component } from "react";
import Login from "./login.component";
import Home from "./home"

class Init extends Component{
    constructor(props) {
        super(props);
        this.state = {
          binary : false
        }
        this.state.binary = this.props.loggedInStatus;
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
      }
    
      handleSuccessfulAuth(isAdmin) {
        //console.log("Inside handleSuccessfulAuth");
        this.props.handleLogin();
        if(isAdmin) this.props.history.push("/home");
        else this.props.history.push("/dashboard");
      }

      handleLogOut(){
        this.props.handleLogout();
        this.props.history.push("/signin");
      }
    
      
    
      render() {
        return (
          <div>
            {!this.state.binary?
            <div>
              <Login handleSuccessfulAuth={this.handleSuccessfulAuth} binary={this.state.binary} handleLogOut={this.handleLogOut}/>
          </div>:
            <div>
              <Login handleSuccessfulAuth={this.handleSuccessfulAuth} binary={!this.state.binary} handleLogOut={this.handleLogOut}/>
            </div>
        }
          </div>
        );
      }
}
export default Init;