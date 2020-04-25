import React, { Component } from 'react';
import './Landing.css';
import { Sidenav, Nav, Icon } from 'rsuite';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: 250 }}>
                <Sidenav>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                                Group
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
        );
    }
}

export default Landing;