/*Escriba un for...of  que itere a travÃ©s de nuestra pokemonListmatriz.

Dentro del bloque del for...of bucle, use console.log() una interpolaciÃ³n 
de cadenas como se modelÃ³ anteriormente para registrar cada elemento de la 
matriz pokemon  dentro de la cadena. 'You caught a 'X'!' 
Por ejemplo, la primera iteraciÃ³n del bucle deberÃ­a imprimir 
'Â¡Atrapaste un Pikachu!' en la consola.

Uno de los elementos, 'Yoshi', no es un PokÃ©mon. 
Si encuentras 'Yoshi', usa continue para omitir este elemento antes de que 
se registre en la consola.
*/
const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}
