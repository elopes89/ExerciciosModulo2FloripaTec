import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

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
  ngOnInit(): void {}
}
