import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();
  constructor(public clientesServicio: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage;
  }

  buscarCliente(event){
    let buscarNombre: string = event.target.value;
   this.clientes = this.clientesServicio.clientesLocalStorage.filter(x=> {
     return x.nombre.toLowerCase().includes(buscarNombre);
   })
    
  }

}
