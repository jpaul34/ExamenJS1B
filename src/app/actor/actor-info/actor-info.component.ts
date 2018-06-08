import {Component, OnInit, Output} from '@angular/core';
import {ActorServiceService} from '../actor-service/actor-service.service';

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.css']
})
export class ActorInfoComponent implements OnInit {

  mensaje = [];
  actorCard = [];

  constructor(private data: ActorServiceService) {}

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
  }

  enviarDatos(indice) {
    this.actorCard = [];
    this.actorCard.push(this.mensaje[indice]);
    this.data.cambiarMensaje2(this.actorCard);
  }
}
