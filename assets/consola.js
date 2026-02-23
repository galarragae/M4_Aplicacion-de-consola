// 1. Introducción al lenguaje JavaScript (Lección #1)
//    ↪  Objetivo: Familiarizarse con la sintaxis básica de JavaScript y ejecutar código en la consola.
//    ↪  Tareas a desarrollar:
//      ○ Escribir un script simple que muestre mensajes en la consola con console.log().
//      ○ Usar prompt() para recibir datos del usuario.
//      ○ Mostrar mensajes personalizados con alert().

// ---(Si se ejecuta el alert(), se detiene la ejecución del programa)---
// alert(`Hola, ${prompt(`Ingresa tu nombre`)}!`);

// 2. Variables, expresiones y sentencias condicionales (Lección #2)
//    ↪  Objetivo: Aprender a manejar variables, operadores y estructuras condicionales.
//    ↪ Tareas a desarrollar:
//      ○ Definir variables utilizando let y const.
//      ○ Pedir al usuario que ingrese dos números y almacenarlos en variables.
//      ○ Implementar operaciones matemáticas (suma, resta, multiplicación, división).
//      ○ Usar estructuras condicionales (if, else, switch) para evaluar diferentes situaciones.

// console.log(
//   "%c---------- Calculadora en consola ----------",
//   "color: white; background-color: teal; padding: 5px; border-radius: 5px",
// );

// console.log(
//   `Para este ejercicio en consola, la función calcular es muy básica, ya que al ingresar cualquier dato que no sea un número, aparecerá "Uncaught ReferenceError" en consola. \nSi deseas algo más dinámico, ¡utiliza el otro script!`,
// );

// let num1 = "";
// let num2 = "";
// let operacion = "";
// let resultado;

// isNaN(num1) || isNaN(num2) : Devuelve true si num1 o num2 no es un número
// opcionesValidas.includes(operacion) : revisa si lo que ingresa el usuario está dentro del array
// !opcionesValidas.includes(operacion) : devuelve TRUE si la variable operacion NO está dentro del arreglo y muestra el msj
// function calcular(num1, num2, operacion) {
//   if (!isNaN(num1) && !isNaN(num2)) {
//     switch (operacion) {
//       case "+":
//         resultado = num1 + num2;
//         console.log(
//           `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la suma es: ${resultado}`,
//         );
//         break;

//       case "-":
//         resultado = num1 - num2;
//         console.log(
//           `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la resta es: ${resultado}`,
//         );
//         break;

//       case "*":
//         resultado = num1 * num2;
//         console.log(
//           `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la multiplicación es: ${resultado}`,
//         );
//         break;

//       case "/":
//         if (num2 === 0) {
//           console.log(
//             `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado es: ¡Infinito! Cualquier número dividido por 0 es infinito.\nIntenta dividir por otro número...`,
//           );
//         } else {
//           resultado = num1 / num2;
//           console.log(
//             `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la división es: ${resultado}`,
//           );
//         }
//         break;

//       default:
//         console.error(`La operación ingresada no es válida`);
//     }
//   } else {
//     console.error(`Has ingresado un dato inválido, intenta nuevamente`);
//   }
// }

// 3. Arreglos y ciclos (Lección #3):
//   ↪ Objetivo: Introducir el uso de arreglos y estructuras de repetición.
//   ↪Tareas a desarrollar:
//      ○ Crear un arreglo con una lista de elementos.
//      ○ Usar for y while para recorrer arreglos.
//      ○ Implementar una función que filtre elementos según una condición.

console.log(
  "\n%c---------- Recorrer y filtrar arrays ----------",
  "color: white; background-color: teal; padding: 5px; border-radius: 5px",
);
const numeros = [5, 10, 15, 20, 25, 30];
console.log(`numeros = [${numeros}]`);

console.log("\n---------- Recorrer con for ----------");

