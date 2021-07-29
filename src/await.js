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

// IDs para buscar en la BD
const heroesIds = ['capi', 'iron', 'spider'];

// Funcion para retornar un array con todos
// los heroes dentro, que he buscado previamente
// en la base de datos por su id
const obtenerHeroesArray = async () => {
	const heroesArr = [];

	for (const id of heroesIds) {
		// Funcion que regresa una promesa
		// Antes de que se siga ejecutando el código
		// he esperado a que esta función se resolviera.
		// Cuando se resuelve, almacena el resultado
		// de la misma en una constante
		const heroe = await buscarHeroeAsync(id);
		heroesArr.push(heroe);
	}

	return heroesArr;
};

// Con obtenerHeroesArray regresa una promesa
// Lo resolvemos así:
obtenerHeroesArray().then(console.table);
