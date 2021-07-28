// Creacion del objeto
let personaje = {
	nombre: 'Tony Stark',
	codeName: 'Ironman',
	vivo: false,
	edad: 40,
	coords: {
		lat: 23.33,
		lng: -120.0,
	},
	trajes: ['Mark I', 'Mark V'],
	direccion: {
		zip: '121212',
		ubicacion: 'Malibu California',
	},
	'ultima-pelicula': 'Infinity War',
};

// Borrar propiedad
delete personaje.edad;

// Sacar array por valores
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Congelar objeto
// Solo congela el objeto general, pero no los objetos que tenga dentro
Object.freeze(personaje);

// Array con propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

// Array con valores
const valores = Object.values(personaje);
console.log(valores);
