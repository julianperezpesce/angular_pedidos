import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Array<Productos> = new Array<Productos>();

  constructor(public productosServicio: ProductosService,
     public pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.productos = this.productosServicio.productosLocalStorage;

  }

  buscarProducto(event){
    let buscarNombre: string = event.target.value;
    this.productos = this.productosServicio.productosLocalStorage.filter(x=>{
      return x.nombre.toLowerCase().includes(buscarNombre.toLowerCase());
    })
  }

  agregar(producto: Productos){
    this.pedidosService.pedido.agregarProductos(producto);
    console.log(this.pedidosService.pedido);
    
  }


}
