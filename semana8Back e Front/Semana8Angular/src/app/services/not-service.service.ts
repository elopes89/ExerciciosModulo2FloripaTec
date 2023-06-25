import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_JAVA } from 'src/environments/environment.development';
import { INot } from 'src/INot';

@Injectable({
  providedIn: 'root'
})
export class NotService {

cat: INot []= []
  constructor(private http: HttpClient) { }
getAll(): Observable<INot[]> {
return this.http.get<INot[]>(`${API_JAVA}/not`)
}

add(not?: INot): Observable<INot>{
  return this.http.post<INot>(`${API_JAVA}/not`, not)
}

editLido(not?: INot): Observable<INot>{
  return this.http.put<INot>(`${API_JAVA}/not/up/${not?.id}`, not)
}


remove(id?: number){
  return this.http.delete<INot>(`${API_JAVA}/not/${id}`)
}

}
