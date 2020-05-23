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

  agregarProducto(producto: Productos){
    let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
    pedidoDetalle.cantidad = 1;
    pedidoDetalle.nombre = producto.nombre;
    pedidoDetalle.precio = producto.precio;
    pedidoDetalle.productoId = producto.productoId;
    pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;
    this.pedido.pedidoDetalle.push(pedidoDetalle);
  }

}
