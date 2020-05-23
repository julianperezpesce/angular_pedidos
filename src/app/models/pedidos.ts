import { PedidoDetalle } from './pedidoDetalle';
import { Productos } from './productos';

export class Pedidos{
    pedidoId: number;
    clienteId: number;
    nombreCliente: string;
    totalDelPedido: number;
    pedidoDetalle: Array<PedidoDetalle>;

    
    constructor(){
        this.pedidoId = this.pedidoId;
        this.clienteId = this.clienteId;
        this.nombreCliente = this.nombreCliente;
        this.totalDelPedido = this.totalDelPedido;
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }
    
    agregarProductos(producto:Productos){
        let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
        pedidoDetalle.cantidad = 1;
        pedidoDetalle.nombre = producto.nombre;
        pedidoDetalle.productoId= producto.productoId;
        pedidoDetalle.precio = producto.precio;
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;
        this.pedidoDetalle.push(pedidoDetalle);
    }
    
}