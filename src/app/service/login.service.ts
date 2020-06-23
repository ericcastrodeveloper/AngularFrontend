import { BaseService } from '../core/base.service';
import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { Observable } from 'rxjs';

const URL_ENDPOINT = "https://back-webcar-fiap.herokuapp.com/user/login";

@Injectable()
export class LoginService extends BaseService<LoginModel> {

    logar(login: LoginModel): Observable<boolean> {
        console.log(login);
        return this.http.post<boolean>(this.getUrlRecurso(), login);
      }

    getUrlRecurso(): string {
       return URL_ENDPOINT
    }
    
}