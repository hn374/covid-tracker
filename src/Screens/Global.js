// External libraries
import React, { Component } from 'react';
import axios from 'axios';

// Internal files
import './Global.css';
import GlobalData from '../components/globalData.js';

class Global extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newCases: 0,
            totalCases: 0,
            newDeaths: 0,
            totalDeaths: 0,
            newRecovered: 0,
            totalRecovered: 0
        };
    }

    componentDidMount() {
        this.getDisplayData();
    }

    getDisplayData() {
        axios.get('http://localhost:3400/getGlobalData').then(res => {
            console.log(res);
        });
    }

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