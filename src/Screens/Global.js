import React, { Component } from 'react';
import './Global.css';
import GlobalData from '../components/globalData.js';

class Global extends Component {
    render() {
        return(
            <div>
                <h2 className="header">Global</h2>
                <GlobalData title="New Confirmed Cases:"/>
                <GlobalData title="Total Confirmed Cases:"/>
                <GlobalData title="New Deaths:"/>
                <GlobalData title="Total Deaths:"/>
                <GlobalData title="New Recovered:"/>
                <GlobalData title="Total Recovered:"/>
            </div>
        );
    }
}

export default Global;