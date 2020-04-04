import React,{ Component } from "react"
import { Navbar, Nav } from 'react-bootstrap';
import {Switch, Route, Link } from 'react-router-dom';
import Login from "./login.component";
import Account from './views/User/Account'
import Complains from './views/User/Complains'
import Services from './views/User/Services'
import Transaction from './views/User/Transaction'

class DashBoard extends Component{
    render(){
        return(
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
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">Buiding Management System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <ul className="navbar-nav mr-auto">
                                    <li><Link to={'/account'} className="nav-link"> Account Info </Link></li>
                                    <li><Link to={'/complains'} className="nav-link">Post Reviews</Link></li>
                                    <li><Link to={'/services'} className="nav-link">Available Services</Link></li>
                                    <li><Link to={'/transaction'} className="nav-link">Pay Bill</Link></li>
                                </ul>
                            </Nav>
                            <Switch>
                                <Route exact path='/account' component={Account} />
                                <Route exact path ='/complains' component={Complains}/>
                                <Route exact path ='/services' component={Services}/>
                                <Route exact path ='/transaction' component={Transaction}/>
                            </Switch>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default DashBoard;