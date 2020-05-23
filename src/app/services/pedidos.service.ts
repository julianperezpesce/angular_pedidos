import { Injectable } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { Productos } from '../models/productos';
import { PedidoDetalle } from '../models/pedidoDetalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedidos = new Pedidos();

  constructor() { }

 
}
