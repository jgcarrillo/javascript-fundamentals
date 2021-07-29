# Apuntes básicos de JavaScript

El objetivo de repositorio es servirme de manual de consulta para cualquier duda relacionada con JavaScript. Estas líneas de código están sacadas de varias fuentes, ya sean videos de YouTube o cursos de Udemy. Más allá de todo lo relacionado con el manejo del DOM, creí conveniente realizar estos apuntes para tener claros los aspectos fundamentales antes de encarar un framework.

De esta manera, se conforman estas líneas de código con lo que yo considero **lo fundamental** a saber antes de enfrentarse a cualquier framework moderno.

### DISCLAIMER

Estos apuntes están realizados según mis explicaciones y con el objetivo de recurrir a ellos como resumen de las fuentes de las que he bebido. Es posible que, si los revisas, contengan información explicada en una forma en que no te resulten útiles. El cualquier caso, te pido disculpas de antemano, pues el principal motivo de realizarlos es que me sirvan de ayuda personal a mi, sin perjuicio de que puedan ayudar a mucha más gente.

## TABLA DE CONTENIDOS

-   [x] [Tipos primitivos y tipos compuestos](#tipos-primitivos-y-tipos-compuestos)
-   [x] [Template Strings](#template-strings)
-   [x] [Destructuracion](#destructuracion)
-   [x] [Propiedades simplificadas y metodos concisos](#propiedades-simplificadas-y-metodos-concisos)
-   [x] [Parametros por defecto](#parametros-por-defecto)
-   [x] [Operador Ternario](#operador-ternario)
-   [x] [Operador Spread y Rest](#operador-spread-y-rest)
-   [x] [Asignacion con operadores](#asignacion-con-operadores)
-   [x] [Bucles for](#bucles-for)
-   [x] [Objetos](#objetos)
-   [x] [Callbacks](#callbacks)
-   [x] [Funciones normales y flecha](#funciones-normales-y-flecha)
-   [] [Promesas](#promesas)
-   [] [Async y Await](#async-y-await)
-   [x] [Contacto](#contacto)

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

```
const { apellido: nuevoApellido } = crearPersona('Jorge', 'Gómez);

console.log({ nuevoaApellido });
```

### Propiedades simplificadas

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/javascript-fundamentals/blob/main/assets/simpli.png" />
</p>

Este tipo de asignación se ve mucho, por ejemplo, cuando tenemos valores de propiedades igualadas a una variable:

```
function crearPersona(nombre, apellido, edad){
	return {
		nombre,
		apellido,
		edad
	}

// Y con función flecha quedaría
const crearPersona = (nombre, apellido, edad) => ({nombre, apellido, edad})

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

```
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

```
function saludar( nombre ) {
	console.log('Hola ' + nombre);

	return 10;
}

const retornoDeSaludar = saludar('Jorge', 56, true, 'Spain');
console.log(retornoDeSaludar); // Daría 10
```

Todo lo que se escriba después del return, **no se ejecuta**.

En las **funciones flecha**, cuando solo se devuelve una línea, se puede simplificar en:

```
// Normal
const sumar = (a,b) => {
	return a + b;
}

// Resumida
const sumar2 = (a,b) =>  a + b
```

Los **arguments** en las funciones de flecha funcionan de una manera distinta a las funciones normales. Las funciones flecha no crean el objeto _arguments_. Para solucionarlo, usamos el parámetro **rest** (...). Si usasemos valores por defecto en los argumentos de la función, el objeto arguments se vería afectado y no mostraría nada, pues no le estaríamos pasando parámetros.

```
const imprimeArgumentos = (...arguments) => {
	console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Jorge');
```

```
function sumar(a = 1, b = 2) {
	// En este caso los arguments estarían vacíos.
	console.log(arguments);
}

sumar();
```

Con el parámetro REST hay que tener dos consideraciones:

-   Después de REST no puede venir otro argumento.
-   Si se necesita extraer una variable antes del parámetro REST, entonces tendrá su propio argumento independiente:

```

const imprimeArgumentos = (edad, ...arguments) => {
console.log({ edad, arguments });
}

imprimeArgumentos(10, true, false, 'Jorge');

```

Se puede hacer una especie de destructuracion de arreglos para sacar cada valor en una variable:

```

const imprimeArgumentos = (edad, ...arguments) => {
return arguments;
}

const [ casado, vivo, nombre, saludo] = imprimeArgumentos(10, true, false, 'Jorge', 'Hola');

```

Importante indicar que la edad no se incluye pues se ha extraido independientemente, no está en los argumentos que estamos retornando.

### Promesas

### Async y Await

## Contacto

Si tienes alguna duda o necesitas consultar algo del proyecto, puedes hacerlo a través de estas vías:

-   Twitter: [https://twitter.com/jgcarrillo](https://twitter.com/jgcarrillo_)
-   LinkedIn: [https://es.linkedin.com/in/jgcarrilloweb](https://es.linkedin.com/in/jgcarrilloweb)
-   Website: [https://jgcarrillo.com/](https://jgcarrillo.com/)

```

```
