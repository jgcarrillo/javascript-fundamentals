/********************************
 * SIMULACIÓN DE LA BASE DE DATOS
 *******************************/
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

const buscarHeroeAsync = async (id) => {
	const heroe = heroes[id];

	if (heroe) {
		return heroe;
	} else {
		throw `No existe un héroe con el id ${id}`;
	}
};

const obtenerHeroeAwait = async (id) => {
	try {
		// Esperar la resolucion de esta promesa
		// Pues buscarHeroesAsync retorna una promesa
		// Recordar que el await tiene que estar dentro
		// de una funcion async para que funcione
		const heroe = await buscarHeroeAsync(id);

		return heroe;
	} catch (err) {
		console.log('CATCH!!!!');
		// Una opcion sería lanzar así el error
		//throw err;

		// Regresar un objeto literal en el catch
		return {
			nombre: 'Sin nombre',
			poder: 'Sin poder',
		};
	}
};

console.time('await');

obtenerHeroeAwait('capi22')
	.then((heroe) => {
		console.table(heroe);
		console.timeEnd('await');
	})
	.catch(console.warn);
