import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='http://localhost:3000/user'

  constructor(private _http:HttpClient  ) { }



  getall(){
    return this._http.get(this.apiurl);
  }

  getbycode(code:any){
    return this._http.get(this.apiurl+'/'+code);
  }

  proceedregister(inputdata:any){
    return this._http.post(this.apiurl, inputdata);
  }

  updateuser(code:any, inputdata:any){
    return this._http.put(this.apiurl+'/'+code, inputdata);
  }

  IsloggeIn(){
    return sessionStorage.getItem('name')!=null;
  }

  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
}
