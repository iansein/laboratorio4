import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css'],
})
export class TablaPeliculaComponent {
  @Input() listadoPeliculas!: any[]; //Listado que recibe
  @Output() unaPelicula: EventEmitter<any> = new EventEmitter<any>(); //Pelicula que manda a mostrar sus datos

  mostrarDetalle(pelicula: any) {
    this.unaPelicula.emit(pelicula);
  }
}
