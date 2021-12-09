import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  // Construtor
  constructor() { }

  // Ao iniciar
  ngOnInit(): void {
  }

  // Vetores
  nomes:string[] = ['Ralf', 'Alessandra', 'AnDerson', 'JuLIana', 'AndreSSA']
  precos:number[] = [2.60, 7.55, 4.30, 9];

}
