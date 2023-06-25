import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-forms',
  templateUrl: './new-forms.component.html',
  styleUrls: ['./new-forms.component.css']
})
export class NewFormsComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  filmeFavorito = '';

  OnSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.filmeFavorito = ''
      return;
    }else
    this.filmeFavorito = this.registerForm.get('nomeFilme')?.value;
  }

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      nomeFilme: ['', [Validators.required, Validators.minLength(2)]],
      avaliacao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
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



