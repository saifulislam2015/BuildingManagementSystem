import React,{ Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Init from './Init';
import Home from './home';
import SignUp from './signup.component';
import DashBoard from './DashBoard';
import Residents from './views/Admin/Residents'
import Approvals from './views/Admin/Approvals'
import Blocks from './views/Admin/Blocks'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedInStatus: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    //console.log("Inside handleLogout");
    this.setState({
      loggedInStatus: false,
      user: {}
    });
  }

  handleLogin() {
    this.setState({
      loggedInStatus: true
    }); 
  }


  componentWillUnmount(){
    
  }
  render() {    
    return (
      <div className="App">
        <Router basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <Switch>
            <Route exact path={"/signin"}
              render={props => (
                <Init
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route exact path={"/home"}
              render={props => (
                <Home
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogout = {this.handleLogout}
                />
              )}
            />

            <Route exact path={"/residents"}
              render = { props=>(
                <Residents/>
              )}
            />

            <Route exact path={"/requests"}
              render = { props=>(
                <Approvals/>
              )}
            />

            <Route exact path={"/blockinfo"}
              render = { props=>(
                <Blocks/>
              )}
            />


            <Route exact path={"/dashboard"}
              render={props => (
                <DashBoard/>
              )}
            />

`           <Route exact path={"/signup"}
              render={props => (
                <SignUp
                  {...props}
                />
              )}
            />

          </Switch>
          
        </Router>
      </div>

      );
  }
}

export default App;
