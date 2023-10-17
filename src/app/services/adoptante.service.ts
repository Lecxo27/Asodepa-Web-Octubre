import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptanteService {

  constructor(private _http: HttpClient) { }

  addAdoptante(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/adoptante', data)
  }

  getAdoptante(): Observable<any> {
    return this._http.get('http://localhost:3000/adoptante')
  }

  delAdoptante (id: number): Observable<any> {
    const url = `http://localhost:3000/adoptante/${id}`;
    return this._http.delete(url);
  }

  updateAdoptante(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/adoptante/${id}`, data);
  }
}
