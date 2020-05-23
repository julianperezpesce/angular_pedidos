import { PedidoDetalle } from './pedidoDetalle';

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
}