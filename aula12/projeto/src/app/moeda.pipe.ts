import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

  transform(preco:number): string {
    return preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
  }

}
