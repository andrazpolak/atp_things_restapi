'use strict'
// imports

require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const appInfo = require('./package.json');
const port = process.env.PORT || 11021;


const config = require('config');// define process.env.NODE_CONFIG_DIR
const module_cfg = JSON.parse(JSON.stringify(config.get("module")));

const getAtpThings = require('./routes/atp_things');

console.log("Api:", "Started. Env:", process.env.NODE_ENV);

const app = express();

app.use(express.json());
app.use(cors());


app.get('/info', (req, res) => {
    const response = {};
    response.data = {
        name: appInfo.name,
        versions: appInfo.version,
        uuid: appInfo.atp_things.uuid,
        env: process.env.NODE_ENV
    };
    res.json(response)
})

// Rest api service
app.get('/atp_things/', getAtpThings.atp_things_list);
app.get('/atp_things/:uuid/', getAtpThings.atp_things_get);
app.get('/atp_things/:uuid/:property', getAtpThings.atp_things_get);
app.listen(port, () => console.log('Listening on port ', port))

// TODO: Web socket

console.log("Api:", "End");