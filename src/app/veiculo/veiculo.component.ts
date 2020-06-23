import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../service/veiculo.service';
import { VeiculoModel } from '../model/veiculo.model';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  veiculos: VeiculoModel[];
  veiculo: VeiculoModel;
  displayedColumns: string[] = ['plate', 'nick', 'model', 'status', 'year', 'color', 'mileage'];
  dataSource = this.veiculos;

  constructor(private veiculoService: VeiculoService) {
    this.veiculoService.listar().subscribe(resultado => {
      this.veiculos = resultado;
      this.dataSource = this.veiculos;
    })
  }

  ngOnInit(): void {
  }

  listar() {
    return this.veiculoService.listar().subscribe(resultado => {
      this.veiculos = resultado;
      this.dataSource = this.veiculos;
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }

  buscar(id: number) {
    return this.veiculoService.buscar(id).subscribe(resultado => {
      this.veiculo = resultado;
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }

  salvar(veiculo: VeiculoModel) {
    return this.veiculoService.salvar(veiculo).subscribe(resultado => {
      console.log("Salvo com sucesso!")
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }

  atualizar(id: number, veiculo: VeiculoModel) {
    return this.veiculoService.editar(id, veiculo).subscribe(resultado => {
      console.log("Atualizado com sucesso!")
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }

  deletar(id: number) {
    return this.veiculoService.excluir(id).subscribe(resultado => {
      console.log("Deletado com sucesso!");
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });;
  }

}
