import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pedido: Pedidos = new Pedidos();
    pedido.clienteId = 1;
    pedido.nombreCliente = "Juan";
    pedido.totalDelPedido = 1500;
    pedido.pedidoDetalle.push({
      productoId : 1,
      nombre: "Mouse",
      cantidad: 1,
      precio: 200,
      total: 200 
    })
  }

}
