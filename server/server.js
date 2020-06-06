const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const path = require('path');

const app = express();
// const port = process.env.PORT || 3400;
const port = 3400;

app.listen(port, () => console.log(`APP LISTENING AT http://localhost:${port}`))

// Serve the static files from the React app
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(cors());

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + 'landing.js')); // Have to fix link
    res.send("Hello World");
});

app.get('/getGlobalData', (req, res) => {
    axios.get('https://api.covid19api.com/summary')
    .then(data => {
        res.send(data.data.Global);
    })
    .catch(error => {
        console.log(error);
    });
});

app.get('/getCountries', (req, res) => {
    axios.get('https://api.covid19api.com/countries')
    .then(data => {
        countries = [];

        for (country in data.data) {
            countryObject = {};
            countryObject["label"] = data.data[country].Country;
            countryObject["value"] = data.data[country].Country;
            
            countries.push(countryObject);

            // countries.push(data.data[country].Country);
        }

        res.send(countries)
    })
    .catch(error => {
        console.log(error);
    });
});