import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { ButtonModule } from 'primeng/button';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './login.service';
import { LoginGuard } from './login.guard';
// import { FlexLayoutModule } from '@angular/flex-layout';



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
    // FlexLayoutModule
  ],
  providers: [LoginService, LoginGuard]
})
export class LoginModule{ }
