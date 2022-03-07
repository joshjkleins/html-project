document.addEventListener("DOMContentLoaded", function() {

  if (window.location.pathname == '/index') {

    document.getElementById("random-pokemon").addEventListener("click", function() {
      let pokemonNumber = Math.floor(Math.random() * 150)
      fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonNumber)
        .then(response => response.json())
        .then(data => updatePokemonData(data));
    })

    function updatePokemonData(pokemon) {
      document.getElementById("random-pokemon").innerHTML = `The pokemon chosen is.... ${pokemon.name}!`
      document.getElementById("pokemon-image").src = `${pokemon.sprites.front_default}`
    }
  }

  if (window.location.pathname == '/pokemon') {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20/')
      .then(response => response.json())
      .then(data => updatePokemonList(data));
  }

  function updatePokemonList(pokemon) {

    let list = ''
    
    pokemon.results.forEach(poke => {
      list += `<li>${poke.name}</li>`
    })

    document.getElementById("pokemon-list").innerHTML = list
  }
});