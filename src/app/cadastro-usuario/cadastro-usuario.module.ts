import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { CadastroUsuarioRoutingModule } from './cadastro-usuario.routing';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutosService } from '../lista-produtos/lista-produtos.service';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    HttpClientModule,
    CadastroUsuarioRoutingModule,
    CalendarModule,
    InputMaskModule,
    InputTextModule
    
  ],

  providers: [ListaProdutosService]

})
export class CadastroUsuarioModule { }
