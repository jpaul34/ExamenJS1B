import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActorServiceService} from '../actor-service/actor-service.service';


@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent implements OnInit {

  nombresAct: String;
  apellidosAct: String;
  fechaNacimientoAct: Date;
  numPeliculasAct: number;
  retiradoAct: true;
  // @Output() dioClickEnRegistro: EventEmitter<boolean> = new EventEmitter();

  mensaje = [];
  arregloActores = [];

  constructor(private data: ActorServiceService) { }

  limiparPantalla() {
    this.nombresAct = '';
    this.apellidosAct = '';
    this.fechaNacimientoAct = null;
    this.numPeliculasAct = null;
    this.retiradoAct = null;
  }

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
  }

  mostrarInformacion(event, formData) {
    console.log(event);
    console.log(formData.value);

  }

  registrarActor() {
    this.arregloActores.push(
      {
        'nombres': this.nombresAct,
        'apellidos': this.apellidosAct,
        'fechaNacimiento': this.fechaNacimientoAct,
        'numeroPeliculas': this.numPeliculasAct,
        'retirado': this.retiradoAct,
        'peliculas': []
      });

    this.cargarDatos();

    console.log(this.arregloActores);
  }

  cargarDatos() {

    this.data.cambiarMensaje(this.arregloActores);
  }


}
