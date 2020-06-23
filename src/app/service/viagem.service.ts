import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../core/base.service';
import { VeiculoModel } from '../model/veiculo.model';
import { ViagemConfirmarDTO } from '../model/viagem-confirmar.dto';
import { ViagemDisponibilidadeDTO } from '../model/viagem-disponibildade.dto';
import { ViagemModel } from '../model/viagem.model';
import { ViagemAguardeDTO } from '../model/viagem-aguarde.dto';

const URL_ENDPOINT = "https://back-webcar-fiap.herokuapp.com/trip";

@Injectable()
export class ViagemService extends BaseService<ViagemModel> {

  confirmarViagem(viagem: ViagemConfirmarDTO): Observable<ViagemAguardeDTO> {
    return this.http.post<ViagemAguardeDTO>(this.getUrlRecurso() + "/confirm", viagem);
  }

  consultarDisponibilidade(viagem: ViagemDisponibilidadeDTO): Observable<VeiculoModel[]> {
    return this.http.post<VeiculoModel[]>(this.getUrlRecurso() + "/disponibility", viagem);
  }

  getUrlRecurso(): string {
    return URL_ENDPOINT;
  }

}