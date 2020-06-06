import React, { Component } from 'react';
import GlobalData from '../components/globalData.js';
// import { formatNumber } from '../services/Number.js';
import { SelectPicker } from 'rsuite';
import './Countries.css';
import axios from '../utils/axios';

class Countries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            selectedCountry: "",
        };
    }

    componentDidMount() {
        this.getCountries();
        console.log();
    }

    getCountries() {
        axios.get('/getCountries').then(res => {
            this.setState({
                countries: res.data,
                // selectedCountry: this.state.selectedCountry,
            });
        })
        .catch(function (error) {
            console.log("Axios request failed with following error: ", error);
        });
    }

    countrySelected(country) {
        this.setState({
            selectedCountry: country
        });
    }

    render() {
        return(
            <div>
                <h2 className="header">Countries</h2>
                <div className="pickerContainer">
                    <h2 className="pickerHeading">SELECT A COUNTRY: </h2>
                    <SelectPicker className="selectPicker" data={ this.state.countries } 
                    onChange={(value, event) => this.countrySelected(value)}/>
                </div>
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

export default Countries;