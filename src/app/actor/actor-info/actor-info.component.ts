import {Component, OnInit, Output} from '@angular/core';
import {ActorServiceService} from '../actor-service/actor-service.service';

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.css']
})
export class ActorInfoComponent implements OnInit {

  mensaje = [];
  arregloTabla = [];
  actorCard = [];
  indice;

  constructor(private data: ActorServiceService) {}

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
    this.data.mensajeActual3.subscribe(mensaje => this.arregloTabla = mensaje);
    this.data.mensajeIndice.subscribe(mensaje => this.indice = mensaje);
  }

  enviarDatos(indice) {
    this.actorCard = [];
    this.data.setIndice(indice);
    // this.indice = this.data.getIndice();
    this.actorCard.push(this.mensaje[indice]);
    this.data.cambiarMensaje2(this.actorCard);
    console.log('datos para la tabla: ', this.arregloTabla);
    this.data.cambiarMensaje3(this.actorCard);
    this.data.cambiarMensaje3(this.arregloTabla);
  }
}
