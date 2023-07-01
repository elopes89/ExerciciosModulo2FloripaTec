import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  childData: string = "";
  @Output() childString: EventEmitter<string> = new EventEmitter();

  @Input() msgFilho: any;

 constructor(private routes: Router) {
 }
  ngOnInit(): void {}

SendData(){
  this.childString.emit(this.childData);
  // this.routes.navigate(['/private/resultPai']);
}

}
