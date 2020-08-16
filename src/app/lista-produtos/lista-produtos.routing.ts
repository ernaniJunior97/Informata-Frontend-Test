import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaProdutosComponent } from './lista-produtos.component';
import { ListaProdutosGuard } from './lista-produtos.guard';


const routes: Routes = [
    { path: '', component: ListaProdutosComponent, canActivate: [ListaProdutosGuard] },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaProdutosRoutingModule { }
