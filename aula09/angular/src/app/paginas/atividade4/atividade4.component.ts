import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade4',
  templateUrl: './atividade4.component.html',
  styleUrls: ['./atividade4.component.css']
})
export class Atividade4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alerta(parametro:string):void{
    alert(parametro);
  }

}
