import React, { Component } from 'react';

import './Landing.css';
import Global from './Global.js';
import Countries from './Countries.js';

// External libraries
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Sidenav, Nav, Icon } from 'rsuite';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                        <div className="flex-container">
                            <div className="sidebar">
                                <Sidenav>
                                    <Sidenav.Body>
                                        <Nav>
                                            <Nav.Item href="/" eventKey="1" icon={<Icon icon="home" />}>
                                                Home
                                            </Nav.Item>
                                            <Nav.Item href="/global" eventKey="2" icon={<Icon icon="dashboard" />}>
                                                Global
                                            </Nav.Item>
                                            <Nav.Item href="/countries" eventKey="3" icon={<Icon icon="group" />}>
                                                Countries
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