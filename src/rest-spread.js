function agregar_alumno(arr_alumnos, ...alumnos) {
	for (let i = 0; i < alumnos.length; i++) {
		arr_alumnos.push(alumnos[i]);
	}

	return arr_alumnos;
}

let alumnos_arr = ['Jorge'];
let alumnos_arr2 = agregar_alumno(alumnos_arr, 'María', 'Pedro', 'Susana', 'Juan');

console.log(alumnos_arr2);

// SPREAD
let numeros = [10, 1, 5, 50, 300, 2];

// El parámetro SPREAD separa cada uno de los elementos del
// array y envía cada item como un argumento independiente
// a la función max().
let max = Math.max(...numeros);

console.log(max);

// RESUMEN
function saludarRest(saludo, ...nombres) {
	for (i in nombres) {
		console.log(`${saludo} ${nombres[i]}`);
	}
}

function saludarSpread(saludo, ...nombres) {
	console.log(`${saludo} ${nombres}`);
}

saludarRest('Hola', 'Fernando', 'Maria', 'Susana');

let personas = ['Melisa', 'Fernando', 'Juan'];
saludarSpread('Que tal!', personas);

// OTRA FORMA DE UNIR
let partes = ['brazos', 'piernas'];
let cuerpo = ['cabeza', 'cuello', ...partes, 'pies', 'dedos'];
console.log(cuerpo);
