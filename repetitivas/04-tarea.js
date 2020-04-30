
// Ejercicio 4.1
// let SalarioInicial = 1500;
// let SalarioFinal = 0;
// let i = 0;
// let j = 0;
// var Salarios = new Array(6);
// while (i < 6) {
//     SalarioInicial = Number((SalarioInicial * 1.10).toFixed(2));
//     SalarioFinal = SalarioFinal + SalarioInicial;
//     Salarios[i] = SalarioInicial;
//     i = i + 1;
// }
// console.log(`El salario a cabo de 6 años es: ${SalarioFinal}`);
// while (j < 6) {
//     console.log(`Salario en el año ${j + 1}: ${Salarios[j]}`);
//     j = j + 1;
// }

// Ejercicio 4.3

// let Cantidad = +prompt("Ingrese la cantidad de números a evaluar");
// var Arreglo = new Array(Cantidad)
// let CantidadCeros = 0;
// let MenoresCero = 0;
// let MayoresCero = 0;
// for (var a = 0; a < Cantidad; a++) {
//     Arreglo[a] = +prompt("Ingrese el número " + (a + 1) + ":");
//     if (Arreglo[a] === 0) {
//         CantidadCeros++;
//     } else if (Arreglo[a] < 0) {
//         MenoresCero++;
//     } else {
//         MayoresCero++;
//     }
// }
// console.log(`Hay ${CantidadCeros} números cero`);
// console.log(`Hay ${MenoresCero} números menores que cero`);
// console.log(`Hay ${MayoresCero} números mayores que cero`);

// Ejercicio 4.9

// let Cantidad = +prompt("Ingresar cantidad a depositar");
// let Años = +prompt("Ingresar el número de años para el depósito a plazo fijo")
// let InteresGanado=0;

// for (var b = 0; b < Años; b++) {
//     InteresGanado=Number((Cantidad*0.1).toFixed(2));
//     Cantidad=Cantidad+InteresGanado;
//     // Cantidad = Number((Cantidad * 1.10).toFixed(2));

//     console.log(`La inversion final en el año ${b + 1} es ${Cantidad} y el interes ganado es ${InteresGanado}`);
// }

// Ejercicio 4.13
// let Cantidad = +prompt("Ingrese la cantidad de ventas a evaluar");
// var Arreglo = new Array(Cantidad)
// let Ventas1 = 0;
// let MontoVentas1 = 0;
// let Ventas2 = 0;
// let MontoVentas2 = 0;
// for (var a = 0; a < Cantidad; a++) {
//     Arreglo[a] = +prompt("Ingrese la venta " + (a + 1) + ":");
//     if (Arreglo[a] <= 10000) {
//         Ventas1++;
//         MontoVentas1 = MontoVentas1 + Arreglo[a];
//     } else if (Arreglo[a]>10000 && Arreglo[a]<20000 ) {
//         Ventas2++;
//         MontoVentas2=MontoVentas2+Arreglo[a];
//     } 
// }
// console.log(`Hay ${Ventas1} ventas menores o igual a 10000`);
// console.log(`El monto total de ventas menores o igual a 10000 es: ${MontoVentas1}`);
// console.log(`Hay ${Ventas2} ventas mayores a 10000 pero menores a 20000`);
// console.log(`El monto total de ventas mayores a 10000 pero menores a 20000 es: ${MontoVentas2}`);
// console.log(`El monto global de las ventas es: ${MontoVentas1+MontoVentas2}`)