import { NgModule, ApplicationModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { LoginService } from './login.service';
import { LoginGuard } from './login.guard';
import { UsuarioLogadoGuard } from './usuario-logado.guard';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, LoginGuard, UsuarioLogadoGuard]
})
export class LoginModule { }
