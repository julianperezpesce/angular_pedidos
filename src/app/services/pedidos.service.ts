import { Injectable } from '@angular/core';
import { Pedidos } from '../models/pedidos';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido: Pedidos = new Pedidos();
  constructor() {
    this.pedido = this.ultimoPedido;
   }

  guardarLocalStorage(){
    localStorage.setItem('ultimoPedido', JSON.stringify(this.pedido));
  }

  get ultimoPedido(): Pedidos{
    let pedidoLocalStorage: Pedidos = new Pedidos(JSON.parse(localStorage.getItem('ultimoPedido')));
    if (pedidoLocalStorage == null) {
      return new Pedidos();
    } 
    return pedidoLocalStorage;
  }

  guardarPedido(){
    let listadoPedidos: Pedidos[] = new Array<Pedidos>();
    listadoPedidos.push(this.pedido)
    localStorage.setItem('pedidos', JSON.stringify(listadoPedidos));
  }

  

}
