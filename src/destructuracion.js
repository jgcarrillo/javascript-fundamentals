const deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	getNombre() {
		return `${this.nombre} ${this.apellido}`;
	},
};

/* Para evitar esto:
const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;
*/

// Hacemos la destructuración
// Dentro de los {} indicamos las propiedades del
// objeto que queremos extraer, asigándose
// automáticamente a esas variables.
const { nombre, apellido, poder } = deadpool;

// En la destructuración también podemos asignar
// valores por defecto
// const { nombre, apellido, poder, edad = 0 } = deadpool;

// También se puede desestructurar en los argumentos de una función:
// Toda la desestructuración sucede en los argumentos
// Al pasarle el objeto a la función cuando se invoca
function imprimerHeroe({ nombre, apellido, poder }) {
	console.log(nombre, apellido, poder);
}

imprimerHeroe(deadpool);

// Es posible destructurar arreglos:
const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;

// Si solo quisiesemos a Batman, pero está en la
// tercera posición, haríamos:
// const [ , , h3] = heroes;
