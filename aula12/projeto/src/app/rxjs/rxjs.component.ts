import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { Comentario } from '../modelo/Comentario';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  // Construtor
  constructor(private http:HttpClient) { }

  // Ao iniciar
  ngOnInit(): void {
    this.dobrarValores();

    this.filtrarNomes();
    this.filtragemNomes = this.nomes;

    this.listarComentarios();

    this.listarComentarios();
  }

  // Função para dobrar valores
  valores:number[] = [];
  
  dobrarValores(){
    of(2, 7, 9, 15)
    .pipe(map(numero => {return numero * 2}))
    .subscribe(valor => {this.valores.push(valor)})
  }

  // Função para filtrar
  campo = new FormControl();

  nomes:string[] = ["Larissa", "Ralf", "Jaison", "Fernanda", "Robson"];
  filtragemNomes:string[] = [];

  filtrarNomes(){
    of(this.nomes)
    .pipe(map(n => n.filter(nome => {return nome.toLowerCase().includes(this.campo.value.toLowerCase())} )))
    .subscribe(retorno => {this.filtragemNomes = retorno})
  }

  // ForEach
  vetorComentarios:Comentario[] = [];
  mensagem:string = '';
  exibir:boolean = true;

  urlPesquisa():Observable<Comentario[]>{
    return this.http.get<Comentario[]>('https://jsonplaceholder.typicode.com/comments');
  }

  listarComentarios(){
    this.urlPesquisa()
    .forEach(retorno => {this.vetorComentarios = retorno})
    .then(() => {this.mensagem = 'Comentários carregados!'})
    .catch(() => {this.mensagem = 'Falha ao carregar os comentários'})
    .finally(() => {this.exibir = false});
    
  }


}
