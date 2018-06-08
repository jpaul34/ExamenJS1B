import { Component, OnInit } from '@angular/core';
import {ActorServiceService} from '../actor-service/actor-service.service';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  tarjeta = [];

  constructor(private data: ActorServiceService) { }

  ngOnInit() {
    this.data.mensajeActual2.subscribe(mensaje => this.tarjeta = mensaje);
  }

}
