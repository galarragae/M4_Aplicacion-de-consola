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
function calcular() {
  const opcionesValidas = ["+", "-", "*", "/", "salir"];
  let operacion;

  while (true) {
    operacion = prompt(
      "Ingrese el operador que quiere utilizar (+, -, /, *) \n O escriba 'salir' para no continuar:",
    ).toLowerCase();

    if (operacion === "salir") {
      alert("¡Gracias por usar la calculadora!");
      break; // rompe el bucle
    }

    let num1 = parseInt(
      prompt("Ingrese el primer número (entero, sin decimales)"),
    );
    let num2 = parseInt(
      prompt("Ingrese el segundo número (entero, sin decimales)"),
    );

    if (isNaN(num1) || isNaN(num2) || !opcionesValidas.includes(operacion)) {
      alert(`Has ingresado un dato inválido, intenta nuevamente`);
    } else {
      switch (operacion) {
        case "+":
          alert(
            `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la suma es: ${sumar(num1, num2)}`,
          );
          break;
        case "-":
          alert(
            `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la resta es: ${restar(num1, num2)}`,
          );
          break;
        case "*":
          alert(
            `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la multiplicación es: ${multiplicar(num1, num2)}`,
          );
          break;
        case "/":
          alert(
            `Número 1: ${num1}\nNúmero 2: ${num2}\nEl resultado de la división es: ${dividir(num1, num2)}`,
          );
          break;
      }
    }
  }
}

// Llamar a la función para que se ejecute
calcular();