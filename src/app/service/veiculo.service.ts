import { BaseService } from '../core/base.service';
import { VeiculoModel } from '../model/veiculo.model';
import { Injectable } from '@angular/core';

const URL_ENDPOINT = "https://back-webcar-fiap.herokuapp.com/vehicle";

@Injectable()
export class VeiculoService extends BaseService<VeiculoModel> {

    getUrlRecurso(): string {
       return URL_ENDPOINT
    }
    
}