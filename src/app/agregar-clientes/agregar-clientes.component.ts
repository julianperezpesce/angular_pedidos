import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clientes } from '../models/clientes';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {

  formularioAgregar: FormGroup;
  cliente: Clientes= new Clientes();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioAgregar = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]

    })
  }

  agregar(){
    this.cliente = this.formularioAgregar.value as Clientes;
  }

}
