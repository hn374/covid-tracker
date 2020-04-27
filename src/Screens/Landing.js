import React, { Component } from 'react';

import './Landing.css';
import Global from './Global.js';
import Countries from './Countries.js';

// External libraries
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Sidenav, Nav, Icon } from 'rsuite';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                        <div>
                            <div className="sidebar">
                                <Sidenav appearance="inverse">
                                    <Sidenav.Body>
                                        <Nav>
                                            <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                                                <Link to="/">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item eventKey="2" icon={<Icon icon="dashboard" />}>
                                                <Link to="/global">Global</Link>
                                            </Nav.Item>
                                            <Nav.Item eventKey="3" icon={<Icon icon="group" />}>
                                                <Link to="/countries">Countries</Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Sidenav.Body>
                                </Sidenav>
                            </div>
                            <div className="pages">
                                <Switch>
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route path="/global" component={ Global } />
                                    <Route path="/countries" component={ Countries } />
                                </Switch>
                            </div>
                        </div>
                </Router>
                <div>

                </div>
            </div>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

export default Landing;