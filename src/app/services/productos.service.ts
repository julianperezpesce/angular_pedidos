import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregarProductoLocalStorage(producto: Productos){
    let productosAnteriores: Productos[] = this.productosLocalStorage;
    producto.productoId = productosAnteriores.length +1;
    productosAnteriores.push(producto);

    localStorage.setItem('productos', JSON.stringify(productosAnteriores))
  }

  get productosLocalStorage(): Productos[]{
    let obtenerProductosDeLocalStorage: Productos[] = JSON.parse(localStorage.getItem('productos'));
    if (obtenerProductosDeLocalStorage == null) {
      return new Array<Productos>();
    }
    return obtenerProductosDeLocalStorage;
  }
}
