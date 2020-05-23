import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../services/pedidos.service';
import { Productos } from '../models/productos';
import { PedidoDetalle } from '../models/pedidoDetalle';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  // pedido: Pedidos = new Pedidos();
  constructor(public pedidosService: PedidosService) { }

  ngOnInit(): void {
    
  }

  // agregarProducto(producto: Productos){
  //   let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
  //   pedidoDetalle.cantidad = 1;
  //   pedidoDetalle.nombre = producto.nombre;
  //   pedidoDetalle.precio = producto.precio;
  //   pedidoDetalle.productoId = producto.productoId;
  //   pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;
  //   this.pedido.pedidoDetalle.push(pedidoDetalle);
  // }

}
