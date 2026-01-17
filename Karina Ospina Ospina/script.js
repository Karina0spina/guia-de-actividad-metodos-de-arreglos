/* 1.Mutabilidad vs inmutabilidad:
- Mutabilidad significa que el arreglo original se modifica directamente.
- Metodos mutables: push(), pop(),splice()
- Inmutabilidad significa que el arreglo original no cambia, se crea uno nuevo.
  Métodos inmutables: map(), filter(), concat()
*/

/* Imperativa (CÓMO):

Describe paso a paso cómo lograr el resultado

Se enfoca en el proceso y los detalles de implementación

Usa bucles, condicionales y mutación de variables

Ejemplo: "Recorre este array con un for, verifica cada elemento, si cumple la condición, añádelo a un nuevo array"

Declarativa (QUÉ):

Describe qué resultado se desea obtener

Se enfoca en la lógica sin especificar el flujo de control

Usa funciones puras y composición

Ejemplo: "Filtra este array para obtener solo los números pares"

Código comparativo: // Imperativo - CÓMO*/
const numeros = [1, 2, 3, 4, 5];
const pares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

// Declarativo - QUÉ
const paresDeclarativo = numeros.filter(num => num % 2 === 0);

/*
2 Programación Imperativa vs Programación Declarativa
La programación imperativa se enfoca en describir paso a paso cómo se debe realizar
una tarea, indicando el control del flujo y cada instrucción necesaria para llegar
al resultado final. Un ejemplo de este enfoque es el uso de bucles como for o while.

La programación declarativa se enfoca en describir qué se desea lograr sin detallar
cada paso del proceso. En este enfoque se utilizan funciones y métodos que expresan
la intención del resultado, como map(), filter() o reduce().

3️ Funciones Declarativas (Arrow Functions)
Las funciones de flecha o arrow functions son una forma más corta y clara de escribir
funciones en JavaScript. Su sintaxis elimina la palabra function y utiliza el símbolo
=> para definir la función.

Ejemplo de sintaxis:
const suma = (a, b) => a + b;

Las arrow functions son preferidas al trabajar con métodos de arreglos porque hacen
el código más legible, conciso y expresivo, especialmente en programación declarativa.

4️ Efectos Secundarios (Side Effects)
Un efecto secundario ocurre cuando una función o método modifica una variable o estado
que se encuentra fuera de su propio alcance. En el caso de los arreglos, esto sucede
cuando se usan métodos mutables que alteran el arreglo original, lo que puede generar
resultados inesperados si el mismo arreglo se utiliza en otras partes del programa.

5️ Conceptos de Búsqueda
- find(): recorre el arreglo y devuelve el primer elemento que cumple una condición.
  Si no encuentra ningún elemento, retorna undefined.
- findIndex(): funciona de manera similar a find(), pero en lugar de devolver el
  elemento, retorna la posición (índice) donde se encontró. Si no existe, retorna -1.
- includes(): verifica si un arreglo contiene un valor específico y retorna true
  o false según el resultado.

6️ Iteración vs Transformación
La iteración consiste en recorrer un arreglo para ejecutar una acción por cada
elemento sin generar un nuevo arreglo. Un ejemplo de esto es el método forEach().

La transformación implica recorrer un arreglo y crear uno nuevo con los valores
modificados a partir del original. Un ejemplo claro de transformación es el uso
del método map(), el cual retorna un nuevo arreglo con los cambios aplicados.
*/

let herramientas = ["Martillo", "Destornillador"];

const gestionarHerramientas = () => {
  herramientas.push("Taladro");
  herramientas.unshift("Sierra");
  herramientas.pop();
  console.log("Ejercicio 1:", herramientas);
};

gestionarHerramientas();

// ============================
// Ejercicio 2: Modificación de Índice (Mutable)
// ============================

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

// Insertar "Naranja" en la posición 1
colores.splice(1, 0, "Naranja");

// Reemplazar "Azul" por "Morado"
const indexAzul = colores.indexOf("Azul");
colores.splice(indexAzul, 1, "Morado");

console.log("Ejercicio 2:", colores);

// ============================
// Ejercicio 3: Transformación Declarativa (Inmutable)
// ============================

const temperaturas = [15, 20, 25, 30];

const fahrenheit = temperaturas.map(temp => (temp * 9/5) + 32);

console.log("Ejercicio 3 - Fahrenheit:", fahrenheit);
console.log("Ejercicio 3 - Original:", temperaturas);

// ============================
// Ejercicio 4: Filtrado Selectivo (Inmutable)
// ============================

const inventario = [5, 12, 8, 130, 44];

const grandesValores = inventario.filter(valor => valor > 10);

console.log("Ejercicio 4 - Grandes valores:", grandesValores);
console.log("Ejercicio 4 - Original:", inventario);

// ============================
// Ejercicio 5: Acumulación de Datos (Inmutable)
// ============================

const ventas = [100, 250, 150, 400];

const totalVentas = ventas.reduce((acumulador, valor) => acumulador + valor, 0);

console.log("Ejercicio 5 - Total de ventas:", totalVentas);
console.log("Ejercicio 5 - Original:", ventas);

// ============================
// Ejercicio 6: Ordenamiento Alfabético (Mutable)
// ============================

let nombres = ["Zulma", "Andrés", "Bernardo", "Carlos"];

nombres.sort((a, b) => a.localeCompare(b));

console.log("Ejercicio 6 - Ordenado:", nombres);

// ============================
// Ejercicio 7: Inversión de Datos (Mutable)
// ============================

let orden = [1, 2, 3, 4, 5];

orden.reverse();

console.log("Ejercicio 7 - Invertido:", orden);

// ============================
// Ejercicio 8: Búsqueda de Valor (Declarativo)
// ============================

const invitados = ["Juan", "Maria", "Pedro", "Luisa"];

const encontrado = invitados.find(nombre => nombre === "Pedro");

console.log("Ejercicio 8 - Encontrado:", encontrado);

// ============================
// Ejercicio 9: Localización de Índice (Declarativo)
// ============================

const precios = [45, 12, 89, 34];

const indice = precios.findIndex(precio => precio === 89);

console.log("Ejercicio 9 - Índice encontrado:", indice);


// ============================
// Ejercicio 10: Comprobación de Existencia (Inmutable)
// ============================

const cursos = ["Git", "React", "Node"];

const existe = cursos.includes("JavaScript");

console.log("Ejercicio 10 - ¿Existe JavaScript?:", existe);
