import { Component, OnInit } from '@angular/core';
import { IFilme } from 'src/IFilme';
import { ListService } from 'src/app/services/list.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.css']
})
export class RequisicaoComponent implements OnInit {
  idColocado = 1;
  carregado = true;
  mostrarOc = true;
  testeArray: Array<IFilme> = [];
  testeFilter: Array<IFilme> = [];
  arr2: Array<IFilme> = [];
  porId: number = 0;

  filme: IFilme = {
    id: 0,
    nome: "Eu",
    nomeFilme: "InterEstelar",
    ocorrencias: 0
  };

  constructor(private listService: ListService, private http: HttpClient) {
    this.getFilmes();
  }
  getFilmes() {
    this.mostrarOc = true;
    this.testeFilter = [];
    this.carregado = true;
    this.listService.getAll().subscribe(filmes => {
      this.testeArray = filmes;
      this.findOcc(this.testeArray, this.key);
      this.carregado = false;
    });

  }

  getId: {} = {};
  getPorId(id: number): void {
    id = this.porId;
    this.carregado = true;
    this.listService.obterPorId(id).subscribe(filmes => {
      this.getId = filmes;
      this.carregado = false;
    });
  }

  removeFilme(deletarId: number): void {
    this.listService.remove(deletarId).subscribe(movies => {
      for (const idDel of this.testeArray) {
        deletarId = idDel.id;
      }
      console.log(movies);
      this.getFilmes();
    })

  }

  addFilme() {
    this.listService.adicionar(this.filme)
      .subscribe(filmes => {
        console.log(filmes);
      });
  }

  ngOnInit(): void {
  }

  key: any = 'nomeFilme';

  times() {
    this.getFilmes();
    this.order();
    this.TirandoIguais();

  }
  findOcc(arr: any, key: any) {
    let a: any = {};
    arr.forEach((x: any) => {
      if (this.testeArray.some((val: any) => {
        return val[key] == x[key]
      })) {
        arr.forEach((k: any) => {
          if (k[key] === x[key]) {
            k["ocorrencias"]++
          }
        })
      } else {
        a[key] = x[key]
        a["ocorrencias"] = 1
        this.arr2.push(a);
      }
    })
    return arr;
  }

  aux = '';
  auxPodium = 0;
    TirandoIguais() {
    this.mostrarOc = false;
    for (let i = 0; i < this.testeArray.length; i++) {
      if (this.testeArray[i].nomeFilme !== this.aux) {
        this.testeFilter.push(this.testeArray[i]);
        this.order()      }
      this.aux = this.testeArray[i].nomeFilme;
    }
  }
order(){
this.testeFilter.sort(function (a, b) {
    if (a.ocorrencias < b.ocorrencias) {
      return 1;
    }
    if (a.ocorrencias > b.ocorrencias) {
      return -1;
    }
    return 0;
  })}

Avancar(){
  if(this.auxPodium < this.testeFilter.length - 1)
this.auxPodium = this.auxPodium +1;
}

Voltar(){
  if(this.auxPodium > 0)
this.auxPodium = this.auxPodium -1;
}

}
