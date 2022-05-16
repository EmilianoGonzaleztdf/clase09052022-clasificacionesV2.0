let prom, nt1, nt2, nt3, sumaNota: number;
let nombre: string = " ";
//usamos while xq no conocemos la cantidad de ingresos/interacciones - for lo usamos si conocemos la cantidad de interacciones//*
while (nombre !== "") {
  nombre = prompt("ingrese el nombre de Alumno:");
  console.log("Alumno :" + nombre);
  nt1 = Number(prompt("ingrese calificacion de la Practica"));
  console.log("Calificacion Practica :" + nt1);
  nt2 = Number(prompt("ingrese calificacion del Problema"));
  console.log("Calificacion Problema :" + nt2);
  nt3 = Number(prompt("ingrese calificacion del Teorico"));
  console.log("Calificacion Teorico :" + nt3);

  if (nt1 > -1 && nt2 > -1 && nt3 > -1 && nt1 <= 10 && nt2 <= 10 && nt3 <= 10) {
    prom = console.log(
      "el promedio de",
      nombre,
      "es",
      nt1 * 0.1 + nt2 * 0.5 + nt3 * 0.4
    );
  } else {
    console.log("error, usted ingreso un valor errones");
  }
}
//javi hizo este codigo :D :D :D
