const express = require('express');
const app = express();
const port = process.env.PORT || 3400;

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/landing.js'));
});