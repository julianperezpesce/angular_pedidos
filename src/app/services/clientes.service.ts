import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }


  agregarClienteLocalStorage(cliente: Clientes){
    let clientesAnteriores: Clientes[] = this.clientesLocalStorage;
    clientesAnteriores.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientesAnteriores))
  }

  get clientesLocalStorage(): Clientes[]{
    let obtenerClientesDeLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('clientes'));
    if (obtenerClientesDeLocalStorage == null) {
      return new Array<Clientes>();
    }
  }

}


