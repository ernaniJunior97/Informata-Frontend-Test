import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ListaProdutosComponent } from './lista-produtos.component';
import { ListaProdutosRoutingModule } from './lista-produtos.routing';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { ListaProdutosGuard } from './lista-produtos.guard';
import { ListaProdutosService } from './lista-produtos.service';
import { LoginModule } from '../login/login.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ListaProdutosRoutingModule,
    ReactiveFormsModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    LoginModule,
    HttpClientModule

  ],
  providers: [ListaProdutosGuard, ListaProdutosService]
})
export class ListaProdutosModule { }
