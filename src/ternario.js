// Construcción básica
const tieneMembresia = (miembro) => (miembro ? '2 Dólares' : '10 Dólares');

console.log(tieneMembresia(true));

// Ternarios anidados
const nota = 65;
const grado =
	nota >= 95 ? 'A+' : nota >= 90 ? 'A' : nota >= 85 ? 'B+' : nota >= 80 ? 'B' : nota > +70 ? 'C' : 'F';

console.log({ nota, grado });
