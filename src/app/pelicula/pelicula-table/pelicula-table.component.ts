import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-table',
  templateUrl: './pelicula-table.component.html',
  styleUrls: ['./pelicula-table.component.css']
})
export class PeliculaTableComponent implements OnInit {

  datosTabla = [];

  constructor() { }

  ngOnInit() {
  }

  cambiarBolean(estado) {

    if (estado === true) {
      return 'Si';
    } else {
      return 'No';
    }

  }

}
