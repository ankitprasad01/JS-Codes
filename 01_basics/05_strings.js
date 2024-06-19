const name="ankit";
const age=23;

//console.log(name+age+"Value"); This is outdated

// Use backticks for string interpolations
console.log(`My name is ${name} and I am ${age} years old.`)    
const game=new String('Hing')
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toLocaleLowerCase());
console.log(game.trim());

console.log(game.charAt(2));
console.log(game.indexOf('t'))

const url="https://www.google%20haitu.com"
console.log(url.replace('%20','-'))

