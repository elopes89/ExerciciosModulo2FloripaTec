import { HttpClient } from '@angular/common/http';
import { NotService } from 'src/app/services/not-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { INot } from 'src/INot';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private ns: NotService, private http: HttpClient) {

  }
  registerForm!: FormGroup;
  submitted = false;
  envioNot = '';
  ttt: string = '';
  notifObj: INot =
    {
      id: 0,
      titulo: this.ttt,
      subTitulo: "American",
      data: new Date(),
      lido: false,
    }



  OnSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.envioNot = ''
      return;
    }else
    this.envioNot = this.registerForm.get('titulo')?.value;
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      subTitulo: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

addNot(){
  this.ns.add(this.notifObj).subscribe(nota =>{
    console.log(nota);
  })
}

  get titulo() {
    return this.registerForm.get('titulo')!;
  }

  get subTitulo() {
    return this.registerForm.get('subTitulo')!;
  }

}


// @Component({
//   selector: 'app-notification-list',
//   templateUrl: './notification-list.component.html',
//   styleUrls: ['./notification-list.component.scss'],
// })
// export class NotificationListComponent implements OnInit {
//   constructor(private ns: NotService, private http: HttpClient) {
//     this.buscar();
//   }

//   cVisto = '';
//   list = 0;
//   notificacoes: Array<INot> = [
//     {
//       id: 0,
//       titulo: 'Dogs',
//       subTitulo: 'Bully',
//       data: new Date(),
//       lido: false,
//     },
//   ];
// ik = 0;
//   del = 0;
//   pr() {
//     for (let i = 0; i < this.notificacoes.length; i++) {
//       if (this.notificacoes[i].lido == true) {
//         this.cVisto = 'cVisto';
//       } else {
//         this.cVisto = '';
//         this.notificacoes[i].lido = false;
//       }
//     }
//   }
//   Conferir(e: number) {
//     this.notificacoes[e].lido = true;

//   }

//   buscar() {
//     this.ns.getAll().subscribe((not) => {
//       this.notificacoes = not;
//       console.log(this.notificacoes);
//     });
//   }
//   ngOnInit(): void {}
// }


// constructor(private formBuilder: FormBuilder, private ns: NotService, private http: HttpClient) {

// }
// registerForm!: FormGroup;
// submitted = false;
// envioNot = '';
// notifObj: INot =
//   {
//     id: 0,
//     titulo: "ttt"
//     subTitulo: "American",
//     data: new Date(),
//     lido: false,
//   }



