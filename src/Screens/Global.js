// External libraries
import React, { Component } from 'react';
import axios from '../utils/axios';

// Internal files
import './Global.css';
import GlobalData from '../components/globalData.js';
import { formatNumber } from '../services/Number.js';

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
        axios.get('/getGlobalData').then(res => {
            this.setState({
                newCases: formatNumber(res.data.NewConfirmed),
                totalCases: formatNumber(res.data.TotalConfirmed),
                newDeaths: formatNumber(res.data.NewDeaths),
                totalDeaths: formatNumber(res.data.TotalDeaths),
                newRecovered: formatNumber(res.data.NewRecovered),
                totalRecovered: formatNumber(res.data.TotalRecovered)
            });
        })
        .catch(function (error) {
            console.log("Axios request failed with following error: ", error);
        });
    }

    render() {
        return(
            <div>
                <h2 className="header">Global Cases</h2>
                <div className="container">
                    <GlobalData className="globalDataComponent" title="New Confirmed Cases:" data={ this.state.newCases }/>
                    <GlobalData className="globalDataComponent" title="New Deaths:" data={ this.state.newDeaths }/>
                    <GlobalData className="globalDataComponent" title="New Recovered:" data={ this.state.newRecovered }/>
                    <GlobalData className="globalDataComponent" title="Total Confirmed Cases:" data={ this.state.totalCases }/>
                    <GlobalData className="globalDataComponent" title="Total Deaths:" data={ this.state.totalDeaths }/>
                    <GlobalData className="globalDataComponent" title="Total Recovered:" data={ this.state.totalRecovered }/>
                </div>
            </div>
        );
    }
}

export default Global;