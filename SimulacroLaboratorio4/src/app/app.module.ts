import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './componentes/peliculas/peliculas-alta/pelicula-alta.component';
import { TablaPeliculasComponent } from './componentes/peliculas/tabla-pelicula/tabla-peliculas.component';
import { DetallePeliculaComponent } from './componentes/peliculas/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisComponent } from './componentes/tabla-pais/tabla-pais.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculasComponent,
    DetallePeliculaComponent,
    TablaPaisComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
