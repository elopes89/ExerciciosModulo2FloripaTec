import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(){}

  anoCriacao = 2023;
  empresa = 'DG Enterprises';


  ngOnInit(): void {}

}
