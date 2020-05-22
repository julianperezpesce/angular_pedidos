import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public clientesServicio: ClientesService) { }

  ngOnInit(): void {
  }

}
