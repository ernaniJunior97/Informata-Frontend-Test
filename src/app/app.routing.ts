import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginGuard } from './login/login.guard';
import { UsuarioLogadoGuard } from './login/usuario-logado.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'lista-produtos',
        pathMatch: 'full'
    },
    {
        path: 'login', loadChildren: () => import('./login/login.module')
            .then(m => m.LoginModule), canActivate: [LoginGuard]
    },
    {
        path: 'lista-produtos', loadChildren: () => import('./lista-produtos/lista-produtos.module')
            .then(m => m.ListaProdutosModule), canActivate: [UsuarioLogadoGuard]
    },
    {
        path: 'cadastro-usuario', loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module')
            .then(m => m.CadastroUsuarioModule), canActivate: [LoginGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
