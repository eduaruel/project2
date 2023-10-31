const Express = require('express');
const router = Express.Router();
const homeCrontoller = require('../controllers/homeController.js');

module.exports = () => {
	router.get('/', homeCrontoller.mostrarTrabajos);

	return router;
};
