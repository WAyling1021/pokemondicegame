function displayRules(){
	let rulesOfTheGame =  "To become the Pokemon Master Trainer you need to beat a score of ____ points worth of Pokemon. You'll then be able to face the boss in a battle. The odds are against you, do you have what it takes to be the World's greatest Pokemon trainer?";
	rulesOfTheGame += "Roll 3 sided die to get first Pokemon";
	rulesOfTheGame += "Roll 4 sided die to get second Pokemon";
	rulesOfTheGame += "Roll 5 sided die to get third Pokemon";
	rulesOfTheGame += "Roll 6 sided die to get fourth Pokemon";
	rulesOfTheGame += "Roll 7 sided die to get fifth Pokemon";

	console.log(rulesOfTheGame); 
}

function rollDice(numberOfSides){
	let dieValue = Math.floor(Math.random() * numberOfSides) + 1; 
	console.log(dieValue); 

	// if (dieValue === 3) {
	// 	dieValue = dieValue * 3; 
	// }

	return dieValue; 
}

function runGame() {	// master function
	let myPokemon = [];
	let mewtwo = {
		name: "Mewtwo",
		type: "Psychic",
		health: 50
	};

	// actual gameplay starts
	displayRules();
	// call catch first pokemon function
	let pokemon1 = catchFirstPokemon(); 
	console.log(pokemon1);  
	// capture the returned pokemon in a variable

	// push the captured pokemon to the 'myPokemon' array
	myPokemon.push(pokemon1);

	let pokemon2 = catchSecondPokemon(); 
	console.log(pokemon2);  
	// capture the returned pokemon in a variable

	// push the captured pokemon to the 'myPokemon' array
	myPokemon.push(pokemon2);

	let pokemon3 = catchThirdPokemon(); 
	console.log(pokemon3);  
	// capture the returned pokemon in a variable

	// push the captured pokemon to the 'myPokemon' array
	myPokemon.push(pokemon3);

	let pokemon4 = catchFourthPokemon(); 
	console.log(pokemon4);  
	// capture the returned pokemon in a variable

	// push the captured pokemon to the 'myPokemon' array
	myPokemon.push(pokemon4);

	let pokemon5 = catchFifthPokemon(); 
	console.log(pokemon5);  
	// capture the returned pokemon in a variable

	// push the captured pokemon to the 'myPokemon' array
	myPokemon.push(pokemon5);
}

function catchFirstPokemon() {
	let dieValue = rollDice(3);

	let pokemon = {
		name: "",
		type: "",
		health: 10
	};

	if(dieValue === 1) {
		pokemon.name = "Bulbasaur";
		pokemon.type = "Grass";
	}
	else if(dieValue === 2) {
		pokemon.name = "Charmander";
		pokemon.type = "Fire";
	}
	else if (dieValue === 3) {
		pokemon.name = "Cubone"
		pokemon.type = "Ground"
	}

	console.log(pokemon.name);

	return pokemon; 
} 

function catchSecondPokemon() {
	let dieValue = rollDice(4);

	let pokemon = {
		name: "",
		type: "",
		health: 10
	};

	if(dieValue === 1) {
		pokemon.name = "Squirtle";
		pokemon.type = "Water";
	}
	else if(dieValue === 2) {
		pokemon.name = "Pikachu";
		pokemon.type = "Electric";
	}
	else if(dieValue === 3) {
		pokemon.name = "Oddish"
		pokemon.type = "Grass"
	}
	else if(dieValue === 4) {
		pokemon.name = "Psyduck"
		pokemon.type = "Water"
	}
	console.log(pokemon.name);

	return pokemon; 
}
	
	function catchThirdPokemon() {
	let dieValue = rollDice(5);

	let pokemon = {
		name: "",
		type: "",
		health: 10
	};

	if(dieValue === 1) {
		pokemon.name = "Abra";
		pokemon.type = "Psychic";
	}
	else if(dieValue === 2) {
		pokemon.name = "Ponyta";
		pokemon.type = "Fire";
	}
	else if(dieValue === 3) {
		pokemon.name = "Magnemite"
		pokemon.type = "Electric"
	}
	else if(dieValue === 4) {
		pokemon.name = "Grimer"
		pokemon.type = "Posion"
	}
	else if(dieValue === 5) {
		pokemon.name = "Onix"
		pokemon.type = "Rock"
	}
	console.log(pokemon.name); 

	return pokemon; 
}

	function catchFourthPokemon() {
	let dieValue = rollDice(6);

	let pokemon = {
		name: "",
		type: "",
		health: 10
	};

	if(dieValue === 1) {
		pokemon.name = "Krabby";
		pokemon.type = "Water";
	}
	else if(dieValue === 2) {
		pokemon.name = "Mr.Mime";
		pokemon.type = "Psychic";
	}
	else if(dieValue === 3) {
		pokemon.name = "Voltorb"
		pokemon.type = "Electric"
	}
	else if(dieValue === 4) {
		pokemon.name = "Electrode"
		pokemon.type = "Electric"
	}
	else if(dieValue === 5) {
		pokemon.name = "Horsea"
		pokemon.type = "Water"
	}
	else if(dieValue === 6) {
		pokemon.name = "Eevee"
		pokemon.type = "Normal"
	}
	console.log(pokemon.name); 

	return pokemon; 
}

function catchFifthPokemon() {
	let dieValue = rollDice(7);

	let pokemon = {
		name: "",
		type: "",
		health: 10
	};

	if(dieValue === 1) {
		pokemon.name = "Aerodactyl";
		pokemon.type = "Rock";
	}
	else if(dieValue === 2) {
		pokemon.name = "Snorlax";
		pokemon.type = "Sleeping";
	}
	else if(dieValue === 3) {
		pokemon.name = "Dratini"
		pokemon.type = "Dragon"
	}
	else if(dieValue === 4) {
		pokemon.name = "Pidgey"
		pokemon.type = "Normal"
	}
	else if(dieValue === 5) {
		pokemon.name = "Raichu"
		pokemon.type = "Electric"
	}
	else if(dieValue === 6) {
		pokemon.name = "Sandshrew"
		pokemon.type = "Ground"
	}
	else if(dieValue === 7) {
		pokemon.name = "Slowpoke"
		pokemon.type = "Water"
	}	
	console.log(pokemon.name);

	return pokemon;

} 

runGame(); 