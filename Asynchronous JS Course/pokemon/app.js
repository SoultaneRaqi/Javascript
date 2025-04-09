const getPokemon = async () => {
  try {
      const pokemonName = document.getElementById('searchName').value.toLowerCase();
      const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      if(!pokemonData.ok) {
          throw new Error('Could not find pokemon');
      }

      const data = await pokemonData.json();
      // Use official artwork instead of front_default for better quality
      const pokemonImage = data.sprites.other['official-artwork'].front_default || 
                           data.sprites.front_default;

      const displayPokemon = document.getElementById('pokemonImg');
      displayPokemon.src = pokemonImage;
      displayPokemon.style.display = "block";
      
      // Update placeholder to show last searched Pokemon
      document.getElementById('searchName').placeholder = pokemonName;
  }
  catch(error) {
      console.error(error);
      alert('Pokemon not found!');
  }
}

// Add event listeners
document.getElementById('searchBtn').addEventListener('click', getPokemon);
document.getElementById('searchName').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      getPokemon();
  }
});
document.getElementById('bottomYellowBtn').addEventListener('click', getPokemon);
document.getElementById('buttonYellowTwo').addEventListener('click', getPokemon);