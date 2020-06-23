import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioService } from './service/usuario.service';
import { VeiculoService } from './service/veiculo.service';
import { ViagemService } from './service/viagem.service';
import { SolicitarViagemComponent } from './solicitar-viagem/solicitar-viagem.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { ViagemComponent } from './viagem/viagem.component';
import { AgmCoreModule } from '@agm/core';
import { LoginService } from './service/login.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ViagemComponent,
    SolicitarViagemComponent,
    VeiculoComponent,
    UsuarioComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [UsuarioService, VeiculoService, ViagemService, LoginService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
