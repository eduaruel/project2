const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

mongoose.createConnection(process.env.DATABASE);

mongoose.connection.on('error', (error) => {
	console.log(error);
});

//modelo
require('../models/Vacantes.js');
