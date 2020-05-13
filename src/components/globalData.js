import React, { Component } from 'react';
import './globalData.css';

class GlobalData extends Component {
    render() {
        return(
            <div className="globalDataContainer">
                <h2 className="globalDataHeader">{ this.props.title }</h2>
                <div className="displayData">{ this.props.data }</div>
            </div>
        );
    }
}

export default GlobalData;