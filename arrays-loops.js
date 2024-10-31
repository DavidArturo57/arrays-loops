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



