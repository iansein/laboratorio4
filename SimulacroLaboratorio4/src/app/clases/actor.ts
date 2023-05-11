export class Actor {
  nombre: string;
  apellido: string;
  edad: string;
  sexo: string;
  nombrePais;

  constructor(
    nombre: string,
    apellido: string,
    edad: string,
    sexo: string,
    nombrePais: string
  ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.nombrePais = nombrePais;
  }
}
