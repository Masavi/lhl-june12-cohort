const request = require('request');

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/gyarados';

request.get(POKEAPI_URL, (error, response, body) => {
  if (error) return console.log('Error communicating with the server...');
  if (response.statusCode === 404) return console.log('Pokemon not found 😢');
  if (response.statusCode === 200) {
    console.log('Successful request! Here is the data: \n');
    const pokemon = JSON.parse(body);
    console.log(`${pokemon.name} has a weight of ${pokemon.weight}`);
  }
})