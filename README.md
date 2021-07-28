# Apuntes básicos de JavaScript

El objetivo de repositorio es servirme de manual de consulta para cualquier duda relacionada con JavaScript. Estas líneas de código están sacadas de varias fuentes, ya sean videos de YouTube o cursos de Udemy. Más allá de todo lo relacionado con el manejo del DOM, creí conveniente realizar estos apuntes para tener claros los aspectos fundamentales antes de encarar un framework.

De esta manera, se conforman estas líneas de código con lo que yo considero **lo fundamental** a saber antes de enfrentarse a cualquier framework moderno.

### DISCLAIMER

Estos apuntes están realizados según mis explicaciones y con el objetivo de recurrir a ellos como resumen de las fuentes de las que he bebido. Es posible que, si los revisas, contengan información explicada en una forma en que no te resulten útiles. El cualquier caso, te pido disculpas de antemano, pues el principal motivo de realizarlos es que me sirvan de ayuda personal a mi, sin perjuicio de que puedan ayudar a mucha más gente.

## TABLA DE CONTENIDOS

-   [x] [Tipos primitivos y tipos compuestos](#tipos-primitivos-y-tipos-compuestos)
-   [x] [Template Strings](#template-strings)
-   [] [Destructuracion](#destructuracion)
-   [] [Propiedades simplificadas](#propiedades-simplificadas)
-   [] [Parametros por defecto](#parametros-por-defecto)
-   [] [Operador Spread y Rest](#operador-spread-y-rest)
-   [] [Bucles for](#bucles-for)
-   [x] [Objetos](#objetos)
-   [x] [Callbacks](#callbacks)
-   [] [Funciones flecha](#funciones-flecha)
-   [] [Promesas](#promesas)
-   [] [Async y Await](#async-y-await)
-   [] [Contacto](#contacto)

### Tipos primitivos y tipos compuestos

| Primitivos                      | Compuestos                          |
| ------------------------------- | ----------------------------------- |
| Se accede directamente al valor | Se accede a la referencia del valor |
| string                          | objecto {}                          |
| Number                          | array []                            |
| boolean                         | function() {}                       |
| undefined                       | Class{}                             |
| NaN                             | otros                               |

### Template Strings

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/lo-basico-js/blob/main/assets/template.png" />
</p>

### Destructuracion

### Propiedades simplificadas

### Parametros por defecto

### Operador Spread y Rest

### Bucles For

### Objetos

Recomendable usar CamelCase o lowerCamelCase para los nombres de las propiedades.

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/lo-basico-js/blob/main/assets/objetos-1.png" />
</p>

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/lo-basico-js/blob/main/assets/objetos-2.png" />
</p>

### Callbacks

Al invocar a la función `buscarHeroe()` pasándole el **id** del héroe a buscar, esta ejecuta la función y aquí se produce:

1. La función `buscarHeroe()` recibe id, lo busca si existe o no y le devuelve al callback los datos necesarios. En este caso, el heroe (si existe el heroe) o el error (si no existe el heroe).
2. Es en la invocación donde se hace la impresión del heroe, para desligarlo totalmente de la definición de la función. Aquí se recibe el heroe (si existe) que nos manda la función o el error (si no existe).

<p align="center" width="460">
    <img align="center" src="https://github.com/jgcarrillo/lo-basico-js/blob/main/assets/callbacks.png" />
</p>

### Funciones flecha

### Promesas

### Async y Await

## Contacto

Si tienes alguna duda o necesitas consultar algo del proyecto, puedes hacerlo a través de estas vías:

-   Twitter: [https://twitter.com/jgcarrillo](https://twitter.com/jgcarrillo_)
-   LinkedIn: [https://es.linkedin.com/in/jgcarrilloweb](https://es.linkedin.com/in/jgcarrilloweb)
-   Website: [https://jgcarrillo.com/](https://jgcarrillo.com/)
