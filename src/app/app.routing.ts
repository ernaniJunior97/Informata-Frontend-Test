import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'lista-produtos',
        pathMatch: 'full'
    },
    {
        path: 'login', loadChildren: () => import('./login/login.module')
            .then(m => m.LoginModule)
    },
    {
        path: 'lista-produtos', loadChildren: () => import('./lista-produtos/lista-produtos.module')
            .then(m => m.ListaProdutosModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
