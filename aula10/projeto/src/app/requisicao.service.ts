import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  // Construtor
  constructor(private http:HttpClient) { }

  // Realizar a requisição dos comentários
  obterComentarios():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/comments', {observe:'response'})
    .pipe(map(retorno => {
      if(retorno.status === 200){
        return {'mensagem':'ok', 'vetor':retorno.body}
      }else{
        return {'mensagem':'falha'}
      }
    }));
  }

  

}