for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice en el array: ${i} → Número: ${numeros[i]}`);
}

console.log("\n---------- Recorrer con while ----------");

let iterador = 0;
while (iterador < numeros.length) {
  console.log(`Índice en el array: ${iterador} → Número: ${numeros[iterador]}`);
  iterador++;
}

console.log("\n---------- Filtrar números pares del array ----------");
// let numerosPares = []; // Se crea un array vacío, en el que se agregará los números pares del array original "numeros"
// for (i=0; i<numeros.length; i++){
//   if (numeros[i] % 2 === 0){
//     numerosPares.push(numeros[i]); // Se agrega el número par al nuevo array
//   }
// }

let numerosPares = numeros.filter((numero) => numero % 2 === 0); // Arrow function
// let numerosPares = numeros.filter(function (numero) {  // Funcion normal
//   if (numero % 2 === 0) {
//     return numero;
//   }
// });
console.log(`numerosPares = [${numerosPares}]`);

// 4. Funciones en JavaScript (Lección #4)
//    ↪  Objetivo: Modularizar el código utilizando funciones.
//    ↪ Tareas a desarrollar:
//      ○ Crear funciones para cada operación matemática.
//      ○ Implementar una función que reciba parámetros y retorne un resultado.
//      ○ Llamar funciones dentro de otras funciones para optimizar el código.
console.log(
  "\n%c---------- Calculadora: Funciones y modularización en JS ----------",
  "color: white; background-color: teal; padding: 5px; border-radius: 5px",
);
console.log(
  "Para una calculadora más dinámica y con verificación de tipos de datos, ¡enlaza el script ' prompts-y-alerts.js ' al HTML!",
);

let num1;
let num2;
let operacion = "";

// Funciones individuales para cada operación
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Infinito. No se puede dividir por 0.";
  }
  return a / b;
}

// Función principal que recibe parámetros y llama a las funciones anteriores
function calcular(operacion, num1, num2) {
  switch (operacion) {
    case "sumar":
      return `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la suma es: ${sumar(num1, num2)}`;
    case "restar":
      return `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la resta es: ${restar(num1, num2)}`;
    case "multiplicar":
      return `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la multiplicación es: ${multiplicar(num1, num2)}`;
    case "dividir":
      return `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la división es: ${dividir(num1, num2)}`;
    default:
      return "Operación inválida. Intente nuevamente.";
  }
}

console.log(calcular("sumar", 1, 2));
console.log(calcular("restar", 6, 2));
console.log(calcular("dividir", 7, 0));
console.log(calcular("hola", 1, 2));

// 5. Conceptos básicos de objetos en JavaScript (Lección #5)
//    ↪  Objetivo: Utilizar objetos para organizar datos de manera estructurada.
//    ↪  Tareas a desarrollar:
//      ○ Crear un objeto con propiedades y valores.
//      ○ Implementar métodos dentro de un objeto.
//      ○ Usar un arreglo de objetos y recorrerlo con map() o forEach().

// array = [{Objeto}, {Objeto}, {Objeto}]
// {clave: valor} → Propiedades: par clave-valor
// {saludar: function(){ return `Hola,  soy ${this.nombre}`} }  → Método: función almacenada dentro del objeto

console.log(
  "\n%c---------- Conceptos básicos de objetos en JavaScript ----------",
  "color: white; background-color: teal; padding: 5px; border-radius: 5px",
);

console.log("\n---------- Objeto con propiedades y métodos ----------");
let miPerrito = {
  nombre: "Basa",
  especie: "Perro",
  edad: 6,
  hablar: function () {
    return `${this.nombre} ladra`;
  },
};
console.log(`\nmiPerrito = `, miPerrito, `\nMétodo: ${miPerrito.hablar()}`);

const perritos = [
  {
    nombre: "Basa",
    edad: 6,
  },
  {
    nombre: "Ramona",
    edad: 5,
  },
  {
    nombre: "Zuri",
    edad: "7",
  },
];

console.log("\n---------- Recorrer con forEach ----------");

// perritos.forEach(function(perro){
//   console.log(`${perro.nombre} tiene ${perro.edad} año(s) de edad.`);
// });

// forEach no devuelve nada. Solo sirve para ejecutar acciones (como imprimir en consola)
perritos.forEach((perro) => {
  console.log(`${perro.nombre} tiene ${perro.edad} año(s) de edad.`);
});

console.log("\n---------- Recorrer con map ----------");

const perritosconHogar = perritos.map((perro) => {
  const nuevoPerrito = {
    ...perro,
    tieneHogar: "SÍ",
  };
  return nuevoPerrito;
});

console.log(`\nSe crea un nuevo array → perritosconHogar`, perritosconHogar);

// perritosconHogar.forEach(function(perro) {
//  console.log();
// })

// Usando forEach para imprimir en consola cada objeto del nuevo array
perritosconHogar.forEach((perro) => {
  console.log(
    `\n${perro.nombre} tiene ${perro.edad} año(s) de edad y ${perro.tieneHogar} tiene un hogar`,
  );
});
