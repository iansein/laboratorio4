import { Component } from '@angular/core';
import { ETipoPelicula, Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  listadoPeliculas!: any[];
  unaPelicula!: any;
  productoParaMostrar!: any;
  precio!: number;
  marca: string = '';
  stock!: number;

  constructor() {
    this.listadoPeliculas = [
      {
        id: 100,
        nombre: 'Star Wars',
        tipo: ETipoPelicula.Otros,
        fechaEstreno: new Date('2020/04/29'),
        cantidadPublico: 300,
        foto: './assets/starwars.png',
      },
      {
        id: 101,
        nombre: 'Los Simpsons the movie',
        tipo: ETipoPelicula.Comedia,
        fechaEstreno: new Date('2015/02/30'),
        cantidadPublico: 500,
        foto: './assets/lossimpsonsthemovie.png',
      },
      {
        id: 102,
        nombre: 'Quien quiere ser millonario?',
        tipo: ETipoPelicula.Otros,
        fechaEstreno: new Date('2017/08/15'),
        cantidadPublico: 300,
        foto: './assets/quienquieresermillonario.png',
      },
    ];
  }

  Detalle($event: any) {
    this.unaPelicula = $event;
    console.info($event);
  }
}
