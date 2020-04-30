// External libraries
import React, { Component } from 'react';
import axios from '../utils/axios';

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
        axios.get('/getGlobalData').then(res => {
            this.setState({
                newCases: res.data.NewConfirmed,
                totalCases: res.data.TotalConfirmed,
                newDeaths: res.data.NewDeaths,
                totalDeaths: res.data.TotalDeaths,
                newRecovered: res.data.NewRecovered,
                totalRecovered: res.data.TotalRecovered
            });
        })
        .catch(function (error) {
            console.log("Axios request failed with following error: ", error);
        });
    }

    render() {
        return(
            <div>
                <h2 className="header">Global</h2>
                <GlobalData title="New Confirmed Cases:" data={ this.state.newCases }/>
                <GlobalData title="Total Confirmed Cases:" data={ this.state.totalCases }/>
                <GlobalData title="New Deaths:" data={ this.state.newDeaths }/>
                <GlobalData title="Total Deaths:" data={ this.state.totalDeaths }/>
                <GlobalData title="New Recovered:" data={ this.state.newRecovered }/>
                <GlobalData title="Total Recovered:" data={ this.state.totalRecovered }/>
            </div>
        );
    }
}

export default Global;