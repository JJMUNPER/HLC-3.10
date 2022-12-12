import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1:number=0;
  num2:number=0;
  resultado:number=0;

  // La suma del constructor da algun tipo de fallo, porque en lugar de sumar concatena ambos numeros

  constructor(){}
    suma(){
      this.resultado=this.num1 + this.num2;
    }

    resta(){
      this.resultado=this.num1 - this.num2;
    }

    multiplicacion(){
      this.resultado=this.num1 * this.num2;
    }

    division(){
      this.resultado=this.num1 / this.num2;
    }

    reinicio(){
      this.num1=0;
      this.num2=0;
      this.resultado=0;

    }
}

