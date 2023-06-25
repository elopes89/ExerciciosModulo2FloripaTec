import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ImagePath: string;
  constructor(){
    this.ImagePath = 'https://www.uplers.com/wp-content/uploads/2022/05/AngularJs-Frameworks-891x505.jpg'
  }
  ngOnInit(): void {
  }

}
