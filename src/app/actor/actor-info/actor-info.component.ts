import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.css']
})
export class ActorInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarElementos() {

    const mostrarFormDetalle = <HTMLFormElement>document.getElementById('formDetalle');
    mostrarFormDetalle.style.display = 'block';

    const mostrarTarjeta = <HTMLFormElement>document.getElementById('tarjeta');
    mostrarTarjeta.style.display = 'block';


  }

}
