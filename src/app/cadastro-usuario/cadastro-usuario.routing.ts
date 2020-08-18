import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';

const routes: Routes = [
    { path: '', component: CadastroUsuarioComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroUsuarioRoutingModule { }
