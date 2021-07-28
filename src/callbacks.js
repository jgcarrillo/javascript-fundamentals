// Simulación Base de Datos
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
		nombnre: 'Spiderman',
		poder: 'La mejor reacción alérgica a las picaduras',
	},
};

// 1
const buscarHeroe = (id, callback) => {
	const heroe = heroes[id];

	if (heroe) {
		callback(heroe);
	} else {
		callback(`No existe un heroe con el id ${id}`);
	}
};

const heroeId = 'capi';

// 2
buscarHeroe(heroeId, (err, heroe) => {
	if (err) {
		console.log(err);
	} else {
		console.log(heroe);
	}
});
