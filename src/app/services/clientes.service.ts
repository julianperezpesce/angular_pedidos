import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }


  agregarClienteLocalStorage(cliente: Clientes){
    localStorage.setItem('clientes', JSON.stringify(cliente))
  }
}


