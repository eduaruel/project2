document.addEventListener('DOMContentLoaded', () => {
	const skills = document.querySelector('.lista-conocimientos');
	if (skills) {
		skills.addEventListener('click', agregarSkills);
	}
});

const agregarSkills = (e) => {
	console.log(e.target);
};
