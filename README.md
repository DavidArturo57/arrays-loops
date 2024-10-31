# JS-04 - Arrays and Loops 

## Ejercicio 1: Suma de resistencias en serie.

Calcular la suma de todas las resistencias conectadas en serie.

Ejemplos:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.

## Ejercicio 2: Número dividido en mitades.

Dado un número, devuelve el número dividido en sus mitades en una matriz.

Ejemplos:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

## Ejercicio 3: Sociedad secreta.
 
Encuentra el nombre de una sociedad secreta basándose en la primera letra del nombre de cada miembro.
 
Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

## Ejercicio 4: Estado en línea.
 
Mostrar el estado en línea de una lista de usuarios.
 
Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

## Ejercicio 5: Matriz de múltiplos.
 
Crea una función que toma dos parámetros (número, longitud) y devuelve una matriz de longitud que contiene múltiplos del número.

Ejemplo:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

## Ejercicio 6: Dominancia positiva en Array.
 
Escriba una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 
Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

## Ejercicio 7: Promedio antípoda.
 
Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
- Dividir la matriz en dos partes iguales*. Si no son iguales, eliminar el elemento del medio para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Dividir cada número de la matriz resultante por 2.
 
Ejemplo:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.