import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AltaComponent } from './componentes/peliculas/alta/alta.component';
import { ListadoComponent } from './componentes/actor/listado/listado.component';
import { TablaPeliculaComponent } from './componentes/peliculas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/peliculas/detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    AltaComponent,
    ListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
