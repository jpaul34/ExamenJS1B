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
  @Output() dioClickEnRegistro: EventEmitter<boolean> = new EventEmitter();

  mensaje = [];
  @Output() arregloActores = [];

  constructor(private data: ActorServiceService) { }

  ngOnInit() {
  }

  limiparPantalla() {
    this.nombresAct = '';
    this.apellidosAct = '';
    this.fechaNacimientoAct = null;
    this.numPeliculasAct = null;
    this.retiradoAct = null;
  }

  registrar() {
    // this.arregloActores.push(
    //   {
    //     'nombres': this.nombresAct,
    //     'apellidos': this.fechaNacimientoAct,
    //     'fechaNacimiento': this.fechaNacimientoAct,
    //     'numeroPeliculas': this.numPeliculasAct,
    //     'retirado': this.retiradoAct,
    //     'peliculas': []
    //   });
    console.log('Registrado exitosamente');
    // return  {
    //   'nombres': this.nombresAct,
    //   'apellidos': this.fechaNacimientoAct,
    //   'numeroPeliculas': this.numPeliculasAct,
    //   'retirado': this.retiradoAct,
    //   'peliculas': []
    // };
  }


  obtenerDatosActor() {
    this.arregloActores.push(
      {
        'nombres': this.nombresAct,
        'apellidos': this.fechaNacimientoAct,
        'fechaNacimiento': this.fechaNacimientoAct,
        'numeroPeliculas': this.numPeliculasAct,
        'retirado': this.retiradoAct,
        'peliculas': []
      });
    // return this.arregloActores;
  }

  hizoClickEnRegistro() {
    this.dioClickEnRegistro.emit(true);
  }
}
