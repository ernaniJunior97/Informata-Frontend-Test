
import { HttpClient } from '@angular/common/http';
import { of, throwError, Observable } from 'rxjs';
import { Usuario } from './shared/usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(

        private http: HttpClient
    ) {

        const usuario: Usuario = { nome: 'andenson', senha: 'and', cpf: '', dataNasc: new Date('1995-07-07'), contato: '444' };
        localStorage.setItem(usuario.nome + usuario.senha, JSON.stringify(usuario));
    }



    login(usuario: { nome: string, senha: string }): Observable<any> {

        const busca = localStorage.getItem(this.getUserKey(usuario));
        if (busca) {

            localStorage.setItem('usuarioLogado', JSON.stringify(busca));

            return of(JSON.parse(busca));
        } else {
            alert('você ainda não possui cadastro!');
            return throwError('usuário não logado');
        }
    }

    private getUserKey(usuario: { nome: string, senha: string }): string {
        return usuario.nome + usuario.senha;
    }

    loggout(): void {
        localStorage.removeItem('usuarioLogado');
        // mudar para rota de login
    }

    isUserLogged(): boolean {
        return !!this.getLoggedUser();
    }

    getLoggedUser(): Usuario {

        const usuario = localStorage.getItem('usuarioLogado');

        return JSON.parse(usuario);
    }

    createUser(usuario: Usuario): Observable<Usuario> {

        localStorage.setItem(this.getUserKey({ nome: usuario.nome, senha: usuario.senha }), JSON.stringify(usuario));

        return of(usuario);


    }
}
