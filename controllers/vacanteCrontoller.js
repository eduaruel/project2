const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');

exports.formularioNuevaVacante = (req, res) => {
	res.render('nueva-vacante', {
		nombrePagina: 'Registrar Vacantes',
		tagline: 'completa el formulario y publica tu vacante',
	});
};

//agregar vacantes a la base de datos
exports.agregarVacante = (req, res) => {
	const vacante = new Vacante(req.body);
	//console.log(req.body);

	//crear arreglo de skills
	vacante.skills = req.body.skills.split(',');
	console.log(vacante);
};
