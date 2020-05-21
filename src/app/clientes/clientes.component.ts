import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

interface Clientes{
  nombre: string,
  apellido: string,
  edad: number
}

interface Productos{
  nombre: string,
  precio: number
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();
  productos: Array<Productos> = new Array<Productos>();

  constructor() { }

  ngOnInit(): void {
    // this.clientes.push({
    //   nombre: "Julián",
    //   apellido: "Pérez Pesce",
    //   edad: 35
    // },
    // {
    //   nombre: "Maria José",
    //   apellido: "Gonzales",
    //   edad: 26
    // })

    this.productos.push(
      {nombre: "Maiz", precio: 30},
      {nombre: "agua mineral", precio: 80}
    )
  }

  guardarCliente(){
    localStorage.setItem("cliente", JSON.stringify(this.clientes));
  }

  guardarProducto(){
    localStorage.setItem("producto", JSON.stringify(this.productos));
  }

  leer(){
    this.clientes = JSON.parse(localStorage.getItem("cliente"));
    this.productos = JSON.parse(localStorage.getItem("producto"));    
  }

}
