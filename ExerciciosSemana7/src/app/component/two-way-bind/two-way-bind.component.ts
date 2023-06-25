import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.css']
})
export class TwoWayBindComponent implements OnInit {

  userName: string = '';
  para = '';

  fator1: number = 0;
  fator2: number = 0;
  resultado: number = 0;


  Somar() {
    this.resultado = this.fator1 + this.fator2;
  }

  Subtrair() {
    this.resultado = this.fator1 - this.fator2;
  }

  Multiplicar() {
    this.resultado = this.fator1 * this.fator2;
  }

  Dividir() {
    this.resultado = this.fator1 / this.fator2;
  }

  Limpar(){
    this.resultado = 0;
    this.fator1 = 0;
    this.fator2 = 0;
  }


  ngOnInit(): void { }

}
