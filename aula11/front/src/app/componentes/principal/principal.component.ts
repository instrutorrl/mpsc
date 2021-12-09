import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  // Construtor
  constructor() { }

  // Ao iniciar
  ngOnInit(): void {
  }

  // Vetor de postagens
  postagens:any[] = [
    {'titulo':'Postagem 1', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 2', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 3', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 4', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 5', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 6', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 7', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 8', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 9', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    {'titulo':'Postagem 10', 'texto':'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
  ];
}
