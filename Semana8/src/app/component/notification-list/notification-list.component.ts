import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { INot } from 'src/INot';
import { NotService } from 'src/app/services/not-service.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  constructor(private ns: NotService, private http: HttpClient) {
    this.buscar();
  }
  notifObj: INot = {
    lido: false,
    data: new Date(),
  };

  cVisto = '';
  notificacoes: Array<INot> = [];
  buscar() {
    this.ns.getAll().subscribe((not) => {
      this.notificacoes = not;
      console.log(this.notificacoes);
    });
  }

  addNot() {
    this.ns.add(this.notifObj).subscribe((nota) => {
      console.log(nota);
      this.notificacoes.push(nota);
      console.log('notif: ' + this.notificacoes);
    });
  }

  removeNot(delId: number): void {
    this.ns.remove(this.notificacoes[delId].id).subscribe((nota) => {
      this.notifObj = nota;
      this.buscar();
    });
  }

  Conferir(e: number): void {
    this.notificacoes[e].lido = true;
    this.notifObj.lido = this.notificacoes[e].lido;
  }
  ngOnInit(): void {}
}
