import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste-form',
  templateUrl: './teste-form.component.html',
  styleUrls: ['./teste-form.component.css']
})
export class TesteFormComponent {

  registerForm!: FormGroup;
  submitted = false;
  filmeFavorito = '';
  OnSubmit() {
    if (this.registerForm.invalid) {
      return;
    } else {
      this.filmeFavorito = this.registerForm.get('nomeFilme')?.value;

    }
  }




  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nomeFilme: new FormControl('', [Validators.required, Validators.minLength(3)]),
      avaliacao: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }


  get nomeFilme() {
    return this.registerForm.get('nomeFilme')!;
  }

  get nome() {
    return this.registerForm.get('nome')!;
  }


  get email() {
    return this.registerForm.get('email')!;
  }

  get avaliacao() {
    return this.registerForm.get('avaliacao')!;
  }


}
