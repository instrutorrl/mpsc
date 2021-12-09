import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Obter os dados do cliente
  obterDadosCliente(obj:any){
    this.vetor.push(obj);
  }

  // Vetor
  vetor:any[] = [
    {'nome':'Juliana', 'idade':32},
    {'nome':'Daniel',  'idade':19},
    {'nome':'Marcela', 'idade':38}
  ];

}
