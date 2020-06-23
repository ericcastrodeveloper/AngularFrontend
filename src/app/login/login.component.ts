import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../service/login.service';
import { LoginModel } from '../model/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sucesso: boolean;

  login = new LoginModel();

  constructor(private loginService: LoginService, private router:Router) {
    this.loginService = loginService;
    this.router = router;
   }

  ngOnInit(): void {
  }

  logar(login: LoginModel){
     this.loginService.logar(login).subscribe(resultado => {
      console.log(resultado); 
      this.sucesso = resultado;

      if(this.sucesso){
        console.log(login)
        this.router.navigateByUrl('/user/viagem')
      }else
      alert("Usuário ou senha incorretos!")

     })

   
  }
}
