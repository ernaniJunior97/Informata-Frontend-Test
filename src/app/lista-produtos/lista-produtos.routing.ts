import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaProdutosComponent } from './lista-produtos.component';

const routes: Routes = [
    { path: '', component: ListaProdutosComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaProdutosRoutingModule { }
