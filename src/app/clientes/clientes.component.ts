import { Component, OnInit } from '@angular/core';


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

  // clientes: Array<Clientes> = new Array<Clientes>();
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

    // this.productos.push(
    //   {nombre: "Maiz", precio: 30},
    //   {nombre: "Agua mineral", precio: 80}
    // )

    // this.clientes = this.clientesLocales;
  }

  guardarCliente(){
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push({
        nombre: "Julián",
        apellido: "Pérez Pesce",
        edad: 35
      },
      {
        nombre: "Maria José",
        apellido: "Gonzales",
        edad: 26
      })

     localStorage.setItem("cliente", JSON.stringify(clientesAgregar));
  }

  guardarProducto(){
    localStorage.setItem("producto", JSON.stringify(this.productos));
  }

  // leer(){
  //   this.clientes = JSON.parse(localStorage.getItem("cliente"));
  //   this.productos = JSON.parse(localStorage.getItem("producto"));
  // }

  eliminarCliente(){
    localStorage.removeItem("cliente");
  }
  eliminarProducto(){
    localStorage.removeItem("producto");
  }
  eliminarTodo(){
    localStorage.clear();
  }

  get clientesLocales(): Clientes[]{
     let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('cliente'));
    if (clientesLocalStorage == null) {
      return new Array<Clientes>();
    }
     return clientesLocalStorage;
  }

}
