// FETCH
fetch('https://pokeapi.co/api/v2/pokemon/')
	.then((res) => res.json())
	.then((data) => {
		data.results.forEach((element) => {
			console.log(element.name);
		});
	})
	.catch((err) => console.log(err));
