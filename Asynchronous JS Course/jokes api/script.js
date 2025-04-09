const loadJoke = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random', {
      headers: {
        Accept: 'application/json',
      }
    });
    const data = await response.json();
    document.getElementById('loadingJoke').innerHTML = data.value;
  } catch (error) {
    console.log(error);
  }
}


document.getElementById('loadJokeBtn').addEventListener('click', loadJoke);