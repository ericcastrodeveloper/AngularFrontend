import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { UsuarioService } from '../service/usuario.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios: UsuarioModel[];
  usuario: UsuarioModel;
  dataSource = this.usuarios;
  displayedColumns: string[] = ['cpf', 'name', 'dtBirth', 'status', 'inVehicle'];


  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.listar().subscribe(resultado => {
      this.usuarios = resultado;
      this.dataSource = this.usuarios;
    });
  }

  ngOnInit(): void {

  }

  buscar(id: number) {
    return this.usuarioService.buscar(id).subscribe(resultado => {
      this.usuario = resultado;
      this.dataSource = this.usuarios;
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }

  salvar(usuario: UsuarioModel) {
    return this.usuarioService.salvar(usuario).subscribe(resultado => {
      console.log("Adicionado com sucesso!");
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }

  atualizar(usuario: UsuarioModel) {

    this.usuarioService.editar(usuario.id, usuario).subscribe(resultado => {
      console.log("Atualizado com sucesso!");
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }

  deletar(id: number) {
    return this.usuarioService.excluir(id).subscribe(resultado => {
      console.log("Deletado com sucesso!")
    },
      erro => {
        if (erro.status == 404) {
          console.log('Serviço não localizado.');
        }
      });
  }
}
