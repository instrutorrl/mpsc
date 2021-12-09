import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RequisicaoService } from 'src/app/requisicao.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // Construtor
  constructor(private requisicao:RequisicaoService) { }

  // Ao iniciar o componente
  ngOnInit(): void {
    this.obterPostagens();
  }

  // Vetor
  postagens:any[] = [];

  // Grupo - Formulário
  grupo = new FormGroup({
    titulo : new FormControl(),
    segmento : new FormControl(),
    texto: new FormControl()
  });

  // Obter postagens
  obterPostagens(){
    this.requisicao.listar()
    .subscribe(retorno => this.postagens = retorno);
  }

  // Remover postagem
  // removerPostagem(id:number){
  //   this.requisicao.remover(id)
  //   .subscribe(() => {
  //     var linha = this.postagens.findIndex((obj) => { return obj.id === id});
  //     this.postagens.splice(linha, 1);
  //   });
  // }

  // Remover postagem
  removerPostagem(indice:number){

    // Obter o id da postagem no vetor
    var indicePostagem = this.postagens[indice].id;

    // Requisição para remover
    this.requisicao.remover(indicePostagem)
    .subscribe(() => {

      // Remover do vetor
      this.postagens.splice(indice, 1);
    });
  }

  // Cadastrar postagem
  cadastrarPostagem(){
    this.requisicao.cadastrar(this.grupo.value)
    .subscribe(retorno => this.postagens.push(retorno));
  }

}

