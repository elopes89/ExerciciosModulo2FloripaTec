import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilme } from 'src/IFilme';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  filmes: IFilme[] = [];
  constructor(private httpClient: HttpClient) { }

  remove(id: number){
    return this.httpClient.delete<IFilme>(`${API_PATH}Filmes/${id}`);
  }

  obterPorId(id: number): Observable<IFilme> {
    return this.httpClient.get<IFilme>(`${API_PATH}Filmes/${id}`);
  }

  getAll(): Observable<IFilme[]> {
    return this.httpClient.get<IFilme[]>(`${API_PATH}Filmes`);
  }

  adicionar(filme: IFilme): Observable<IFilme> {
    return this.httpClient.post<IFilme>(`${API_PATH}Filmes`, filme);
  }

buscarMelhorFilme(filmeArray: IFilme[]){
  return filmeArray.reduce(function(filmePrev, filmeAtual){
    return filmePrev.nomeFilme > filmeAtual.nomeFilme ? filmePrev : filmeAtual;
  });
}


// buscarTopTres(filmesArray: IFilme[]) {
//   let filmeArrayCopia: IFilme[] = filmesArray;
//   let topTres: IFilme[] = [];

//   for (let i = 0; i < 3; i++) {
//     topTres.push(this.buscarMelhorFilme(filmeArrayCopia));
    
//   }
// }




// buscarFilme() {
//   return this.httpClient.get<IFilme[]>(`${API_PATH}Filmes` + '/get-all')
// }

 
  // listFilmes() {
  //   // return this.httpClient.get<IFilme[]>(`${this.API}`).toPromise();
  //   return this.httpClient.get<IFilme[]>(`${API_PATH}Filmes`).toPromise();
}