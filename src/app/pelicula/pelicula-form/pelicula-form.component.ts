import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActorServiceService} from '../../actor/actor-service/actor-service.service';

@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.component.html',
  styleUrls: ['./pelicula-form.component.css']
})
export class PeliculaFormComponent implements OnInit {

  identificadorPelicula: number;
  nombre: string;
  anioLanzamiento: number;
  rating: number;
  actoresPrincipales: string;
  sinopsis: string;
  actorId: number;

  formDetalle: FormGroup;
  arregloActores = [];
  arregloTabla = [];
  dioClicEnInfo = true;

  constructor(private data: ActorServiceService) {
  }

  ngOnInit() {
    this.data.mensajeActual2.subscribe(mensaje => this.arregloActores = mensaje);
  }

  registrarPelicula() {

    this.arregloActores.push(
      {
        'nombres': this.arregloActores[0].nombres,
        'apellidos': this.arregloActores[0].apellidos,
        'fechaNacimeinto': this.arregloActores[0].fechaNacimeinto,
        'numeroPeliculas': this.arregloActores[0].numeroPeliculas,
        'retirado': this.arregloActores[0].retirado,
        'peliculas': this.arregloActores[0].peliculas,
      });

    this.arregloActores[0].peliculas.push(
      {
        'identificadorPelicula': this.identificadorPelicula,
        'nombre': this.nombre,
        'anioLanzamiento': this.anioLanzamiento,
        'rating': this.rating,
        'actoresPrincipales': this.actoresPrincipales,
        'sinopsis': this.sinopsis,
        'actorId': this.actorId
      });

    this.arregloActores.splice(0, 1);
    this.arregloTabla.push(this.arregloActores);
    this.enviarDatos();
  }

  enviarDatos() {
    console.log(this.arregloTabla);
    this.data.cambiarMensaje3(this.arregloTabla);
    this.arregloTabla = [];
  }

  limiparPantalla() {
    this.identificadorPelicula = null;
    this.nombre = '';
    this.anioLanzamiento = null;
    this.rating = null;
    this.actoresPrincipales = '';
    this.sinopsis = '';
    this.actorId = null;
  }

}
