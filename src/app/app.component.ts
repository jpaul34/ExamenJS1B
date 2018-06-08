import {Component, ViewChild} from '@angular/core';
import {ActorFormComponent} from './actor/actor-form/actor-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  // @ViewChild('actorComponent') actor: ActorFormComponent;
  //
  // arregloAct = [];
  // arregloPeli = [];
  // arregloT = [];
  //
  // agregarActor() {
  //   this.arregloAct.push(this.actor.obtenerDatosActor());
  //   console.log(this.arregloAct);
  // }

  // alerta(evento) {
  //   //   console.log('Evento: ', evento); // true
  //   //   alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  //   // agregarActor();
  //   // this.arregloAct=this.actor.obtenerDatosActor();
  //
  //   // console.log(this.arregloAct);
  //   // console.log(this.actor.obtenerDatosActor());
  // }
}
