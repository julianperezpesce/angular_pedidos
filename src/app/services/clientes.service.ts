import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }


  agregarClienteLocalStorage(cliente: Clientes){
    let clientesAntiguos: Clientes[] = this.clientesLocalStorage;
    clientesAntiguos.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(cliente))
  }

  get clientesLocalStorage(): Clientes[]{
    let obtenerClientesDeLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('clientes'));
    if (obtenerClientesDeLocalStorage == null) {
      return new Array<Clientes>();
    }
  }

}


