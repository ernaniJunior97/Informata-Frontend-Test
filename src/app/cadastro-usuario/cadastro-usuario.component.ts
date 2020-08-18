import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../login/shared/usuario';
import { throwError } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  usuario: Usuario;

  cadastroForm: FormGroup;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this.configurarForm();

  }


  configurarForm(): void { this.cadastroForm = this.fb.group({
      dataNasc: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])
      ],
      nome: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])
      ],
      contato: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])
      ],
      cpf: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(11)
      ])
      ],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(1000)
      ])
      ],

    });
  }


  criar() {

    this.loginService.createUser(this.cadastroForm.value)
      .subscribe(resposta => {
        this.usuario = resposta;
        alert('Usuário cadastrado com sucesso!');
        debounceTime(1000);
        this.router.navigate(['../login'], { relativeTo: this.route });
        this.cadastroForm.reset();
      });
  }


  voltar() {
    this.router.navigate(['../login'], { relativeTo: this.route });

  }
}