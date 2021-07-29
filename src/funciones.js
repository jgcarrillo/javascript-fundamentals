// DEFINIR FUNCIONES
function saludar(nombre) {
	// Todas las funciones TRADICIONALES (no flecha)
	// internamente cuando se ejecutan tienen el objeto
	// implícito 'arguments'
	// Lo que hace referencia es a TODOS los argumentos
	// que se encuentran enviados a la función.
	console.log(arguments);

	console.log('Hola ' + nombre);
}

// Función de flecha o Lambda function
const saludarFlecha = () => {
	console.log('Hola flecha');
};

// Función anónima
const saludar2 = function (nombre) {
	console.log('Hola ' + nombre);
};

// Invocaciones
saludar('Jorge', 45, true, 'Spain');
saludar2('Jorge');
saludarFlecha();
