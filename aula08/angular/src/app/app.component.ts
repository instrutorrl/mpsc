import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Mensagem
  texto = 'Hello Angular!';

  // Visibilidade de elementos
  visivel = true;

  // Vetor de nomes
  nomes = ['Alice', 'Aline', 'André', 'Carla', 'Gabriel'];

  // Implementar classe CSS
  classe = 'fundoAzul';

  // JSON
  contatos = [
    {'nome':'Alice',   'cidade':'Joinville'},
    {'nome':'Aline',   'cidade':'Florianópolis'},
    {'nome':'André',   'cidade':'São José'},
    {'nome':'Carla',   'cidade':'Balneário Camboriú'},
    {'nome':'Gabriel', 'cidade':'Blumenau'}
  ];

  // Objeto para manipular um campo de formulário
  campoTexto = new FormControl('');

  // Função para alterar o texto
  alterarTexto(){
    this.texto = 'Você clicou no botão';
  }

  // Função para alterar o valor da visibilidade
  alterarVisivel(){
    this.visivel = !this.visivel;
  }

  // Função para alterar as classes
  alterarClasse(){
    this.classe = this.classe === 'fundoAzul' ? 'fundoAmarelo' : 'fundoAzul';
  }

}
