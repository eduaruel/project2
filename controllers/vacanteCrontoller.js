exports.formularioNuevaVacante = (req, res) => {
	res.render('nueva-vacante', {
		nombrePagina: 'Vacantes Disponibles',
		tagline: 'completa el formulario y publica tu vacante',
	});
};
