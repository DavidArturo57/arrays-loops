/*
*Suma de resistencias en serie
*Calcular la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.
*/
//*---Ejemplo 1-----
const resis = [-1, 5, 6, 3];
let totalResis = 0;

for (let i = 0; i < resis.length; i++) {
    totalResis += Math.abs(resis[i]);
}
console.log(`${totalResis} ohms`);

//*----Ejemplo 2-----
const resis2 = [14, 3.5, 6];
let totalResis2 = 0;
for (let i = 0; i < resis2.length; i++) {
    totalResis2 += Math.abs(resis2[i]);
}

console.log(`${totalResis2} ohms`);

//*---Ejemplo 3------
const resis3 = [8, 15, 100];
let totalResis3 = 0;
for (let i = 0; i < resis3.length; i++) {
    totalResis3 += Math.abs(resis3[i]);
}

console.log(`${totalResis3} ohms`);






