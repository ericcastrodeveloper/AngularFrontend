import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { UsuarioService } from '../service/usuario.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario = new UsuarioModel();

  constructor(private usuarioService: UsuarioService, private datePipe: DatePipe, private router: Router) {
    this.usuarioService = usuarioService;
    this.datePipe = datePipe;
   }

  ngOnInit(): void {
  }

  registrar(usuario: UsuarioModel){
    console.log(usuario);
    usuario.dtBirth = this.datePipe.transform(usuario.dtBirth, 'dd-MM-yyyy');
    this.usuarioService.salvar(usuario).subscribe(resultado => {
      if(resultado != null){
        alert('Cadastrado com sucesso!');
        this.router.navigateByUrl('/');
      }
      else
      alert('Erro ao cadastrar!');
    });
  }

}
