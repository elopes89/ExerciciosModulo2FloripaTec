import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  email: string = '';
  troca = false;
  nome = '';
  userNome = '';

  Enviar() {
    if (this.email !== '') {
      this.troca = true;
      this.userNome = this.email;
    }
  }

  Limpar() {
    this.email = '';
    this.nome = '';
    this.userNome = '';
  }

  constructor() { }

  ngOnInit(): void {

  }
}
