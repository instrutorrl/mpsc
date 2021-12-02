import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/requisicao.service';

@Component({
  selector: 'app-atividade5',
  templateUrl: './atividade5.component.html',
  styleUrls: ['./atividade5.component.css']
})
export class Atividade5Component implements OnInit {

  constructor(private requisicao:RequisicaoService) { }

  ngOnInit(): void {
    this.executarListar();
  }

  vetor:any = [];

  executarListar(){
    this.requisicao.listar()
    .subscribe(retorno => this.vetor = retorno); 
  }

}
