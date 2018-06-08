import { Component, OnInit } from '@angular/core';
import {ActorServiceService} from '../../actor/actor-service/actor-service.service';

@Component({
  selector: 'app-pelicula-table',
  templateUrl: './pelicula-table.component.html',
  styleUrls: ['./pelicula-table.component.css']
})
export class PeliculaTableComponent implements OnInit {

  datosTabla = [];
  constructor(private data: ActorServiceService) { }

  ngOnInit() {
    this.data.mensajeActual3.subscribe(mensaje => this.datosTabla = mensaje);
  }
}
