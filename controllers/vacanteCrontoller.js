const mongoose = require('mongoose');
const Vacante = require('../models/Vacantes');

exports.formularioNuevaVacante = (req, res) => {
	res.render('nueva-vacante', {
		nombrePagina: 'Registrar Vacantes',
		tagline: 'completa el formulario y publica tu vacante',
	});
};

//agregar vacantes a la base de datos
exports.agregarVacante = async (req, res) => {
	const vacante = new Vacante(req.body);
	//console.log(req.body);

	// crear arreglo de skills
	vacante.skills = req.body.skills.split(',');
	//console.log(vacante);

	// nueva Vacante en la parte de almacenamiento de la base de dato
	const nuevaVacante = await vacante.save();
	//console.log(nuevaVacante);

	// redireccinamiento
	res.redirect(`/vacantes/${nuevaVacante.url}`);
};
