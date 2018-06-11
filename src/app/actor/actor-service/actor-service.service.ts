import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import index from '@angular/cli/lib/cli';

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  private fuenteMensaje = new BehaviorSubject<any>([]);

  private fuenteMensaje2 = new BehaviorSubject<any>([]);

  private fuenteMensaje3 = new BehaviorSubject<any>([]);

  private indice = new BehaviorSubject<number>(0);


  mensajeActual = this.fuenteMensaje.asObservable();
  mensajeActual2 = this.fuenteMensaje2.asObservable();
  mensajeActual3 = this.fuenteMensaje3.asObservable();
  mensajeIndice = this.indice.asObservable();

  constructor() { }

  cambiarMensaje(mensaje) {
    this.fuenteMensaje.next(mensaje);
  }

  cambiarMensaje2(mensaje) {
    this.fuenteMensaje2.next(mensaje);
  }

  cambiarMensaje3(mensaje) {
    this.fuenteMensaje3.next(mensaje);
  }

  setIndice(mensaje) {
    this.indice.next(mensaje);
  }

  getIndice() {
    return this.indice;
  }
}
