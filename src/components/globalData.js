import React, { Component } from 'react';
import './globalData.css';

class GlobalData extends Component {
    constructor(props) {
        super(props);
        // const [data, setData] = useState(""); might have to put outside of constructor
    }

    // getDisplayData() {
    //     // Get data from API using Axios
    // }

    render() {
        return(
            <div>
                <h2 className="header">{ this.props.title }</h2>
                <div className="displayData">Data</div>
                {/* <div>{ data }</div> */}
            </div>
        );
    }
}

export default GlobalData;