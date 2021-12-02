import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atividade3',
  templateUrl: './atividade3.component.html',
  styleUrls: ['./atividade3.component.css']
})
export class Atividade3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agruparForm = new FormGroup({
    nome   : new FormControl(null),
    cidade : new FormControl(null),
    idade  : new FormControl(null)
  });

  vetor:any = [];

  textoAlerta:string = '';
  estiloAlerta:string = '';

  cadastrar(){

    if(this.agruparForm.value.nome === null){
      this.textoAlerta = 'Favor informar o campo nome';
      this.estiloAlerta = 'alert alert-danger';
    }else if(this.agruparForm.value.cidade === null){
      this.textoAlerta = 'Favor informar o campo cidade';
      this.estiloAlerta = 'alert alert-danger';
    }else if(this.agruparForm.value.idade === null){
      this.textoAlerta = 'Favor informar o campo idade';
      this.estiloAlerta = 'alert alert-danger';
    }else{
      this.vetor.push(this.agruparForm.value);
      this.agruparForm.reset();
      this.textoAlerta = 'Cadastro efetuado com sucesso!';
      this.estiloAlerta = 'alert alert-success';
    }
  }

  remover(indice:number){
    this.vetor.splice(indice, 1);
    this.textoAlerta = 'Removido com sucesso!';
    this.estiloAlerta = 'alert alert-success'
  }

}