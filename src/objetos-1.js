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
	'ultima-pelicula': 'Infinity War', // Caracteres especiales
};

// Acceso a las propiedades
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);

console.log('Número trajes:', personaje.trajes.length);
console.log('Último traje', personaje.trajes[personaje.trajes.length - 1]);

// En este caso el acceso solo se puede hacer así
console.log('Última película', personaje['ultima-pelicula']);
