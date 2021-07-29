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
		// Sería igual que llamar al resolve(heroe);
		return heroe;
	} else {
		// También se puede llamar con:
		// throw Error(`No existe un héroe con el id ${id}`);
		throw `No existe un héroe con el id ${id}`;
	}
};

buscarHeroeAsync('iron2')
	.then((heroe) => console.log(heroe))
	.catch((err) => console.log(err));
