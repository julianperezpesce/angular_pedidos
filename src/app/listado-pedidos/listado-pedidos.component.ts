import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedidos } from '../models/pedidos';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {

  listadoPedidos: Pedidos[] = new Array<Pedidos>();
  constructor(public pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.listadoPedidos = this.pedidosService.listadoPedidoEnLocalStorage;
  }

}
