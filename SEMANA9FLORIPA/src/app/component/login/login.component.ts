import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private as: AuthService) { }
  emailForm!: FormGroup;
  logins: any = [];

  enviar() {
    if (this.emailForm.invalid) {
      return;
    }
    this.saveData();
    this.loadData();
    this.goToHome();

  }

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  get email() {
    return this.emailForm.get('email')!;
  }

  session: any;
  loadData() {
    let data: any = localStorage.getItem('email');
    this.session = JSON.parse(data);
  }
  data: any = [];
  saveData() {
    this.data = this.emailForm.value;
    localStorage.setItem('email', JSON.stringify(this.data));
  }




  goToHome() {
    this.as.isLoggedIn = true;
    this.router.navigate(['/private/home']);

  }
  
}
