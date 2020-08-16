import { Component, OnInit } from '@angular/core';
import { ListaProdutosService } from './lista-produtos.service';
import { Produto } from '../login/shared/produto';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Produto[];

  constructor(private service: ListaProdutosService) { }

  ngOnInit(): void {
    this.service.listaProdutos()
      .subscribe({
        next: produtos => {
          this.produtos = produtos;
        },
        error: err => {
          console.log(err);
        }
      });

  }

  private _carregarProdutos() {
    //mover chamada do service para dentro desse metodo e chamr esse metodo no ngoinit 
  }
}
