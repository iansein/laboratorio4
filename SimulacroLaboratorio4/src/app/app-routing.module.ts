import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './componentes/peliculas/peliculas-alta/pelicula-alta.component';
import { TablaPaisComponent } from './componentes/tabla-pais/tabla-pais.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'peliculas/listado', component: PeliculaListadoComponent },
  { path: 'tabla-pais', component: TablaPaisComponent },
  { path: '', component: BusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
