const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');

exports.formularioNuevaVacante = (req, res) => {
	res.render('nueva-vacante', {
		nombrePagina: 'Registrar Vacantes',
		tagline: 'completa el formulario y publica tu vacante',
		boton: false,
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

//mostrar nueva Vacante
exports.mostrarVacante = async (req, res, next) => {
    const vacante = await Vacante.findOne({ url: req.params.url });
    // si no hay resultados
    if(!vacante) return next();

    res.render('vacante', {
        vacante,
        nombrePagina: vacante.titulo,
        boton:false
    })
}

//editar Vacante

exports.formEditarVacante = async (req, res, next) => {
	const vacante = await Vacante.findOne({url: req.params.url})

	if(!vacante) return next()

	res.render('editar-vacante',{
		vacante,
		nombrePagina: `Editar-${vacante.titulo}`,
		barra: false
	})
}


