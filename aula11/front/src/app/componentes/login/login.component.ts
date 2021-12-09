import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequisicaoService } from 'src/app/requisicao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Construtor
  constructor(private requisicao:RequisicaoService, private rota:Router) { }

  // Ao iniciar
  ngOnInit(): void {

    // Caso haja as credenciais de acesso no localstorage
    if(localStorage.getItem('usuario') !== null){
      this.rota.navigate(['admin']);
    }
    
  }

  // Formulário
  grupo = new FormGroup({
    nome : new FormControl(),
    senha : new FormControl()
  });

  // Efetuar login
  login(){
    this.requisicao.autenticar(this.grupo.value)
    .subscribe(retorno => {
     
      if(retorno.id !== undefined){
        localStorage.setItem('usuario', JSON.stringify(retorno));
        this.rota.navigateByUrl('/admin');
        //this.rota.navigate(['admin'])
        //window.location.assign('http://localhost:4200/admin');
      }else{
        alert('Usuario ou senha incorretos.');
      }

    });
  }

}
