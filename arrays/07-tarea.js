// EJERCICIO 5.6
// FORMA 1: edades diferentes
// let ArrayNombres = [];
// let ArrayEdades = [];
// let index = 0;
// let Max = 0;
// for (let i = 0; i < 10; i++) {
//     let Nombre = prompt(`Ingrese nombre del alumno ${i + 1}: `);
//     let Edad = +prompt(`Ingrese edad del alumno ${i + 1}: `);
//     ArrayNombres.push(Nombre);
//     ArrayEdades.push(Edad);
//     if (ArrayEdades[i] > Max) {
//         Max=ArrayEdades[i];
//         Index = i;
//     }
// }
// console.log(`Alumno mayor: ${ArrayNombres[Index]} - Edad: ${ArrayEdades[Index]}`);

// FORMA 2: SI ES QUE INGRESAN ALUMNOS CON LA MISMA EDAD
// let ArrayMayores = [];
// let ArrayAlumno=[];
// let Max = 0;
// for (let i = 0; i < 10; i++) {
//     let ArrayPersona=[];
//     ArrayPersona[0] = prompt(`Ingrese nombre del alumno ${i + 1}: `);
//     ArrayPersona[1] = +prompt(`Ingrese edad del alumno ${i + 1}: `);
//     ArrayAlumno.push(ArrayPersona);
//     if (ArrayAlumno[i][1] > Max) {
//         Max=ArrayAlumno[i][1];
//     }
// }
// for (let j=0;j<ArrayAlumno.length;j++){
//     if (Max===ArrayAlumno[j][1]){
//         ArrayMayores.push(ArrayAlumno[j]);
//     }
// }
// console.log(`Hay ${ArrayMayores.length} alumnos con la edad mayor que tienen la misma edad`);
// console.log(ArrayMayores);

// EJERCICIO 5.8
// let Array1=[1,2,3,4,5,6,7];
// let Array2=[];
// for (let i=0;i<Array1.length;i++){
//     if(i+1<Array1.length){
//         Array2[i+1]=Array1[i];
//     }else{
//         Array2[0]=Array1[i];
//     }   
// }
// console.log(Array2);

// EJERCICIO 5.10
// let Numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let Numeros2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let Numeros3 = [];
// for (let a = 0; a < Numeros1.length; a++) {
//     Numeros3.push(Numeros1[a] + Numeros2[a])
//     console.log(Numeros3[a]);
// }