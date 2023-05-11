import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EntidadesService } from 'src/app/services/entidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css'],
})
export class ActorAltaComponent implements OnInit {
  actorNuevo: Actor = new Actor('', '', '', '', '');
  forma!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private entidadesService: EntidadesService
  ) {
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      sexo: ['', Validators.required],
      nombrePais: ['', Validators.required],
    });
  }

  agregarActor() {
    if (!this.forma.invalid) {
      this.actorNuevo.nombre = this.forma.value. nombre;
      this.actorNuevo.apellido = this.forma.value.apellido;
      this.actorNuevo.edad = this.forma.value.edad;
      this.actorNuevo.sexo = this.forma.value.sexo;
      this.entidadesService.crearActor(this.actorNuevo).then(() => {
        Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Se registro al actor exitosamente!',
        })
      });
      this.actorNuevo = new Actor('', '', '', '', '');
      this.forma.reset();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe completar los campos correctamente!!!',
        })
    }
  }

  tomarPaisSeleccionado($pais: any) {
    this.actorNuevo.nombrePais = $pais.name.common;
  }
}
