import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atividade2',
  templateUrl: './atividade2.component.html',
  styleUrls: ['./atividade2.component.css']
})
export class Atividade2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cidade = new FormControl('');

  acao(){
    alert(this.cidade.value);
  }

}
