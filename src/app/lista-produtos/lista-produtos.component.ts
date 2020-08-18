import { Component, OnInit } from '@angular/core';
import { ListaProdutosService } from './lista-produtos.service';
import { Produto } from '../login/shared/produto';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap, startWith, catchError } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtosFiltrados: Produto[];
  queryField: FormGroup;
  readonly SEARCH_URL = 'https://us-central1-estudo-974fe.cloudfunctions.net/front_end';
  results$: Observable<Produto[]>;
  total: number;
  readonly FIELDS = 'name,description,version,homepage';

  listaProdutosOriginal: Produto[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder,
    private service: ListaProdutosService
  ) {
    this.queryField = fb.group({
      filtro: ['']
    });
  }

  ngOnInit() {

    this.queryField
      .get('filtro')
      .valueChanges
      .pipe(
        map(value => value.trim().toLowerCase()),
        debounceTime(300),
        // tap(value => console.log(value)),
        switchMap(value => {

          if (value) {
            const listaFiltrada = this.listaProdutosOriginal.filter(produto => {

              return produto.nomeComercial.toLowerCase().includes(value) || produto.id.toString().includes(value) ||
                produto.codigoErp.toString().includes(value) || produto.nomeComercialComApresentacao.toLowerCase().includes(value);
            });

            return of(listaFiltrada);
          }

          return of(this.listaProdutosOriginal);

        })
      ).subscribe({
        next: lista => {
          this.produtosFiltrados = lista;
        }
      });
    this._carregarProdutos();

  }

  private _carregarProdutos() {
    this.service.listaProdutos()
      .subscribe({
        next: lista => {
          this.listaProdutosOriginal = lista;
          this.produtosFiltrados = lista;
        },
        error: err => {
          console.log(err);
        }
      });
  }


  buscarProduto() {


    const fields = 'name,description,version,homepage';
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {

      const params_ = {
        search: value,
        fields: fields
      };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);

    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['../login'], { relativeTo: this.route });
  }

}