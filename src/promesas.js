const heroes = {
	capi: {
		nombre: 'Capitán América',
		poder: 'Aguantar inyecciones sin morir',
	},
	iron: {
		nombre: 'Ironman',
		poder: 'Absurda cantidad de dinero',
	},
	spider: {
		nombre: 'Spiderman',
		poder: 'La mejor reacción alérgica a las picaduras',
	},
};

const buscarHeroe = (id) => {
	const heroe = heroes[id];

	return new Promise((resolve, reject) => {
		if (heroe) {
			// Le mandamos lo que quiero regresar a la función
			// que está llamando a esta promesa.
			// Se pueden enviar tantos argumentos como se quieran
			// resolver( heroe, arg1, arg2 );
			resolve(heroe);
		} else {
			reject(`No existe un héroe con el id ${id}`);
		}
	});
};

const heroeId1 = 'capi';

// Llamada a la función
buscarHeroe(heroeId1).then((heroe) => {
	// En el then recibimos el valor de retorno que
	// ha resuelto la promesa
	console.log(`Enviando a ${heroe.nombre} a la misión`);
});
