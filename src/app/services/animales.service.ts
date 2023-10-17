import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private _http: HttpClient) { }
  getAnimal(): Observable<any> {
    return this._http.get<any>('http://localhost:3000/animales')
  }

  addAnimal(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/animales', data)
  }

  delAnimal(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/animales/${id}`);
  }

  updateAnimal(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/animales/${id}`, data);
  }
}
