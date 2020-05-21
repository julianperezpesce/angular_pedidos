import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre: string,
  apellido: string,
  edad: number
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();
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
  }

  guardarCliente(){
    localStorage.setItem("cliente", JSON.stringify(this.clientes));
  }
}
