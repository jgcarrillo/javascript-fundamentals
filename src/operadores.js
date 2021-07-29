console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// Evalua primero tiene un valor (y es true) y
// el segundo tiene un valor, asigna a la variable
// a1 ese último valor
const a1 = true && 'Hola Mundo'; // ASIGNA 'Hola Mundo'

// En este caso, no evalua nada pues el primer
// valor es false, no ejecuta lo demás,
// con lo cual a2 valdrá false.
const a2 = false && 'Hola Mundo' && 150; // ASIGNA 'false'

// Asigna 'Mundo' pues:
// - El primer elemento tiene un valor, pasa al siguiente
// - El segundo elemento tiene un valor, como no hay más lo asigna
const a3 = 'Hola' && 'Mundo'; // ASIGNA 'Mundo'

// Como la condición es que todo sea verdadero
// en este caso a4 vale false, no por la variable
// 'soyFalso', sino porque no es verdadera toda
// la expresion en su conjunto.
const a4 = 'Hola' && 'Mundo' && soyFalso; // ASIGNA 'false'

// El OR evalua la primer condición:
// - Si la primera condición tiene valor que sea diferente a
// false, null o undefined, toma ese valor.
// - Si no es así, comprueba el siguiente valor
// y retorna 'Ya no soy falso' a a5.
const a5 = soyFalso || 'Ya no soy falso'; // ASIGNA 'Ya no soy falso'

// Como los tres primeros valores son false, null y
// undefined, toma el último valor pues es el que si tiene.
// En caso de colocar un || true después del 'Ya no soy falso'
// seguiría tomando 'Ya no soy falso', pues como ya ha
// encontrado un valor, todo lo demás no se ejecuta.
const a6 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';
