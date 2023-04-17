import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL=environment.api

  constructor(private http:HttpClient, private cookie:CookieService) { }

  sendCredentials(email:string,password:string):Observable<any>{
    const body={
      email,
      password
    }
    return this.http.post(`${this.apiURL}/auth/login`, body)
    .pipe(
      tap((responseOk:any)=>{
        const {tokenSession, data} = responseOk
        this.cookie.set('token_service',tokenSession,4,'/')
      })
    )
  }
}
