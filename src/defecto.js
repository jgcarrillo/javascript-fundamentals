function saludo(mensaje = 'Hola Mundo', tiempo = 1500) {
	setTimeout(() => {
		console.log(mensaje);
	}, tiempo);
}

// En caso de no recibir nada por parámetros
// La función tomaría los valores por defecto
// Indicados en la cabecera de su declaración
saludo();
