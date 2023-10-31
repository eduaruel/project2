exports.mostrarTrabajos = (req, res) => {
	res.render('home', {
		nombrePagina: 'SG Venezuela',
		tagline: 'Publica y Encuantra tú Trabajo',
		barra: true,
		boton: true,
	});
};
