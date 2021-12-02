import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade1',
  templateUrl: './atividade1.component.html',
  styleUrls: ['./atividade1.component.css']
})
export class Atividade1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  texto:string = '';

  acao(){
    alert(this.texto);
  }
}
