import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class EntidadesService {
  constructor(private angularFirestore: AngularFirestore) {}

  traerActores() {
    const collection = this.angularFirestore.collection<any>('actores');
    return collection.valueChanges();
  }

  crearActor(actor: any) {
    const act = {
      nombre: actor.nombre,
      apellido: actor.apellido,
      edad: actor.edad,
      sexo: actor.sexo,
      nombrePais: actor.nombrePais,
    };

    return this.angularFirestore.collection<any>('actores').add(act);
  }
}
