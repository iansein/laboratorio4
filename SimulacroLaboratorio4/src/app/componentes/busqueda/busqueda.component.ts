import { Component } from '@angular/core';
import { Pelicula,ETipoPelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  listadoPeliculas:Pelicula[] = []
  unaPelicula:any

  constructor()
  {
    this.listadoPeliculas= [
      {id:1, nombre:'Los Simpsons La Película', tipo:ETipoPelicula.Comedia, fechaEstreno:new Date('2007-7-26'), cantidadPublico:300, foto:'./assets/imagenes/peliculas/simpsons.png'},
      {id:2, nombre:'Tonto y retonto', tipo:ETipoPelicula.Comedia, fechaEstreno:new Date('1994-7-13'), cantidadPublico:500, foto:'./assets/imagenes/peliculas/tonto.png'},
      {id:3, nombre:'Zathura', tipo:ETipoPelicula.Otros, fechaEstreno:new Date('2005-11-8'), cantidadPublico:800, foto:'./assets/imagenes/peliculas/zathura.png'}
    ]
  }

  Detalle($event:any)
  {
    this.unaPelicula = $event
  }

}
