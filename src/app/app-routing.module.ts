import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SolicitarViagemComponent } from './solicitar-viagem/solicitar-viagem.component';
import { UsuarioComponent } from "./usuario/usuario.component";
import { VeiculoComponent } from "./veiculo/veiculo.component";
import { ViagemComponent } from "./viagem/viagem.component";


const routes: Routes = [
  { path: "user/viagem", component: SolicitarViagemComponent },
  { path: "admin/usuario", component: UsuarioComponent },
  { path: "admin/veiculo", component: VeiculoComponent },
  { path: "admin/viagem", component: ViagemComponent },
  { path: "", component: LoginComponent },
  { path: "registro", component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
