import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private login_Url="http://localhost:8080/api/users/loginByName";
  private save_Url="http://localhost:8080/api/users/save";

  constructor(private http:HttpClient) { }

  login(name:string ,password:string): Observable<any>{
    const payLoad={name,password}
    return this.http.post<any>(this.login_Url,payLoad);

  }

  save(name:string,email:string,password:string):Observable<any>{
    const payLoad={name,email,password}
      return this.http.post<any>(this.save_Url,payLoad);
  }
}
