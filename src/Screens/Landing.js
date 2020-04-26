import React, { Component } from 'react';

import './Landing.css';
// import './Global.js';
// import './Countries.js';

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
            <div>
                <Router>
                        <div>
                            <div style={{ width: 250 }}>
                                <Sidenav appearance="inverse">
                                    <Sidenav.Body>
                                        <Nav>
                                            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                                                <Link to="/global">Global</Link>
                                            </Nav.Item>
                                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                            <   Link to="/countries">Countries</Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Sidenav.Body>
                                </Sidenav>
                            </div>
                            <Switch>
                                <Route path="/global">
                                    <Global />
                                </Route>
                                <Route path="/countries">
                                    <Countries />
                                </Route>
                            </Switch>
                        </div>
                </Router>
                <div>

                </div>
            </div>
        );
    }
}

function Global() {
    // return <Global />;
    return <h2>Home</h2>;
}
  
function Countries() {
    // return <Countries />;
    return <h2>Something</h2>;
}

export default Landing;