import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.component.html',
  styleUrls: ['./pelicula-form.component.css']
})
export class PeliculaFormComponent implements OnInit {

  // formDetalle: FormGroup;

  identificadorPelicula: number;
  nombre: string;
  anioLanzamiento: number;
  rating: number;
  actoresPrincipales: string;
  sinopsis: string;
  actorId: number;

  arregloActores = [];
  arregloTabla = [];
  arregloPeliculas = [];

  constructor() { }

  ngOnInit() {
  }
  // agregarDatos(formData) {

  //   this.arregloActores.push(
  //     {
  //       'nombres': this.arregloActores[0].nombres,
  //       'apellidos': this.arregloActores[0].apellidos,
  //       'fechaNacimeinto': this.arregloActores[0].fechaNacimeinto,
  //       'numeroPeliculas': this.arregloActores[0].numeroPeliculas,
  //       'retirado': this.arregloActores[0].retirado,
  //       'peliculas': this.arregloActores[0].peliculas,
  //     });
  //
  //   this.arregloActores[0].peliculas.push(
  //     {
  //       'identificadorPelicula': formData.value.identificadorPelicula,
  //       'nombre': formData.value.nombre,
  //       'anioLanzamiento': formData.value.anioLanzamiento,
  //       'rating': formData.value.rating,
  //       'actoresPrincipales': formData.value.actoresPrincipales,
  //       'sinopsis': formData.value.sinopsis,
  //       'actorId': formData.value.actorId,
  //     });
  //
  //   this.arregloActores.splice(0, 1);
  //   this.arregloTabla.push(this.arregloActores);
  //   this.enviarDatos();
  //   this.resetForm();
  // }
  //
  // enviarDatos() {
  //   console.log(this.arregloTabla);
  //   // this.data.cambiarMensaje3(this.arregloTabla);
  //   this.arregloTabla = [];
  //   this.mostrarTablaDetalle();
  // }
  //
  // mostrarTablaDetalle() {
  //   const mostrarTabla = <HTMLFormElement>document.getElementById('tablaDetalle');
  //   mostrarTabla.style.display = 'block';
  // }

  limiparPantalla() {
    this.identificadorPelicula = null;
    this.nombre = '';
    this.anioLanzamiento = null;
    this.rating = null;
    this.actoresPrincipales = '';
    this.sinopsis = '';
    this.actorId = null;
  }

  registrar() {
    this.arregloPeliculas.push(
      {
        'identificadorPelicula': this.identificadorPelicula,
        'nombre': this.nombre,
        'anioLanzamiento': this.anioLanzamiento,
        'rating': this.rating,
        'actoresPrincipales': this.actoresPrincipales,
        'sinopsis': this.sinopsis,
        'actorId': this.actorId,
      });
    this.arregloTabla.push(this.arregloPeliculas);
    console.log(this.arregloPeliculas);
  }

}
