import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor1: any;
  valor2: any;
  valor3: any;
  resultado: string | undefined;

  constructor(){
    this.valor1 = "?";
    this.valor2 = "?";
    this.valor3 = "?";
  }

  numRandom(): number
  {
    return Math.floor(Math.random()*6) + 1;
  }

  tirar()
  {
    this.valor1 = this.numRandom();
    this.valor2 = this.numRandom();
    this.valor3 = this.numRandom();

    if(this.valor1 == this.valor2 && this.valor2 == this.valor3)
    {
      this.resultado = "Ha ganado!";
    }
    else
    {
      this.resultado = "Ha perdido."
    }
  }
}
