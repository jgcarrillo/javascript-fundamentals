# Apuntes básicos de JavaScript

El objetivo de repositorio es servirme de manual de consulta para cualquier duda relacionada con JavaScript. Estas líneas de código están sacadas de varias fuentes, ya sean videos de YouTube o cursos de Udemy. Más allá de todo lo relacionado con el manejo del DOM, creí conveniente realizar estos apuntes para tener claros los aspectos fundamentales antes de encarar un framework.

De esta manera, se conforman estas líneas de código con lo que yo considero **lo fundamental** a saber antes de enfrentarse a cualquier framework moderno.

### DISCLAIMER

Estos apuntes están realizados según mis explicaciones y con el objetivo de recurrir a ellos como resumen de las fuentes de las que he bebido. Es posible que, si los revisas, contengan información explicada en una forma en que no te resulten útiles. El cualquier caso, te pido disculpas de antemano, pues el principal motivo de realizarlos es que me sirvan de ayuda personal a mi, sin perjuicio de que puedan ayudar a mucha más gente.

## TABLA DE CONTENIDOS

-   [Tipos primitivos y tipos compuestos](#tipos-primitivos-y-tipos-compuestos)
-   [Template Strings](#template-strings)
-   [Destructuracion](#destructuracion)
-   [Propiedades simplificadas y metodos concisos](#propiedades-simplificadas-y-metodos-concisos)
-   [Parametros por defecto](#parametros-por-defecto)
-   [Operador Ternario](#operador-ternario)
-   [Operador Spread y Rest](#operador-spread-y-rest)
-   [Asignacion con operadores](#asignacion-con-operadores)
-   [Bucles for](#bucles-for)
-   [Objetos](#objetos)
-   [Callbacks](#callbacks)
-   [Funciones normales y flecha](#funciones-normales-y-flecha)
-   [Promesas](#promesas)
-   [Fetch API](#fetch-api)
-   [Map](#map)
-   [Filter](#filter)
-   [Async y Await](#async-y-await)
-   [Contacto](#contacto)

### Tipos primitivos y tipos compuestos

| Primitivos                      | Compuestos                          |
| ------------------------------- | ----------------------------------- |
| Se accede directamente al valor | Se accede a la referencia del valor |
| string                          | objecto { }                         |
| Number                          | array [ ]                           |
| boolean                         | function() { }                      |
| undefined                       | Class{ }                            |
| NaN                             | otros                               |

### Template Strings

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/templates.png" />
</p>

### Destructuracion

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/des.png" />
</p>

También es posible cambiarle el nombre a la variable cuando desestructuramos:

```js
const { apellido: nuevoApellido } = crearPersona('Jorge', 'Gómez);

console.log({ nuevoaApellido });
```

### Propiedades simplificadas

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/simpli.png" />
</p>

Este tipo de asignación se ve mucho, por ejemplo, cuando tenemos valores de propiedades igualadas a una variable:

```js
function crearPersona(nombre, apellido, edad) {
	return {
		nombre,
		apellido,
		edad,
	};

	// Y con función flecha quedaría
	const crearPersona = (nombre, apellido, edad) => ({ nombre, apellido, edad });

	const persona = crearPersona('Maria', 'Flores', 30);
	console.log(persona);
}
```

Importante indicar que, en la función flecha, como estamos obviando el return al hacerlo en una sola línea,
debemos incluir el objeto entre ().

### Parametros por defecto

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/defecto.png" />
</p>

### Operador ternario

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/ternario.png" />
</p>

### Operador Spread y Rest

**REST**
El parámetro _rest_ es indicado con tres puntos (...) seguido del nombre que le asignaremos a dicho parámetro.

Ese parámetro se convierte en un arreglo que contiene el _resto_ de los parámetros apsados a la función.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/rest-1.png" />
</p>

De esta forma, todo lo que le mandemos a _...alumnos_ se transforma en un array de dimensión variable.

**Restricciones parámetro REST**

1. Solo puede existir un parámetro REST en la función.
2. El parámetro REST debe ir siempre como último parámetro.

**SPREAD**
Mientras que el parámetro REST permite especificar argumentos independientes que serán combinados en un arreglo, el operador _SPREAD_ permite especificar un arreglo que será separado y cada item enviado será un argumento independiente a la función.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/spread-1.png" />
</p>

**RESUMEN**

-   Rest: Junta los elementos en un arreglo.
-   Spread: Esparce los elementos como si fueran enviados de forma separada.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/rest-spread.png" />
</p>

### Asignacion con operadores

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/asign.png" />
</p>

### Bucles For

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/for.png" />
</p>

**for of** extrae el valor que se encuentra dentro del arreglo y lo regresa a la variable _heroe_.

Dentro de los arrays podemos encontrar el método `forEach()` para poder ejecutar una instrucción por cada uno de los elementos que se encuentran en el arreglo:

```js
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

juegos.forEach((elemento, indice, arr) => {
	console.log({ elemento, indice, arr });
});
```

En este caso ejecuta un `console.log` por cada elemento del array.

### Objetos

Recomendable usar camelCase o lowerCamelCase para los nombres de las propiedades.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/objetos-1.png" />
</p>

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/objetos-2.png" />
</p>

### Callbacks

Al invocar a la función `buscarHeroe()` pasándole el **id** del héroe a buscar, esta ejecuta la función y aquí se produce:

1. La función `buscarHeroe()` recibe id, lo busca si existe o no y le devuelve al callback los datos necesarios. En este caso, el heroe (si existe el heroe) o el error (si no existe el heroe).
2. Es en la invocación donde se hace la impresión del heroe, para desligarlo totalmente de la definición de la función. Aquí se recibe el heroe (si existe) que nos manda la función o el error (si no existe).

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/callbacks.png" />
</p>

### Funciones normales y flecha

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/funciones.png" />
</p>

Cada función, si no tiene la palabra **return** explícita, entonces **no regresa nada**.

```js
function saludar(nombre) {
	console.log('Hola ' + nombre);

	return 10;
}

const retornoDeSaludar = saludar('Jorge', 56, true, 'Spain');
console.log(retornoDeSaludar); // Daría 10
```

Todo lo que se escriba después del return, **no se ejecuta**.

En las **funciones flecha**, cuando solo se devuelve una línea, se puede simplificar en:

```js
// Normal
const sumar = (a, b) => {
	return a + b;
};

// Resumida
const sumar2 = (a, b) => a + b;
```

Los **arguments** en las funciones de flecha funcionan de una manera distinta a las funciones normales. Las funciones flecha no crean el objeto _arguments_. Para solucionarlo, usamos el parámetro **rest** (...). Si usasemos valores por defecto en los argumentos de la función, el objeto arguments se vería afectado y no mostraría nada, pues no le estaríamos pasando parámetros.

```js
const imprimeArgumentos = (...arguments) => {
	console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Jorge');
```

```js
function sumar(a = 1, b = 2) {
	// En este caso los arguments estarían vacíos.
	console.log(arguments);
}

sumar();
```

Con el parámetro REST hay que tener dos consideraciones:

-   Después de REST no puede venir otro argumento.
-   Si se necesita extraer una variable antes del parámetro REST, entonces tendrá su propio argumento independiente:

```js
const imprimeArgumentos = (edad, ...arguments) => {
console.log({ edad, arguments });
}

imprimeArgumentos(10, true, false, 'Jorge');
```

Se puede hacer una especie de destructuracion de arreglos para sacar cada valor en una variable:

```js
const imprimeArgumentos = (edad, ...arguments) => {
return arguments;
}

const [ casado, vivo, nombre, saludo] = imprimeArgumentos(10, true, false, 'Jorge', 'Hola');
```

Importante indicar que la edad no se incluye pues se ha extraido independientemente, no está en los argumentos que estamos retornando.

### Promesas

Dentro de la promesa se recibe cuál es la función que queremos ejecutar (callback).

-   **Resolver**: Cuando se resuelve la promesa.
-   **Reject**: Se rechaza la promesa o falla.

Cuando invoquemos a la función que tiene la promesa y le pongamos un punto, tendremos tres cosas:

-   _Catch_: Cuando tenemos un error.
-   _Finally_: Realizado para hacer algún tipo de limpieza. Siempre salta cuando se ejecuta el then o el catch. Es el último paso en ejecutarse.
-   _Then_: Cuando todo sucede correctamente.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/promesas-1.png" />
</p>

Con las promesas, se previene que se bloquee el código de JS, y cuando se resuelven regresan a la cola normal de procesos. Es mejor que crearse callbacks que pueden bloquear la ejecución del programa.

**PROMISE ALL**

Que se ejecuten ambas promesas y, cuando ambas se resuelvan, ejecutar el código:

```js
const heroeId1 = 'capi';
const heroeId1 = 'spider';

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) ) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    }
```

**MANEJO DE ERRORES**

```js
buscarHeroe(heroeId1)
	.then((heroe) => {
		console.log(`Enviando a ${heroe.nombre} a la misión`);
	})
	.catch((err) => {
		alert(err);
	})
	.finally(() => {
		console.log('Se terminó');
	});
```

**PROMESAS EN CADENA**

```js
const id = 1;
let nombre;

getEmpleado(id)
	.then((empleado) => {
		// guardamos el empleado que recibo por argumento.
		nombre = empleado;

		// Para encadenar, no olvidar poner el return, para
		// regresar otra promesa y encadenarla.
		return getSalario(id);
	})
	.then((salario) => {
		console.log('El empleado:', nombre, 'tiene un salario:', salario);
	})
	.catch((err) => console.log(err));
```

### Fetch API

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/fetch-api.png" />
</p>

**Fetch** espera una promesa. Entre `fetch()` los paréntesis del fetch podemos incluir template strings para usar la dirección API como una constante o variable.

Esperamos que la url indicada nos devuelva los datos. Esto se gestiona mediante una respuesta, en nuestro caso, un JSON, por lo que transformamos esa información a JSON.

Una vez devuelto el JSON, tenemos que obtener esos datos. **Importante** indicar que cuando estamos usando la notación simplificada de las funciones flecha, en realidad estamos haciendo un `return res.json()` para pasarselo a la siguiente promesa.

Como lo que obtenemos es un array, lo recorremos con el `forEach()`.

Podríamos mejorar este código con Async/Await:

```js
const obtenerPokemons = async () => {
	try {
		const res = await fetch('https://pokeapi.com/v2/pokemon/');
		const data = await res.json();
		console.log(data.results);
	} catch (err) {
		console.log(err);
	}
};

// Invocación de la función
obtenerPokemons();
```

### Map

Método que crea un nuevo array con los resultados de la llamada a la función indicada.

```js
const obtenerPokemons = async () => {
	try {
		const res = await fetch('https://pokeapi.com/v2/pokemon/');
		const data = await res.json();
		console.log(data.results);

		// Array con solo los nombres de los pokemon
		data.results.map((pokemon) => {
			const arrayNombres = data.results.map((pokemon) => pokemon.name);
		});

		console.log(arrayNombres);
	} catch (err) {
		console.log(err);
	}
};

// Invocación de la función.
obtenerPokemons();
```

### Filter

Crea un nuevo array con todos los elementos que cumplan una condición.

```js
const obtenerPokemons = async () => {
	try {
		const res = await fetch('https://pokeapi.com/v2/pokemon/');
		const data = await res.json();
		console.log(data.results);

		// Filtro con solo un determinado nombre
		data.results.map((pokemon) => {
			const arrayNombres = data.results.filter((pokemon) => pokemon.name === 'bulbasaur');
		});

		console.log(arrayNombres);
	} catch (err) {
		console.log(err);
	}
};

// Invocación de la función.
obtenerPokemons();
```

### Async y Await

**ASYNC**

Cuando veamos la palabra **async**, por defecto, estamos regresando una nueva promesa. Es como un `return new Promise()`.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/async.png" />
</p>

Podemos decir que el async toma una función y, su retorno, el lugar de que sea el objeto propiamente, retorna una nueva promesa que resuelve el valor que tenemos en el return.

**AWAIT**

Tiene que estar **dentro de una funcion ASYNC** para que funcione.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/await.png" />
</p>

No obstante, no se recomienda usar el await dentro de un bucle for, por lo tanto:

```js
const obtenerHeroesArray = async () => {
	const heroesArr = [];

	for (const id of heroesIds) {
		heroesArr.push(buscarHeroeAsync(id));
	}

	// heroesArr es ahora un arreglo de promesas
	// Podemos usar el Promise.all para ejecutar
	// todas las promesas simultaneamente.
	// Usamos el await para esperar que se resuelvan
	// todas estas promesas.
	return await Promise.all(heroesArr);
};
```

El mismo procedimiento se puede hacer de una forma mucho más elegante mediante el mapeado del array:

```js
const obtenerHeroesArray = async () => {
	// Esto crea un nuevo arreglo de promesas.
	return await Promise.all(heroesIds.map(buscarHeroeAsync));
};
```

**MANEJO DE ERRORES**

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/await-err.png" />
</p>

## Contacto

Si tienes alguna duda o necesitas consultar algo del proyecto, puedes hacerlo a través de estas vías:

-   Twitter: [https://twitter.com/jgcarrillo](https://twitter.com/jgcarrillo_)
-   LinkedIn: [https://es.linkedin.com/in/jgcarrilloweb](https://es.linkedin.com/in/jgcarrilloweb)
-   Website: [https://jgcarrillo.com/](https://jgcarrillo.com/)
