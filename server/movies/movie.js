// doing REST API requests here 
const express = require('express');
const movieRouter = express.Router();
const {movieForm} = require('./movieController');

movieRouter.post('/movieForm',movieForm)
module.exports = {movieRouter}