import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-pai',
  templateUrl: './resultado-pai.component.html',
  styleUrls: ['./resultado-pai.component.scss']
})
export class ResultadoPaiComponent implements OnInit {

constructor(){}

  msgPai = [
    {
      nome: 'testePai',
      tipo: 'drama',
    },
    {
      nome: 'testePai22',
      tipo: 'drama',
    },
    {
      nome: 'testePai22+1',
      tipo: 'drama',
    },
  ];

  nomeFilho = '';
  RecebeData(event: string) {
    console.log(event);
    this.nomeFilho = event;
  }

  ngOnInit(): void {}

}
