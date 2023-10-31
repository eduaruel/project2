const Express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routerr = require('./routes');

const app = Express();

//hablitar handlebar como view
app.engine(
	'handlebars',
	exphbs.engine({
		defaultLayout: 'layout',
	}),
);
app.set('view engine', 'handlebars');

app.use(Express.static(path.join(__dirname, 'public')));
app.use('/', routerr());

const port = 4000;

app.listen(port, console.log('Servidor Arriba'));
