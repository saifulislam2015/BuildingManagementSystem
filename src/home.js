import React,{ Component} from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import Login from './login.component';
import Residents from './views/Admin/Residents'
import Approvals from './views/Admin/Approvals'
import Blocks from './views/Admin/Blocks'

class home extends Component {

  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  

  handleClick(e) {
    this.setState({redirect: true});
  }

  componentDidMount(){
    //API calls
  }

  render() {
    return (

      <div>
        {this.state.redirect?
        <div>
          <Login/>
        </div>:
        <div>

          <div>
            <div align="right">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Link to={'/signin'}>Log Out</Link>
                      <Switch>
                        <Route exact path='/signin' component={Login}/>
                      </Switch>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                  <li><Link to={'/residents'} className="nav-link"> Residents </Link></li>
                  <li><Link to={'/requests'} className="nav-link">Approvals </Link></li>
                  <li><Link to={'/blockinfo'} className="nav-link">Blocks </Link></li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
              </ul>
            </nav>
            <Switch>
                <Route exact path='/residents' component={Residents} />
                <Route exact path ='/requests' component={Approvals}/>
                <Route exact path ='/blockinfo' component={Blocks}/>
            </Switch>
            </div>
          </div>

        </div>

        }
      </div>

      );
  }
}

export default home;
