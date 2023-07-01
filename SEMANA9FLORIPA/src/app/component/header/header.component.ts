import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private routes: Router,private as: AuthService){}

  out() {
    this.as.isLoggedIn = false;
    this.routes.navigate(['/public/login'])
  }
  ngOnInit(): void {
  }

}
