const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE)
	.then(() => {
		console.log('Conectado a MongoDB');
	})
	.catch((error) => {
		console.log(`fallo la conexion${error}`);
	});

mongoose.connection.on('error', (error) => {
	console.log(error);
});

//modelo
require('../models/Vacantes');
