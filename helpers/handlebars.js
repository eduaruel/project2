module.exports = {
	seleccionarSkills: (seleccionada = [], opciones) => {
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
		];

		let html = '';
		skills.forEach((skills) => {
			html += `
                <li>${skills}</li>
            `;
		});
		return (opciones.fn().html = html);
	},
};
