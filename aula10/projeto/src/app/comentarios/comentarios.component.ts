import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  // Construtor
  constructor(private requisicao:RequisicaoService) { }

  // Ao iniciar
  ngOnInit(): void {
    this.listar();
  }

  // Vetor de comentários
  vetor:any[] = [];

  // Status da requisição
  status:string = '';

  // Método para obter os comentários
  listar(){
    this.requisicao.obterComentarios()
    .subscribe(retorno => {
      this.status = retorno.mensagem;
      this.vetor = retorno.vetor;
    });
  }

}
