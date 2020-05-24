import { PedidoDetalle } from './pedidoDetalle';
import { Productos } from './productos';

export class Pedidos{
    pedidoId: number;
    clienteId: number;
    nombreCliente: string;
    totalDelPedido: number;
    pedidoDetalle: Array<PedidoDetalle>;

    
    constructor(datos?: Pedidos){
        if (datos != null) {
            this.pedidoId = datos.pedidoId;
            this.clienteId = datos.clienteId;
            this.nombreCliente = datos.nombreCliente;
            this.totalDelPedido = datos.totalDelPedido;
            this.pedidoDetalle = datos.pedidoDetalle;
            return;    
        }

        this.pedidoId = this.pedidoId;
        this.clienteId = this.clienteId;
        this.nombreCliente = this.nombreCliente;
        this.totalDelPedido = this.totalDelPedido;
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }
    
    agregarProductos(producto: Productos){
        let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
        pedidoDetalle.cantidad = 1;
        pedidoDetalle.nombre = producto.nombre;
        pedidoDetalle.productoId= producto.productoId;
        pedidoDetalle.precio = producto.precio;
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;
        
        let existe: number = this.pedidoDetalle.filter(
            x=> x.productoId == producto.productoId).length;
        if (existe > 0) {
            let posicion: number = this.pedidoDetalle.findIndex(x=>
                x.productoId == producto.productoId);
            this.pedidoDetalle[posicion].cantidad++;
            this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio;       
        } else {
            this.pedidoDetalle.push(pedidoDetalle);
        }
        this.actualizarTotal();        
    }

    private actualizarTotal(){
        this.totalDelPedido = 0;
        // for(let producto of this.pedidoDetalle){
        //     this.totalDelPedido = this.totalDelPedido + producto.total;
        // }
        this.pedidoDetalle.forEach(producto=>{
            this.totalDelPedido = this.totalDelPedido + producto.total;
        })
    }

    public actualizarCantidad(posicion: number){
        this.pedidoDetalle[posicion].total = 
        this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio;
        this.actualizarTotal();
    }
    
}