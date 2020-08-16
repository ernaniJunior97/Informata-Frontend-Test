import { HttpClient } from '@angular/common/http'
import { Produto } from '../login/shared/produto'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable()
export class ListaProdutosService {

    constructor(private _httpClient: HttpClient) { }

    listaProdutos(): Observable<Produto[]> {
        return this._httpClient.get<Produto[]>('https://us-central1-estudo-974fe.cloudfunctions.net/front_end');
    }
}
