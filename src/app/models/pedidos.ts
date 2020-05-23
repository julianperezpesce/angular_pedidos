import { PedidoDetalle } from './pedidoDetalle';

export class Pedidos{
    clienteId: number;
    nombreCliente: string;
    totalDelPedido: number;
    pedidoDetalle: Array<PedidoDetalle>;

    constructor(){
        this.clienteId = this.clienteId;
        this.nombreCliente = this.nombreCliente;
        this.totalDelPedido = this.totalDelPedido;
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }
}