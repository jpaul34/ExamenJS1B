import { Component, OnInit } from '@angular/core';
import {ActorServiceService} from '../../actor/actor-service/actor-service.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-pelicula-table',
  templateUrl: './pelicula-table.component.html',
  styleUrls: ['./pelicula-table.component.css']
})
export class PeliculaTableComponent implements OnInit {

  datosTabla = [];
  datosActor = [];
  datosPelicula = [];
  indice;

  constructor(private data: ActorServiceService) {
  }

  ngOnInit() {
    // this.indice = this.data.getIndice();
    this.data.mensajeIndice.subscribe(mensaje => this.indice = mensaje);
    this.data.mensajeActual2.subscribe(mensaje => this.datosActor = mensaje);
    this.data.mensajeActual3.subscribe(mensaje => this.datosTabla = mensaje);
  }
  getDatos() {
    console.log(this.datosTabla);
  }

  obtenerPeliculas() {
    this.datosTabla.forEach(
      (valor, indice, arreglo) => {
        if (indice === this.indice) {
          this.datosPelicula = valor.peliculas;
        }
      }
    );
    console.log(this.datosPelicula);
  }
}
