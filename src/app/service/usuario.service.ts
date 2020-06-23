import { UsuarioModel } from '../model/usuario.model';
import { Injectable } from '@angular/core';
import { BaseService } from '../core/base.service';
import { HttpClient } from '@angular/common/http';

const URL_ENDPOINT = 'https://back-webcar-fiap.herokuapp.com/user';

@Injectable()
export class UsuarioService extends BaseService<UsuarioModel> {

    constructor(protected http: HttpClient) {
        super(http);
    
    }
    getUrlRecurso(): string {
        return URL_ENDPOINT;
    }
    
}