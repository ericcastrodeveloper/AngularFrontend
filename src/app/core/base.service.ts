import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService<T> {
    constructor(protected http: HttpClient) {
  
    }
  
    listar(): Observable<T[]> {
      return this.http.get<T[]>(this.getUrlRecurso());
    }
  
    buscar(id: number): Observable<T> {
      return this.http.get<T>(`${this.getUrlRecurso()}/${id}`);
    }
  
    salvar(t: T): Observable<T> {
      return this.http.post<T>(this.getUrlRecurso(), t);
    }
  
    excluir(id: number): Observable<Response> {
      return this.http.delete<Response>(`${this.getUrlRecurso()}/${id}`);
    }
  
    editar(id: number | string, t: T): Observable<Response> {
      return this.http.put<Response>(`${this.getUrlRecurso()}/${id}`, t);
    }
  
    abstract getUrlRecurso(): string;
  }
  
  