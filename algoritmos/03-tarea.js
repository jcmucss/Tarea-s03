// Tarea Ejercicios condicionales: Página 88
// => 3.2, 3.3, 3.4, 3.8, 3.11, 3.9
// Ejercicio 3.2
// let Sueldo=0;
// let HorasTrabajadas=41;
// let PagoHora=10;
// let HorasExtras=HorasTrabajadas%10;
// if (HorasTrabajadas>40 && HorasExtras>0){
// Sueldo=(HorasTrabajadas*PagoHora)+(HorasExtras*PagoHora*2)
// }
// else{
//     Sueldo=(HorasTrabajadas*PagoHora)
// }
// console.log(`El suledo del trabajdor es ${Sueldo}`);

// Ejercicio 3.3

// let Dinero =260 ;
// let Regalo = "";

// if (Dinero <= 10) {
//     Regalo = "Tarjeta";
// }
// else if (Dinero >= 11 && Dinero <= 100) {
//     Regalo = "Chocolate";
// }
// else if (Dinero >= 101 && Dinero <= 250) {
//     Regalo = "Flores";
// }
// else {
//     Regalo = "Anillo";
// }
// console.log(`El regalo a escoger es ${Regalo}`)

// Ejercicio 3.4

// let Cobro=0;
// let Horas=6;
// for (var i=1 ; i<=Horas;i++){
//     if (i<=2){
//         Cobro=Cobro+5;
//     }
//     if (i>2 && i<=5){
//         Cobro=Cobro+4;
//     }
//     if(i>5 && i<=10){
//         Cobro=Cobro+3;
//     }
//     if(i>10){
//         Cobro=Cobro+2;
//     }
// }
// console.log(`Se debe cobrar ${Cobro}`);

// Ejercicio 3.8

// let BonoAntiguedad = 0;
// let BonoSueldo = 0;
// let Antiguedad = 5;
// let Sueldo = 1000;
// if (Antiguedad > 2 && Antiguedad < 5) {
//     BonoAntiguedad = Sueldo * 0.2;
// } else if (Antiguedad >= 5) {
//     BonoAntiguedad = Sueldo * 0.3;
// }
// if (Sueldo < 1000) {
//     BonoSueldo = Sueldo * 0.25
// } else if (Sueldo > 1000 && Sueldo <= 3500) {
//     Bono = Sueldo * 0.15;
// } else if( Sueldo>3500) {
//     BonoSueldo = Sueldo * 0.1;
// }
// if (BonoSueldo>BonoAntiguedad){
//     Sueldo=Sueldo+BonoSueldo
// }else{
//     Sueldo=Sueldo+BonoAntiguedad
// }
// console.log(`El sueldo total a recibir es ${Sueldo}`);

// Ejercicio 3.9

// let Plan = "B";
// let CostoBase = 0;
// let Cargo = 0;
// let Habito = "alcohol";
// let Lentes = true;
// let Enfermedad = true;
// let Edad = 41;
// switch (Plan) {
//     case "A":

//         if (Habito === "alcohol") {
//             Cargo = Cargo + 1200 * 0.1;
//         }
//         if (Lentes === true) {
//             Cargo = Cargo + 1200 * 0.05;
//         }
//         if (Enfermedad = true) {
//             Cargo = Cargo + 1200 * 0.05;
//         }
//         if (Edad > 40) {
//             Cargo = Cargo + 1200 * 0.2;
//         } else {
//             Cargo = Cargo + 1200 * 0.1;
//         }
//         CostoBase = 1200 + Cargo
//         break;

//     case "B":
//         if (Habito === "alcohol") {
//             Cargo = Cargo + 950 * 0.1;
//         }
//         if (Lentes === true) {
//             Cargo = Cargo + 1200 * 0.05;
//         }
//         if (Enfermedad = true) {
//             Cargo = Cargo + 950 * 0.05;
//         }
//         if (Edad > 40) {
//             Cargo = Cargo + 950 * 0.2;
//         } else {
//             Cargo = Cargo + 950 * 0.1;
//         }
//         CostoBase = 950 + Cargo;
//         break;
//     default:
//             CostoBase=0;
// }
// console.log(`La poliza le cuesta ${CostoBase} soles`);

// Ejercicio 3.11

// let Bono = 0;
// let Años = 10;
// for (var a = 1; a <= Años; a++) {

//     if (a <= 5) {
//         Bono = Bono + a * 100;
//     } else {
//         Bono = Bono + 1000;
//     }

// }
// console.log(`El bono total es ${Bono}`);