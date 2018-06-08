import { Component, OnInit } from '@angular/core';
import {ActorServiceService} from '../actor-service/actor-service.service';

@Component({
  selector: 'app-actor-arrusel',
  templateUrl: './actor-arrusel.component.html',
  styleUrls: ['./actor-arrusel.component.css']
})
export class ActorArruselComponent implements OnInit {

  arregloCarrusel = [];

  constructor(private data: ActorServiceService) { }

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.arregloCarrusel = mensaje);
  }

}
