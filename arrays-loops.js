//*--------Ejercicio 1: Suma de resistencias en serie.-------------
//*Ejemplo 1-----
const resis = [-1, 5, 6, 3];
let totalResis = 0;

for (let i = 0; i < resis.length; i++) {
    totalResis += Math.abs(resis[i]);
}
console.log(`${totalResis} ohms`);

//*Ejemplo 2
const resis2 = [14, 3.5, 6];
let totalResis2 = 0;
for (let i = 0; i < resis2.length; i++) {
    totalResis2 += Math.abs(resis2[i]);
}
console.log(`${totalResis2} ohms`);

//*Ejemplo 3
const resis3 = [8, 15, 100];
let totalResis3 = 0;
for (let i = 0; i < resis3.length; i++) {
    totalResis3 += Math.abs(resis3[i]);
}
console.log(`${totalResis3} ohms`);

//*----------Ejercicio 2: Número dividido en mitades.-----------
//*Ejemplo 1
const num = 4; 
let resultado = [];

for (let i = 0; i < 2; i++) {
    m = num / 2;
    resultado.push(m);
}
console.log(resultado);

//*Ejemplo 2
const num2 = 10; 
let resultado2 = [];

for (let i = 0; i < 2; i++) {
    m = num2 / 2;
    resultado2.push(m);
}
console.log(resultado2);

//*----------Ejercicio 3: Sociedad secreta.-----------
//*Ejemplo 1
const sociedad = ["Esperanza", "Franco", "Nia"];
let secreta = " ";

for (let i = 0; i < sociedad.length; i++) {
    secreta += sociedad[i][0];
}
console.log(secreta); 

//*Ejemplo 2
const sociedad2 = ["Phoebe", "Ross", "Chandler", 'Joey', "Monica", "Rachel"];
secreta2 = " ";

for (let i = 0; i < sociedad2.length; i++) {
    secreta2 += sociedad2[i][0];
}
console.log(secreta2);

//*Ejemplo 3
const sociedad3 = ["Harry", "Ron", "Hermione"];
secreta3 = " ";

for (let i = 0; i < sociedad3.length; i++) {
    secreta3 += sociedad3[i][0];
}
console.log(secreta3); 

//*----------Ejercicio 4: Estado en línea.-----------
const usuarios = ["mockIng992", "J0eyPunch", "glassedFer"];
const contador = usuarios.length;
let status = '';
if (contador === 0) {
    status = 'Usuario    no online';
} else if (contador === 1) {
    status = `${users[0]} online`;
} else if (contador === 2) {
    status = `${users[0]} and ${usuarios[1]} online`;
} else {
    for (let i = 0; i < contador; i++) {
        if (i < 2) {
            status += usuarios[i]; 
            if (i === 0 && contador > 2) {
                status += ', '; 
            } else if (i === 1) {
                status += ' and '; 
            }
        }
    }
    status += `${contador - 2} more online`; // Agrega la cantidad de usuarios adicionales
}
console.log(status);

//*----------Ejercicio 5: Matriz de múltiplos.-----------
//*Ejemplo 1
const numero = 2; 
const length = 10; 
const multiplos = [ ]; 
for (let i = 1; i <= length; i++) {
    multiplos.push(numero * i); // Agregar el múltiplo al array
}
console.log(multiplos); 
//*Ejemplo 2
const numero2 = 17; 
const length2 = 6; 
const multiplos2 = [ ]; 
for (let i = 1; i <= length2; i++) {
    multiplos2.push(numero2 * i); // Agregar el múltiplo al array
}
console.log(multiplos2);

//*---------Ejercicio 6: Dominancia positiva en Array.-----------
const array = [-1, -3, -5, 4, 6767]; 
let Cont_pos = 0; // 
let dominancia = false; // 
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        Cont_pos++; 
    }
}
if (Cont_pos > (array.length / 2)) {
    dominancia = true; 
}
console.log(dominancia); 

//*---------Ejercicio 7: Promedio antípoda.-----------
const arrays = [1, 2, 3, 5, 22, 6];
const long = arrays.length;
const part1 = [];
const part2 = [];
const result = [];
let medio = Math.floor(long / 2);

if (long % 2 !== 0) {
    medio++;
}

for (let i = 0; i < medio; i++) {
    part1.push(arrays[i]);
}
for (let i = long - 1; i >= long - medio; i--) {
    part2.push(arrays[i]);
}

for (let i = 0; i < part1.length; i++) {
    const sum = part1[i] + part2[i];
    result.push(sum / 2); 
}
console.log(result); 

