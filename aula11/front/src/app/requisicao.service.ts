import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  // Construtor
  constructor(private http:HttpClient) { }

  // Autenticar usuário
  autenticar(obj:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/autenticar', obj);
  }

  // Obter postagens
  listar():Observable<any>{
    return this.http.get<any>('http://localhost:8080/listar');
  }

  // Remover postagens
  remover(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/remover/${id}`);
  }

  // Cadastrar postagens
  cadastrar(obj:any):Observable<any>{
    return this.http.post('http://localhost:8080/cadastrar', obj);
  }

}
