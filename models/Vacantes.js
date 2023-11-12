const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const nanoid = mongoose.plugin(require('mongoose-nanoid'), {
	length: (size = 10),
	alphabets: 'abcdefghijklmnopqrstuvwxyz1234567890',
});

//console.log(nanoid); //11936695 // ObjectId: [class ObjectId extends BSONValue] { index: 14056036 },

const vacanteSchema = new mongoose.Schema({
	titulo: {
		type: String,
		require: 'El nombre de la vacante es obligatorio',
		trim: true,
	},
	empresa: {
		type: String,
		trim: true,
	},
	ubicacion: {
		type: String,
		trim: true,
		require: 'La ubicacion es obligatoria',
	},
	salario: {
		type: Number,
		default: 0,
	},
	contrato: {
		type: String,
		trim: true,
	},
	descripcion: {
		type: String,
		trim: true,
	},
	URL: {
		type: String,
		lowercase: true,
	},
	skills: [String],
	candidatos: [
		{
			nombre: String,
			email: String,
			cv: String,
		},
	],
});
vacanteSchema.pre('save', (next) => {
	//create URL
	const url = slug(this.titulo);
	this.url = `${url}-${nanoid.ObjectId.index} `;

	next();
});

module.exports = mongoose.model('Vacante', vacanteSchema);
