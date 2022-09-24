/*
1.3. Dada una lista de números enteros, imprima cuál es el menor de los números de
la lista.
1.4. Dada una lista de números enteros, imprima cuál es la suma de los números al
cuadrado.
1.5. Dada una lista de números enteros, ordene e imprima la lista de menor a mayor.
1.6. Dada una lista de números enteros, imprima un diccionario con el número de
repeticiones para cada número en la lista.
1.7. Dada una palabra, imprima el conjunto de de anagramas, que se pueden realizar
con la palabra.
*/

const numbers = [100, 11, 21, 38, 54, 75, 36, 57, 48, 19, 100];

//1.3

let aux = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (aux > numbers[index]) {
    aux = numbers[index];
  }
}

console.log(aux);

//1.4

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}

console.log(sum * sum);

//1.5

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

//1.6

let line = "";
let auxRepeat = 0.0;
for (let index = 0; index < numbers.length; index++) {
  let temp = 0;
  if (auxRepeat != numbers[index]) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[index] == numbers[i]) {
        temp++;
      }
    }
    line += numbers[index] + ": " + temp + "\n";
  } else {
    auxRepeat = numbers[index];
  }
}

console.log(line);

//1.7
function permutaciones(string, raiz = '') {
    if (string.length == 1) {     // último caso
        return [raiz + string];
    } else {
        let res = [];
        for (let i=0; i < string.length; i++) {
            // ir tomando cada uno de los caracteres como raiz
            // como string va lo que está antes+después de ese caracter
            // obtener recursivamente el array de permutaciones
            res.push(
                 ...permutaciones(string.substr(0,i) + string.substr(i+1), string[i])
                    .map(x=>raiz+x)
            );
        }
        return res;
    }
}

// ------ Ejemplo ------ //
var resultado = new Set(permutaciones('abc'));

console.log(resultado);