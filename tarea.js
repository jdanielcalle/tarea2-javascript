// Primer arreglo con los métodos: reduce, foreach, filter, map

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log('Suma (reduce):', suma);

numeros.forEach(num => console.log('Elemento (forEach):', num));

let mayoresQueTres = numeros.filter(num => num > 3);
console.log('Mayores que 3 (filter):', mayoresQueTres);

let cuadrados = numeros.map(num => num * num);
console.log('Cuadrados (map):', cuadrados);

// Segundo arreglo con los métodos: reduce, foreach, filter, map

let palabras = ["JavaScript", "Python", "Java", "C++", "Ruby"];

let frase = palabras.reduce((acumulador, valorActual) => acumulador + ' ' + valorActual);
console.log('Frase concatenada (reduce):', frase);

palabras.forEach(palabra => console.log('Palabra (forEach):', palabra));

let palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log('Palabras largas (filter):', palabrasLargas);

let palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());
console.log('Palabras en mayúsculas (map):', palabrasMayusculas);

// Tercer arreglo con los métodos: reduce, foreach, filter, map

let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log('Suma de edades (reduce):', sumaEdades);

personas.forEach(persona => console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`));

let mayoresDe25 = personas.filter(persona => persona.edad > 25);
console.log('Personas mayores de 25 (filter):', mayoresDe25);

let nombres = personas.map(persona => persona.nombre);
console.log('Nombres de personas (map):', nombres);

// Cuarto arreglo con los métodos: reduce, foreach, filter, map

let booleanos = [true, false, true, false, true];

let cuentaVerdaderos = booleanos.reduce((acumulador, valor) => valor ? acumulador + 1 : acumulador, 0);
console.log('Cantidad de verdaderos (reduce):', cuentaVerdaderos);

booleanos.forEach(bol => console.log('Valor (forEach):', bol));

let soloVerdaderos = booleanos.filter(bol => bol === true);
console.log('Solo verdaderos (filter):', soloVerdaderos);

let booleanosInvertidos = booleanos.map(bol => !bol);
console.log('Booleanos invertidos (map):', booleanosInvertidos);

// Quinto arreglo con los métodos: reduce, foreach, filter, map

let decimales = [1.5, 2.3, 3.8, 4.6, 5.1];

let producto = decimales.reduce((acumulador, valor) => acumulador * valor, 1);
console.log('Producto de los decimales (reduce):', producto);

decimales.forEach(decimal => console.log('Decimal (forEach):', decimal));

let mayoresQueTresDecimales = decimales.filter(decimal => decimal > 3);
console.log('Decimales mayores que 3 (filter):', mayoresQueTresDecimales);

let decimalesRedondeados = decimales.map(decimal => Math.round(decimal));
console.log('Decimales redondeados (map):', decimalesRedondeados);