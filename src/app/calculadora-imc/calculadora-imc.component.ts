import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraIMCComponent {
  num1 : number = 0;
  num2 : number = 0;
  res : number = 0;

  calc(){
    this.res= this.num1 / (this.num2 * this.num2);


    if (this.res < 18.5) {
      alert(`Seu IMC é ${this.res.toFixed(2)}. Você está na categoria Magreza.`);
    } else if (this.res >= 18.5 && this.res < 25) {
      alert(`Seu IMC é ${this.res.toFixed(2)}. Você está na categoria Normal.`);
    } else if (this.res >= 25 && this.res < 30) {
      alert(`Seu IMC é ${this.res.toFixed(2)}. Você está na categoria Sobrepeso.`);
    } else if (this.res >= 30 && this.res < 35) {
      alert(`Seu IMC é ${this.res.toFixed(2)}. Você está na categoria Obesidade Grau 1.`);
    } else if (this.res >= 35 && this.res < 40) {
      alert(`Seu IMC é ${this.res.toFixed(2)}. Você está na categoria Obesidade Grau 2.`);
    } else {
      alert(`Seu IMC é ${this.res.toFixed(2)}. Você está na categoria Obesidade Grau 3.`);
    }
 }
}
