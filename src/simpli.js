const nombre = 'Jorge';
const edad = 20;
const twitter = 'https://twitter.com/jgcarrillo_';

/*
const persona = {
	nombre: nombre,
	edad: edad,
	twitter: twitter,
};
*/

// Si la clave se llama igual que la variable que se ha]
// declarado, entonces se puede simplificar:
const persona = {
	nombre,
	edad,
	twitter,
	getNombre() {
		console.log(this.nombre);
	},
};

console.log(persona);
persona.getNombre();
