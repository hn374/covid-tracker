import React, { Component } from 'react';
import GlobalData from '../components/globalData.js';

class Global extends Component {
    render() {
        return(
            <div className="header">
                <h2>Global</h2>
                <GlobalData />
            </div>
        );
    }
}

export default Global;