module.exports = {
	seleccionarSkills: (seleccionada = [], opciones) => {
		console.log(seleccionada)

		const skills = [
			'Seguridad',
			'Programador',
			'Profesor',
			'atencion al cliente',
			'promotores',
			'ingeniero sofware',
			'ingeniero civil',
			'ingeniero electricista',
			'ingeniero mecanico',
			'ingeniero electronico',
			'ingeniero quimico',
		];

		let html = '';
		skills.forEach((skill) => {
			html += `
                <li ${seleccionada.includes(skill) ? 'class="activo"' :''}>${skill}</li>
            `;
		});
		return (opciones.fn().html = html);
	},

	tipoContrato: (seleccionado, opciones)=> {
	 	return opciones.fn(this).replace(
			new RegExp(`value="${seleccionado}"`), '$& selected="selected"'
			
		)
	}
};




 
