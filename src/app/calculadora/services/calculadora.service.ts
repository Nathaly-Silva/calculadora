import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Define as constantes (caracteriza a contante é a palavra READONLY-somente leitura) 
  utilizadas para identificar as operações de calculo. 
  Constante pode ser escrita em letra minuscula. 
  Com Static consigo chamar o nome da classe. classe CalculadoraService. + o nome da constante*/

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';


  constructor() { }

  calcular(num1: number, num2: number, operacao: string) : number {
    let resultado: number; //armazena o resultado da operação
    
    switch(operacao){
      case CalculadoraService.SOMA: //CalculadoraService acessa devido a constate static
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default: //caso de operacao invalida
        resultado = 0;    
    }

    return resultado;
  }
}
