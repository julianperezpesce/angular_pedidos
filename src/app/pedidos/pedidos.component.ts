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

  constructor(public pedidosService: PedidosService) { }

  ngOnInit(): void {
    
  }

  calcularTotal(posicion){

    this.pedidosService.pedido.actualizarCantidad(posicion);
    this.pedidosService.guardarLocalStorage();
  }


}
