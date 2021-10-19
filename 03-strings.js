//comillas de otro tipo pueden ponerse adentro en el string y usarse como caracteres
//la barra se pone antes de un caracter que ternga que ser especial. Se llaman caracteres de escape
let comillasSimples =
  "hola! \"estoy adentro de comillas\" 'igual podemos usar simples'";
let comillasDobles =
  "hola! \"igual podemos usar dobles\" \n 'yo tambien estoy adentro de comillas!'";
let comillaInvertida = `soy un hola desde backtick`;

console.log(comillasSimples, comillasDobles, comillaInvertida);
//o cada uno por separado:
// console.log(comillasDobles);
// console.log(comillaInvertida);

//vamos a acceder a un caracter en particular!
let conMetodos = "hola mundo";

//empezamos a contar desde 0. Aca pedimos el caracter en la posicion 3
console.log("usando metodos: ", conMetodos.charAt(3));
//podemos hacerlo sin el metodo, y pasamos entre corchetes a cual acceder:
console.log("accediendo directamente al caracter: ", conMetodos[6]);

//podriamos crear una variable nueva para guardar ese carqacter que queremos:
let unaLetra = conMetodos.charAt(7)
console.log('una letra', unaLetra);