const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');


app.use(express.json()); // middle ware to parse json requests
app.use(cors()); //
app.use(bodyParser.json()); //

app.use(express.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 1000000
}))

app.listen(port,() =>{
    console.log(`Server is running at http://localhost:${port}`);
});