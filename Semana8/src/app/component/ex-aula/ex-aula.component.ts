import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-aula',
  templateUrl: './ex-aula.component.html',
  styleUrls: ['./ex-aula.component.scss']
})
export class ExAulaComponent implements OnInit{
  ngOnInit(): void {
  }

  resultado = 0;

  Mais(){
    this.resultado = this.resultado + 1;
  }

  Menos(){
    this.resultado = this.resultado - 1;
  }

  result = 0;
}
