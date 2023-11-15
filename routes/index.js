const Express = require('express');
const router = Express.Router();
const homeController = require('../controllers/homeController.js');
const vacantesController = require('../controllers/vacanteCrontoller.js');

module.exports = () => {
	  router.get('/', homeController.mostrarTrabajos);

    // Crear Vacantes
    router.get('/vacantes/nueva',vacantesController.formularioNuevaVacante );

    router.post('/vacantes/nueva',vacantesController.agregarVacante );

    // Mostrar Vacante (singular)
    router.get('/vacantes/:url',vacantesController.mostrarVacante );

    // Editar Vacante
    router.get('/vacantes/editar/:url',vacantesController.formEditarVacante);

	return router;
};
