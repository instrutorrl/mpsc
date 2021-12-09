import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Exportar dados do formulário
  @Output() enviarDadosCliente = new EventEmitter();

  // Formulário
  grupo = new FormGroup({
    nome  : new FormControl(''),
    idade : new FormControl('')
  });

  // Cadastrar
  cadastrar(){
    this.enviarDadosCliente.emit(this.grupo.value);
  }

}
