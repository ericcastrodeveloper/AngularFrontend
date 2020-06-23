import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../service/viagem.service';
import { ViagemModel } from '../model/viagem.model';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.scss']
})
export class ViagemComponent implements OnInit {

  private viagemService: ViagemService

  viagens: ViagemModel[];
  viagem: ViagemModel;

    constructor(viagemService: ViagemService){
        this.viagemService = viagemService;
    }

    ngOnInit(): void {
    }

    listar(){
        return this.viagemService.listar().subscribe(resultado => {
            this.viagens = resultado;
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    buscar(id: number){
        return this.viagemService.buscar(id).subscribe(resultado => {
            console.log("Busca realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    salvar(viagem: ViagemModel){
        return this.viagemService.salvar(viagem).subscribe(resultado => {
            console.log("Adicionado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    atualizar(id: number, viagem: ViagemModel){
        return this.viagemService.editar(id, viagem).subscribe(resultado => {
            console.log("Atualização realizada com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

    deletar(id: number){
        return this.viagemService.excluir(id).subscribe(resultado => {
            console.log("Deletado com sucesso!");
          },
          erro => {
            if(erro.status == 404) {
              console.log('Serviço não localizado.');
            }
          });
    }

}
